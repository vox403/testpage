(function () {
  "use strict";

  const TODAY_WORK_URL = "today-work.html?autostart=1";
  const DAILY_WORK_SCORE = 10;
  const EMPLOYEE_KEY = "voxtek_employee_v1";
  const EVAL_STORAGE_PREFIX = "voxtek_june_evaluation_v1_";
  const EVAL_YEAR = 2026;
  const SUPABASE_URL = "https://gvuhbxpkmyiakyfhuish.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_uCymLmzy-3NR9JyOL-9DtA_HmkGb0-k";

  let originalMissionRender = null;
  let originalMissionVerifyPassword = null;
  let originalEvaluationScore = null;
  let bridgeClient = null;

  function $(id) {
    return document.getElementById(id);
  }

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  function getEmployee() {
    try {
      return JSON.parse(localStorage.getItem(EMPLOYEE_KEY) || "null");
    } catch (error) {
      return null;
    }
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (match) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[match];
    });
  }

  function getBridgeClient() {
    if (bridgeClient) return bridgeClient;
    try {
      if (window.supabase && window.supabase.createClient) {
        bridgeClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      }
    } catch (error) {
      console.warn("Today-work Supabase bridge failed:", error);
    }
    return bridgeClient;
  }

  function ensureSelectorViews() {
    const shell = document.querySelector("#window-helltalk .mission-shell");
    if (!shell) return;

    if (!$('missionSelectorView')) {
      const selector = document.createElement("section");
      selector.id = "missionSelectorView";
      selector.className = "mission-panel hidden mission-selector-view";
      selector.innerHTML = `
        <div class="mission-top">
          <strong>VOXTEK MISSION CHANNEL</strong>
          <div class="mission-top-right"><span class="mission-status">CHANNEL SELECT</span></div>
        </div>
        <div class="mission-selector-inner">
          <div class="mission-selector-copy">
            <span>MISSION SELECTOR</span>
            <h3>채널을 선택하십시오.</h3>
            <p>기존 생명체 관리 임무와 오늘의 업무 채널을 분기합니다.</p>
          </div>
          <div class="mission-selector-grid">
            <button class="mission-selector-card" id="missionOpenEggChannel" type="button">
              <small>01 / EXISTING CHANNEL</small>
              <strong>알키우기</strong>
              <span>기존 생명체 관리 임무를 진행합니다. 기존 조건과 진행 기록은 유지됩니다.</span>
            </button>
            <button class="mission-selector-card is-primary" id="missionOpenTodayWorkChannel" type="button">
              <small>02 / DAILY CHANNEL</small>
              <strong>오늘의 업무</strong>
              <span>CCTV 기록 확인 후 단말기에 보고하는 사내 업무 채널입니다.</span>
            </button>
          </div>
        </div>
      `;
      shell.prepend(selector);
    }

    if (!$('missionTodayWorkView')) {
      const view = document.createElement("section");
      view.id = "missionTodayWorkView";
      view.className = "mission-panel hidden mission-today-work-view";
      view.innerHTML = `
        <div class="mission-top">
          <strong>VOXTEK TODAY WORK</strong>
          <div class="mission-top-right">
            <button class="mission-btn secondary" id="missionTodayWorkBack" type="button">MISSION LIST</button>
          </div>
        </div>
        <iframe id="missionTodayWorkFrame" class="mission-today-work-frame" title="오늘의 업무" src="" loading="lazy"></iframe>
      `;
      shell.appendChild(view);
    }

    const eggBtn = $('missionOpenEggChannel');
    const todayBtn = $('missionOpenTodayWorkChannel');
    const backBtn = $('missionTodayWorkBack');
    if (eggBtn && !eggBtn.dataset.bound) {
      eggBtn.dataset.bound = "1";
      eggBtn.addEventListener("click", showEggChannel);
    }
    if (todayBtn && !todayBtn.dataset.bound) {
      todayBtn.dataset.bound = "1";
      todayBtn.addEventListener("click", showTodayWorkChannel);
    }
    if (backBtn && !backBtn.dataset.bound) {
      backBtn.dataset.bound = "1";
      backBtn.addEventListener("click", showMissionSelector);
    }
  }

  function ensureStyles() {
    if ($('missionTodayWorkPatchStyle')) return;
    const style = document.createElement("style");
    style.id = "missionTodayWorkPatchStyle";
    style.textContent = `
      .mission-selector-inner{padding:22px;min-height:560px;background:linear-gradient(180deg,rgba(3,18,31,.96),rgba(2,8,17,.98));border:1px solid rgba(0,216,255,.22)}
      .mission-selector-copy{border:1px solid rgba(0,216,255,.26);background:rgba(0,26,42,.58);padding:22px;margin-bottom:18px}.mission-selector-copy span{display:block;color:#00e5ff;letter-spacing:.22em;font-size:12px}.mission-selector-copy h3{font-size:38px;margin:14px 0 10px;color:#fff;letter-spacing:-.04em}.mission-selector-copy p{margin:0;color:#b8e9ff;line-height:1.7}.mission-selector-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.mission-selector-card{text-align:left;border:1px solid rgba(0,216,255,.34);background:linear-gradient(145deg,rgba(5,18,32,.96),rgba(3,12,23,.98));color:#eaf9ff;padding:20px;min-height:170px;cursor:pointer;position:relative;overflow:hidden}.mission-selector-card:before{content:"";position:absolute;right:-46px;bottom:-38px;width:130px;height:130px;border:1px solid rgba(0,216,255,.24);transform:skewX(-18deg)}.mission-selector-card:hover,.mission-selector-card:focus-visible{outline:none;border-color:rgba(255,255,255,.86);box-shadow:0 0 24px rgba(0,220,255,.16)}.mission-selector-card.is-primary{border-color:rgba(255,255,255,.78)}.mission-selector-card small{display:block;color:#7cb7ca;letter-spacing:.18em;margin-bottom:18px}.mission-selector-card strong{display:block;font-size:28px;margin-bottom:10px;color:#fff}.mission-selector-card span{display:block;color:#c8eeff;line-height:1.7}.mission-today-work-frame{display:block;width:100%;height:min(760px,calc(100vh - 190px));border:0;background:#01070d}.mission-today-work-view{background:#01070d}@media(max-width:760px){.mission-selector-grid{grid-template-columns:1fr}.mission-selector-copy h3{font-size:30px}.mission-today-work-frame{height:calc(100vh - 150px)}}
    `;
    document.head.appendChild(style);
  }

  function hideMissionPanels() {
    [
      'missionGateView', 'missionChatView', 'missionSetupView', 'missionGameView',
      'missionFinalView', 'missionDeadView', 'missionSelectorView', 'missionTodayWorkView'
    ].forEach((id) => {
      const node = $(id);
      if (node) node.classList.add('hidden');
    });
    const admin = $('adminMissionShell');
    if (admin) admin.classList.add('hidden');
  }

  function showMissionSelector() {
    ensureSelectorViews();
    hideMissionPanels();
    const selector = $('missionSelectorView');
    if (selector) selector.classList.remove('hidden');
  }

  function showEggChannel() {
    hideMissionPanels();
    if (typeof originalMissionRender === 'function') {
      originalMissionRender();
    } else if ($('missionChatView')) {
      $('missionChatView').classList.remove('hidden');
    }
  }

  function showTodayWorkChannel() {
    ensureSelectorViews();
    hideMissionPanels();
    const frame = $('missionTodayWorkFrame');
    if (frame && !frame.src) frame.src = TODAY_WORK_URL;
    const view = $('missionTodayWorkView');
    if (view) view.classList.remove('hidden');
  }

  function shouldUseMissionSelector() {
    const employee = getEmployee();
    if (!employee || employee.isAdmin) return false;
    try {
      if (typeof window.missionEnsureState === 'function') {
        const state = window.missionEnsureState();
        return !!(state && state.missionAccessGranted);
      }
    } catch (error) {}
    return false;
  }


  function bindPasswordFollowup() {
    const btn = $('missionPasswordBtn');
    const input = $('missionPasswordInput');
    const follow = () => setTimeout(() => {
      if (shouldUseMissionSelector()) showMissionSelector();
    }, 80);
    if (btn && !btn.dataset.todayWorkFollowupBound) {
      btn.dataset.todayWorkFollowupBound = '1';
      btn.addEventListener('click', follow);
    }
    if (input && !input.dataset.todayWorkFollowupBound) {
      input.dataset.todayWorkFollowupBound = '1';
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') follow();
      });
    }
  }

  function patchMissionRender() {
    if (window.__voxtekTodayWorkPatchApplied) return;
    window.__voxtekTodayWorkPatchApplied = true;
    originalMissionRender = typeof window.missionRender === 'function' ? window.missionRender : null;
    originalMissionVerifyPassword = typeof window.missionVerifyPassword === 'function' ? window.missionVerifyPassword : null;

    if (originalMissionRender) {
      window.missionRender = function missionRenderWithSelector() {
        ensureStyles();
        ensureSelectorViews();
        if (shouldUseMissionSelector()) {
          showMissionSelector();
          return;
        }
        return originalMissionRender.apply(this, arguments);
      };
    }

    if (originalMissionVerifyPassword) {
      window.missionVerifyPassword = function missionVerifyPasswordWithSelector() {
        const result = originalMissionVerifyPassword.apply(this, arguments);
        setTimeout(() => {
          if (shouldUseMissionSelector()) showMissionSelector();
        }, 20);
        return result;
      };
    }
  }

  function patchEvaluationScore() {
    if (window.__voxtekTodayWorkScorePatchApplied) return;
    originalEvaluationScore = typeof window.evaluationScore === 'function' ? window.evaluationScore : null;
    if (!originalEvaluationScore) return;
    window.__voxtekTodayWorkScorePatchApplied = true;
    window.evaluationScore = function evaluationScoreWithDailyBonus(state) {
      const attendance = new Set((state && state.attendanceDates) || []).size;
      const cleared = Object.values((state && state.clearedOrders) || {});
      const clearCount = cleared.length;
      const perfectCount = cleared.filter((item) => item && item.perfect).length;
      const orderScore = cleared.reduce((sum, item) => {
        const value = Number(item && item.scoreGain);
        if (Number.isFinite(value) && value > 0) return sum + value;
        return sum + (item && item.perfect ? 3 : 2);
      }, 0);
      return { attendance, clearCount, perfectCount, total:attendance + orderScore };
    };
  }

  function evaluationStorageKey(employee) {
    const id = employee && (employee.employeeId || employee.name) ? (employee.employeeId || employee.name) : 'unknown';
    return `${EVAL_STORAGE_PREFIX}${EVAL_YEAR}_${id}`;
  }

  function recordLocalEvaluation(payload) {
    const employee = getEmployee();
    if (!employee || employee.isAdmin) return false;
    const date = payload.localDate || todayKey();
    const key = evaluationStorageKey(employee);
    let state;
    try {
      state = JSON.parse(localStorage.getItem(key) || '{}');
    } catch (error) {
      state = {};
    }
    state.attendanceDates = Array.isArray(state.attendanceDates) ? state.attendanceDates : [];
    state.clearedOrders = state.clearedOrders && typeof state.clearedOrders === 'object' ? state.clearedOrders : {};
    if (!state.clearedOrders[date]) {
      const day = Number(date.slice(-2)) || new Date().getDate();
      state.clearedOrders[date] = {
        day,
        perfect:false,
        completedAt:payload.completedAt || new Date().toISOString(),
        attempts:1,
        misses:0,
        clearTimeMs:0,
        scoreGain:DAILY_WORK_SCORE,
        source:'today_work_cctv'
      };
      state.updatedAt = new Date().toISOString();
      localStorage.setItem(key, JSON.stringify(state));
      return true;
    }
    return false;
  }

  async function recordSupabaseEvent(payload, insertedLocal) {
    const employee = getEmployee();
    const client = getBridgeClient();
    if (!employee || employee.isAdmin || !client) return;
    const date = payload.localDate || todayKey();
    const detail = {
      source:'today_work_cctv',
      quest_id:payload.questId || 'daily_cctv_report',
      order_text:'CCTV 기록 확인',
      score_gain:DAILY_WORK_SCORE,
      inserted_local:!!insertedLocal,
      client_time:new Date().toISOString()
    };
    try {
      await client.from('voxtek_events').insert({
        event_type:'DAILY_ORDER_CLEARED',
        account_id:employee.employeeId || employee.name || '',
        employee_name:employee.name || '',
        mission_id:null,
        creature_name:null,
        mission_day:null,
        points:null,
        affection:null,
        local_date:date,
        session_id:localStorage.getItem('voxtek_mission_session_v1') || '',
        user_agent:navigator.userAgent,
        detail
      });
    } catch (error) {
      console.warn('Today-work event record failed:', error);
    }
  }

  function handleTodayWorkMessage(event) {
    if (event.origin !== window.location.origin) return;
    const data = event.data || {};
    if (!data || data.type !== 'VOXTEK_TODAY_WORK_COMPLETED') return;
    const insertedLocal = recordLocalEvaluation(data);
    recordSupabaseEvent(data, insertedLocal);
    patchEvaluationScore();
    try {
      if (typeof window.renderEvaluation === 'function') window.renderEvaluation();
    } catch (error) {}
  }

  function init() {
    ensureStyles();
    ensureSelectorViews();
    patchMissionRender();
    bindPasswordFollowup();
    patchEvaluationScore();
    window.addEventListener('message', handleTodayWorkMessage);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
