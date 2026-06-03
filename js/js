function assetFail(img){
      const parent = img.parentElement;
      if (!parent) return;
      img.style.display = 'none';
      const fallback = parent.querySelector('.asset-fallback, .icon-fallback, .fallback');
      if (fallback) fallback.style.display = 'flex';
    }

    const STORAGE_KEY = 'voxtek_employee_v1';
    const ADMIN_SESSION_KEY = 'voxtek_admin_session_v1';
    const SOUND_KEY = 'voxtek_sound_state_v1';
    const MAIL_READ_KEY = 'voxtek_mail_read_ids_v1';
    const VOXTEK_PATCH_VERSION = '2026-05-30-admin-approval-random-team-v2';
    const BIRTHDAY_PROMPT_SESSION_KEY = 'voxtek_birthday_prompt_session_v1';

    const ADMIN_PROFILES = {
      vox: {
        key:'vox',
        name:'복스',
        handle:'@vox403_v',
        passcode:'@vox403_v',
        joinedAt:'1950-04-19T00:00:00+09:00',
        badge:{ src:'v2.png', label:'v2.png' },
        line:'VOX LINE',
        authority:'대표 권한 · VoxTek Founder Access',
        position:'전(前) VoxTek CEO · 미디어 오버로드 · 창립자',
        greeting:'VOX ADMIN SESSION',
        missionCopy:'직원 임무를 직접 검토하는 관리자 콘솔입니다. 관찰 대상의 반응, 수행 품질, 시스템 오류를 기록하십시오.',
        vocCopy:'대표님, VOC 관리자 회선이 연결되었습니다. 공개 답변 기록을 확인하거나 운영 메모를 남길 수 있습니다.'
      },
      valentino: {
        key:'valentino',
        name:'발렌티노',
        handle:'@pimplife_v',
        passcode:'@pimplife_v',
        joinedAt:'1970-11-20T00:00:00+09:00',
        badge:{ src:'v1.png', label:'v1.png' },
        line:'VALENTINO LINE',
        authority:'대표 권한 · V-Tower Executive Access',
        position:'현(現) VoxTek CEO · V-타워 스튜디오 디렉터',
        greeting:'VALENTINO ADMIN SESSION',
        missionCopy:'대표님 전용 관찰 콘솔입니다. 표본을 직접 관리해 보거나, 직원들의 수행 상태를 확인한 뒤 관찰 일지를 남기십시오.',
        vocCopy:'발렌티노 님, VOC 관리자 회선입니다. 접수된 말들은 분류되어 있으며, 필요한 경우 운영 메모로 남길 수 있습니다.'
      },
      velvette: {
        key:'velvette',
        name:'벨벳',
        handle:'@Vel_spotlight_v',
        passcode:'@Vel_spotlight_v',
        joinedAt:'2000-12-07T00:00:00+09:00',
        badge:{ src:'v3.png', label:'v3.png' },
        line:'VELVETTE LINE',
        authority:'대표 권한 · Vees Trend Executive Access',
        position:'패션 오버로드 · 트렌드 디렉터 · Vees Executive',
        greeting:'VELVETTE ADMIN SESSION',
        missionCopy:'트렌드와 반응을 관찰하는 관리자 콘솔입니다. 직원들이 얼마나 볼만하게 움직이는지 확인하고, 쓸 만한 기록만 남기십시오.',
        vocCopy:'벨벳 님, VOC 관리자 회선입니다. 공개 답변 기록과 직원 반응을 확인할 수 있습니다. 구린 건 바로 걸러내면 됩니다.'
      }
    };

  
    const SUPABASE_URL = 'https://gvuhbxpkmyiakyfhuish.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_uCymLmzy-3NR9JyOL-9DtA_HmkGb0-k';
    const supabaseClient = (() => {
      try{
        if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
        if (!window.supabase || !window.supabase.createClient) return null;
        return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      }catch(error){
        console.warn('Supabase init failed:', error);
        return null;
      }
    })();

    const MISSION_STORAGE_PREFIX = 'voxtek_mission_state_v1_';
    const MISSION_SESSION_KEY = 'voxtek_mission_session_v1';
    const MISSION_DAILY_POINT = 3;
    const MISSION_FINAL_DAY = 11;
    const MISSION_CARE_TOTAL = 10;
    const MISSION_SICK_AFTER_DAYS = 2;
    const MISSION_DEATH_AFTER_DAYS = 4;
    const MISSION_UNLOCK_DAY = 44;
    const MISSION_COMMON_PASSWORD = 'VT-867988';
    const MISSION_ASSET = {
      egg:'egg.png',
      eggBath:'egg2.png',
      eggHeart:'egg3.png',
      happy:'Happy.png',
      normal:'Normal.png',
      bad:'Bad.png'
    };
    const MISSION_CREATURE_POOL = [
      { key:'VOX', label:'복냥이', prefix:'' }
    ];


    const loginScreen = document.getElementById('loginScreen');
    const desktopScreen = document.getElementById('desktopScreen');
    const introScreen = document.getElementById('introScreen');
    const introPopup = document.getElementById('introPopup');
    const introCloseBtn = document.getElementById('introCloseBtn');
    const employeeNameInput = document.getElementById('employeeName');
    const loginBtn = document.getElementById('loginBtn');
    const quitBtn = document.getElementById('quitBtn');
    const adminLoginOpenBtn = document.getElementById('adminLoginOpenBtn');
    const adminLoginModal = document.getElementById('adminLoginModal');
    const adminPasscodeInput = document.getElementById('adminPasscodeInput');
    const adminLoginStatus = document.getElementById('adminLoginStatus');
    const adminLoginConfirm = document.getElementById('adminLoginConfirm');
    const adminLoginCancel = document.getElementById('adminLoginCancel');
    const adminAccountButtons = Array.from(document.querySelectorAll('.admin-account-btn'));
    let selectedAdminKey = 'vox';
    const loginStatus = document.getElementById('loginStatus');
    const loginNote = document.getElementById('loginNote');
    const bootOverlay = document.getElementById('bootOverlay');
    const bootLines = Array.from(bootOverlay.querySelectorAll('.boot-line'));
    const quitModal = document.getElementById('quitModal');
    const confirmQuit = document.getElementById('confirmQuit');
    const cancelQuit = document.getElementById('cancelQuit');
    const birthdayModal = document.getElementById('birthdayModal');
    const birthdayInput = document.getElementById('birthdayInput');
    const birthdayStatus = document.getElementById('birthdayStatus');
    const birthdaySave = document.getElementById('birthdaySave');
    const birthdayLater = document.getElementById('birthdayLater');
    const nameEditModal = document.getElementById('nameEditModal');
    const nameEditInput = document.getElementById('nameEditInput');
    const nameEditStatus = document.getElementById('nameEditStatus');
    const nameEditSave = document.getElementById('nameEditSave');
    const nameEditCancel = document.getElementById('nameEditCancel');
    const nameHistoryList = document.getElementById('nameHistoryList');
    const topbarRoleLabel = document.getElementById('topbarRoleLabel');
    const topbarName = document.getElementById('topbarName');
    const clockChip = document.getElementById('clockChip');
    const soundToggle = document.getElementById('soundToggle');
    const bgAudio = document.getElementById('bgAudio');
    const musicVideo = document.getElementById('musicVideo');
    const broadcastYoutube = document.getElementById('broadcastYoutube');
    const broadcastIntro = document.getElementById('broadcastIntro');
    const broadcastCurrentChannel = document.getElementById('broadcastCurrentChannel');
    const broadcastChannelButtons = Array.from(document.querySelectorAll('.broadcast-channel-btn'));
    const windowLayer = document.getElementById('windowLayer');
    const mailList = document.getElementById('mailList');
    const mailDetail = document.getElementById('mailDetail');
    const mailShell = document.getElementById('mailShell');
    const mailDesktopIcon = document.getElementById('mailDesktopIcon');
    const mailUnreadBadge = document.getElementById('mailUnreadBadge');
    const evaluationStatus = document.getElementById('evaluationStatus');
    const evaluationBody = document.getElementById('evaluationBody');

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResult = document.getElementById('searchResult');
    const internetWindow = document.getElementById('window-internet');
    const internetWindowBody = internetWindow ? internetWindow.querySelector('.window-body') : null;

    const galleryImage = document.getElementById('galleryImage');
    const galleryFallback = document.getElementById('galleryFallback');
    const galleryIndex = document.getElementById('galleryIndex');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');

    const cardGreeting = document.getElementById('cardGreeting');
    const cardName = document.getElementById('cardName');
    const cardJoinDate = document.getElementById('cardJoinDate');
    const cardDayCount = document.getElementById('cardDayCount');
    const cardEmployment = document.getElementById('cardEmployment');
    const cardPosition = document.getElementById('cardPosition');
    const cardBadgeImage = document.getElementById('cardBadgeImage');
    const cardBadgeFallback = document.getElementById('cardBadgeFallback');
    const editNameBtn = document.getElementById('editNameBtn');
    const nameHistoryBtn = document.getElementById('nameHistoryBtn');

    const desktopIcons = Array.from(document.querySelectorAll('.desktop-icon'));
    const windows = Array.from(document.querySelectorAll('.window'));
    let zCounter = 20;
    let isBooting = false;
    let pendingEmployee = null;
    let activeEmployee = null;
    let missionState = null;

    const missionGateView = document.getElementById('missionGateView');
    const missionChatView = document.getElementById('missionChatView');
    const missionSetupView = document.getElementById('missionSetupView');
    const missionGameView = document.getElementById('missionGameView');
    const missionFinalView = document.getElementById('missionFinalView');
    const missionDeadView = document.getElementById('missionDeadView');
    const missionChatRoom = document.getElementById('missionChatRoom');
    const missionReplyInput = document.getElementById('missionReplyInput');
    const missionSendBtn = document.getElementById('missionSendBtn');
    const missionAcceptBtn = document.getElementById('missionAcceptBtn');
    const missionPasswordInput = document.getElementById('missionPasswordInput');
    const missionPasswordBtn = document.getElementById('missionPasswordBtn');
    const missionPasswordStatus = document.getElementById('missionPasswordStatus');
    const missionGateDayInfo = document.getElementById('missionGateDayInfo');
    const missionPointDisplay = document.getElementById('missionPointDisplay');
    const missionCreatureName = document.getElementById('missionCreatureName');
    const missionManualBtn = document.getElementById('missionManualBtn');
    const missionManualModal = document.getElementById('missionManualModal');
    const missionManualClose = document.getElementById('missionManualClose');
    const missionArchiveBtn = document.getElementById('missionArchiveBtn');
    const missionArchiveModal = document.getElementById('missionArchiveModal');
    const missionArchiveClose = document.getElementById('missionArchiveClose');
    const missionArchiveList = document.getElementById('missionArchiveList');
    const missionArchiveImage = document.getElementById('missionArchiveImage');
    const missionArchiveInfo = document.getElementById('missionArchiveInfo');
    const normalMissionShell = document.querySelector('#window-helltalk .mission-shell');
    const adminMissionShell = document.getElementById('adminMissionShell');
    const vocRoom = document.getElementById('vocRoom');
    const vocActions = document.getElementById('vocActions');
    const vocStatus = document.getElementById('vocStatus');
    const vocPublicBoard = document.getElementById('vocPublicBoard');
    const vocPublicAnswers = document.getElementById('vocPublicAnswers');
    const vocPublicButtons = Array.from(document.querySelectorAll('[data-voc-lane]'));
    const vocAdminInboxToggle = document.getElementById('vocAdminInboxToggle');
    const vocAdminAffiliationToggle = document.getElementById('vocAdminAffiliationToggle');
    const vocPublicClose = document.getElementById('vocPublicClose');
    const vocPublicTitle = document.getElementById('vocPublicTitle');
    const vocPublicDesc = document.getElementById('vocPublicDesc');
    let vocFlowState = 'idle';
    let vocPublicActiveLane = '';

    const VOC_ANSWER_LANES = [
      { key:'valentino', title:'발렌티노', label:'VALENTINO LINE', empty:'발렌티노 님의 공개 답변이 없습니다.' },
      { key:'vox', title:'복스', label:'VOX LINE', empty:'복스 님의 공개 답변이 없습니다.' },
      { key:'velvette', title:'벨벳', label:'VELVETTE LINE', empty:'벨벳 님의 공개 답변이 없습니다.' }
    ];


    const VOC_PUBLIC_ANSWERS = {
      valentino: [
        {
          question:'발렌티노님 너무 귀여워요~~',
          answer:'나도 알아.',
          date:'PUBLIC LOG 001'
        },
        {
          question:'요즘 배가 너무 많이 고픕니다 밥 많이 주시면 좋겟스니다',
          answer:'모유를 왜 나한테서 찾아? 포옹은 해 줄 수 있어도.',
          date:'PUBLIC LOG 002'
        },
        {
          question:'사장님 두분 진짜 싸워요??',
          answer:'우린 매일 싸워. 놀랄 것도 없잖아.',
          date:'PUBLIC LOG 003'
        },
        {
          question:'복스님 파딱 뺏어주세요 더보기 나올 때마다 누르기가 두려워요',
          answer:'나도 뺏고 싶어.',
          date:'PUBLIC LOG 004'
        },   
        {
          question:'우우! 악덕기업 복스테크는 사과문과 보상을 줘라!!',
          answer:'뭘 사과하라는 건진 모르겠지만……. 후하게 대접받고 끝낼 생각은 없어? 복스, 쟤 내 방으로 불러.',
          date:'PUBLIC LOG 005'
        }              
      ],
      vox: [
        {
          question:'펩시 vs 코카콜라',
          answer:'코카콜라 미만 쓰레기. 펩시? 하. 탄산 빠진 패배자 브랜드지. 곧 북극곰 펀치 한 방에 캔째로 찌그러져서, 시장 점유율이랑 같이 바다 밑으로 가라앉을 거야.',
          date:'PUBLIC LOG 001'
        },
        {
          question:'저희는 연차 없나요? 과로사할 거 같아요....',
          answer:`연차는 있지. 네가 지금 쓸 수 있다는 뜻은 아니고. 복스테크가 이 꼴인데 휴가부터 찾는 배짱은 높이 사겠어. 참 훌륭해. 회사가 불타는 와중에도 자기 복지부터 챙기는 그 일관성 말이야. 하지만 반려야. 정 쉬고 싶으면 발의 전용 총알받이라도 해. 뒈지면 회복되는 동안은 쉬게 해주지. 단, 죽기 전에 업무 인수인계는 남겨. 네 일을 나한테 떠넘기는 순간, 그땐 네가 차라리 일하게 해달라고 빌게 만들어 줄 테니까.`,
          date:'PUBLIC LOG 002'
        },
        {
          question:'정규직 전환은 몇개월부터인가요?',
          answer:`인사평가 결과에 따라서 내달인 7월에 될 수도 있겠지.`,
          date:'PUBLIC LOG 003'
        },
        {
          question:'저희 연봉 협상은 따로 없나요?',
          answer:`연봉 협상? 좋은 질문이군. 네 성과가 협상 테이블에 올릴 만한 가치가 생기면 그때 검토하지. 복스테크는 감정 호소가 아니라 실적표로 말하는 곳이야. 그러니까 돈 얘기 전에, 네가 그 돈을 받을 만큼 쓸모 있다는 것부터 증명해.`,
          date:'PUBLIC LOG 004'
        }        
      ],
      velvette: [
        {
          question:'벨벳님 벨벳님 오늘의 추천 패션은 어떤 건가요?',
          answer:`오늘 날씨 보면 답 안 나와? 질문이 깜찍해서 봐준다. 코티지 코어로 체크해. 이 간단한 용어 모르겠으면, 요즘 모리걸 모르는 년들 없지? 마침 비도 오고, 날씨도 덥고 꿉꿉하고. 이럴 때가 제일 깨끗하고 귀엽게 보일 수 있는 타이밍이란 말이야. 집에 캐미솔 원피스랑 청바지 하나쯤은 구비해둘 때가 왔다고, 자기야. 딱 붙는 것 말고 벌룬핏이나 A 핏, 스트레이트로 떨어질수록 좋아. 이 패션의 핵심은 귀엽고 깨끗하고, 숲속의 느낌이 나야 하는 거니까. 무슨 색이든 하나도 상관없어, puppet. 청바지 위에 화이트 캐미솔 원피스 하나 입고, 빈티지스러운 니트형 볼레로 있으면 입어줘. 얇은 카디건도 좋고. 갈색이나 연두색 계열일수록 좋아. 허리선 강조하고 싶으면 얇은 허리 끈 같은 거 바스트 셔링처럼 밑쪽으로 넣으면 예쁘겠네. 어울리는 앤티크 네크리스도 있으면 매치해 주고. 귀걸이는 생략해. 얼굴에는 최대한 힘 빼야 예쁘다. 대신 헤어 정도는 히피펌 연출할 수 있으면 해 보고. 하나도 안 어려워. 알겠지? 이 정도도 못 하는 멍청한 년은 아니라고 믿을게, 예쁜아.`,
          date:'PUBLIC LOG 001'
        },
        {
          question:'다른 사장님들이 괴롭혀요 ㅠ',
          answer:`복스랑 발? 자기네 애들이나 괴롭히지 왜 그런다니? 뭐, 견뎌. 그 정도도 못 견딜 깡으로 우리 회사에 들어온 건 아닐 것 아냐. 정도가 더 심해지면 그때 말해. 내 말 한마디면 해결 안 되는 건 없어.`,
          date:'PUBLIC LOG 002'
        },
        {
          question:'벨벳님 진짜 존재하시는 벨벳님이에요(??) 발렌티노님이랑 복스님은 알겠는데 벨벳님은..?',
          answer:`이건 무슨 황당한 문의야? 그러면 내가 없겠어? Fuck, 어떻게 된 게 직원이 상사 계정도 모르니? 넌 나랑 따로 면담 좀 하자. @Vel_spotlight_`,
          date:'PUBLIC LOG 003'
        },
        {
          question:'벨벳님 너무 예쁘세요 ㅠㅠ',
          answer:`어머. 당연한 소리를 해. 예쁜이는 나랑 따로 볼까?`,
          date:'PUBLIC LOG 004'
        }        
      ]
    };



    const galleryItems = [
      { src: 'vees1.jpg', label: 'vees1.jpg' },
      { src: 'vees2.jpg', label: 'vees2.jpg' },
      { src: 'vees3.jpg', label: 'vees3.jpg' },
      { src: 'vees4.jpg', label: 'vees4.jpg' },
      { src: 'vees5.jpg', label: 'vees5.jpg' },
      { src: 'vees6.jpg', label: 'vees6.jpg' },
      { src: 'vees7.jpg', label: 'vees7.jpg' },
      { src: 'vees8.jpg', label: 'vees8.jpg' },
      { src: 'vees9.jpg', label: 'vees9.jpg' },
      { src: 'vees10.jpg', label: 'vees10.jpg' },
      { src: 'vees11.jpg', label: 'vees11.jpg' },
      { src: 'vees12.jpg', label: 'vees12.jpg' },
      { src: 'vees13.jpg', label: 'vees13.jpg' },
      { src: 'vees14.jpg', label: 'vees14.jpg' },
      { src: 'vees15.jpg', label: 'vees15.jpg' },
      { src: 'vees16.jpg', label: 'vees16.jpg' },
      { src: 'vees17.jpg', label: 'vees17.jpg' },
      { src: 'vees18.jpg', label: 'vees18.jpg' },
      { src: 'vees19.jpg', label: 'vees19.jpg' },
      { src: 'vees20.jpg', label: 'vees20.jpg' },
      { src: 'vees21.jpg', label: 'vees21.jpg' },
      { src: 'vees22.jpg', label: 'vees22.jpg' }
    ];
    let currentGallery = 0;

    const HR_ROLE_VERSION = '2026-june-hr-v1';
    const DEFAULT_GRADE = '계약직';
    const SPECIAL_TEAM = 'V-PRIME 전략특임팀';
    const DIRECT_SECRETARY_TEAM = '직속비서팀';
    const DIRECT_SECRETARY_TEAM_BACKUP_KEY = 'voxtek_direct_secretary_team_backup_v1';
    const DIRECT_SECRETARY_STAFF_STORAGE_KEY = 'voxtek_direct_secretary_staff_v1';
    const DIRECT_SECRETARY_DEFAULT_STAFF = [];
    const HR_AWARD_SEASON = '2026-JUNE';
    const HR_AWARD_EFFECTIVE_DATE = '2026-07-01';
    const GRADE_ORDER = ['인턴', '계약직', '정규직', '선임직', '임원급'];
    const TEAM_POOL = {
      vox: ['인사평가팀', '프로그램 제작팀', '송출관리팀'],
      velvette: ['디자인팀', '트렌드기획팀', '소셜미디어팀'],
      valentino: ['촬영팀', '캐스팅관리팀', '스튜디오운영팀'],
      unknown: ['미배정팀']
    };
    const TEAM_NAME_SET = new Set([...Object.values(TEAM_POOL).flat(), SPECIAL_TEAM, DIRECT_SECRETARY_TEAM]);

// 기존 코드에서 pickRandomRole/normalizeRole을 계속 호출하고 있어서 이름은 유지
// 단, 화면에 표시되는 인사 항목은 이제 팀 + 직급 기준으로 처리
    const rolePool = [
      { employment: TEAM_POOL.vox[0], position: DEFAULT_GRADE }
    ];

    const badgePool = [
      { src: 'v1.png', label: 'v1.png' },
      { src: 'v2.png', label: 'v2.png' },
      { src: 'v3.png', label: 'v3.png' }
    ];


    const MAIL_ITEMS = [
      {
        id:'direct_secretary_assignment_notice',
        date:'2026.06.02',
        visibleFrom:'2026-06-02',
        sender:'VoxTek HR System',
        subject:'직속비서팀 배정 안내',
        badge:'HR NOTICE',
        body:`<article class="memo-shell">
  <div class="memo-meta">
    <div class="memo-row">
      <div class="memo-key">제목</div>
      <div class="memo-value">직속비서팀 배정 안내</div>
    </div>
    <div class="memo-row">
      <div class="memo-key">수신</div>
      <div class="memo-value">VoxTek 전 사원</div>
    </div>
    <div class="memo-row">
      <div class="memo-key">발신</div>
      <div class="memo-value">VoxTek HR System</div>
    </div>
    <div class="memo-row">
      <div class="memo-key">등급</div>
      <div class="memo-value">사내 인사 공지 (HR NOTICE)</div>
    </div>
  </div>

  <h2 class="memo-title-main">직속비서팀 배정 안내</h2>
  <div class="memo-class">CLASSIFICATION: INTERNAL HR NOTICE · DIRECT SECRETARY TEAM</div>

  <div class="memo-content">
    <p>전 사원에게 알립니다.</p>
    <p>금일부로 <strong>직속비서팀</strong> 구성이 확정되었습니다.</p>

    <p class="memo-section-title"><strong>직속비서팀원:</strong></p>

<p>
  Eᴛʜᴀɴ @EthanAssistVox<br>
  Ethan @Ethan_Voxtek<br>
  아구찜 @kranjjang0315&nbsp;(임시)
</p>

    <p>해당 인원은 직속비서팀 소속으로 분류되며, 관련 업무 및 내부 지시는 해당 팀 기준으로 처리됩니다.</p>

    <div class="memo-sign">
      <strong>— VoxTek HR System</strong><br>
      STATUS: DIRECT SECRETARY TEAM ASSIGNED
    </div>
  </div>
</article>`
      },
      {
        id:'management_statement',
        date:'2026.05.15',
        sender:'Vox · Founder / CEO',
        subject:'경영 체계 관련 안내 및 향후 운영 방향',
        badge:'V-CLEARANCE',
        body:`<article class="memo-shell">
                <div class="memo-meta">
                  <div class="memo-row">
                    <div class="memo-key">제목</div>
                    <div class="memo-value">경영 체계 관련 공지 및 향후 운영 방향</div>
                  </div>
                  <div class="memo-row">
                    <div class="memo-key">수신</div>
                    <div class="memo-value">VoxTek 전 부서 · 전 직원</div>
                  </div>
                  <div class="memo-row">
                    <div class="memo-key">발신</div>
                    <div class="memo-value">Vox · Founder / CEO</div>
                  </div>
                  <div class="memo-row">
                    <div class="memo-key">등급</div>
                    <div class="memo-value">내부 기밀 문서 (V-CLEARANCE)</div>
                  </div>
                </div>

                <h2 class="memo-title-main">VoxTek 경영 체계 관련 안내 및 향후 운영 방향</h2>
                <div class="memo-class">CLASSIFICATION: V-CLEARANCE · DO NOT DISTRIBUTE EXTERNALLY</div>

                <div class="memo-content">
                  <p>팀 여러분께.</p>

                  <p>최근 경영권 변동과 그에 따른 혼란 속에서 여러분이 느끼셨을 걱정과 우려를 잘 알고 있습니다.</p>

                  <p>우선, 제 판단 미스로 인해 회사 내부와 대외적으로 불필요한 리스크가 발생한 점에 대해 <strong>공식적으로 사과드립니다.</strong></p>

                  <p>다만 분명히 말씀드리겠습니다. 저는 VoxTek를 단순한 지옥의 기업이 아닌, <strong>기술·방송·권력의 중심축</strong>으로 끌어올리기 위해 그 누구보다 치열하게 경쟁하고 분투해왔습니다. 여러분 또한 그 과정과 성과를 누구보다 잘 알고 계시리라 믿습니다. 현 경영진 역시 영향력과 능력을 갖춘 인물임을 부정할 생각은 없습니다. 그러나 기업이 장기적으로 성장하기 위해 필요한 것은 단순한 지배력이나 화려함이 아니라, <strong>명확한 비전·혁신 전략·지옥 전체를 견인할 수 있는 체계적 구상</strong>입니다. 저는 그 비전을 가지고 있습니다. 그리고 VoxTek를 다시금 도약하게 만들 준비 역시 끝마친 상태입니다. 현재 저는 내부적으로 제 시스템과 전략을 재정비하고 있으며, <strong>경영 복귀를 위한 절차</strong> 또한 진행 중입니다. 저는 책임을 회피하지도, 성장을 포기하지도 않을 것입니다.</p>

                  <p>VoxTek는 태생적으로 ‘확장’과 ‘진화’를 기반으로 하는 기업입니다. 그 중심에는 언제나 <strong>VoxTek의 정체성을 만든 사람</strong>, 즉 <strong>저, Vox</strong>가 있었습니다. 향후 회사의 정상화를 포함한 운영 방향은 추가적인 내부 검토 후 다시 공지하겠습니다. 여러분께서는 현재 체제 아래에서 업무를 지속하되, <strong>회사의 본래 비전과 방향이 무엇이었는지</strong> 잊지 않으시길 바랍니다.</p>

                  <div class="memo-sign">
                    <strong>— Vox</strong>
                    Founder / CEO · VoxTek<br>
                    STATUS: STRATEGIC REORGANIZATION IN PROGRESS
                  </div>
                </div>
              </article>`
      },
      {
        id:'june_evaluation_notice',
        date:'2026.05.20',
        sender:'VoxTek HR Evaluation System',
        subject:'6월 인사 평가 시즌 안내',
        badge:'JUNE REVIEW',
        body:`<article class="memo-shell">
  <div class="memo-meta">
    <div class="memo-row">
      <div class="memo-key">제목</div>
      <div class="memo-value">6월 인사 평가 시즌 안내</div>
    </div>
    <div class="memo-row">
      <div class="memo-key">수신</div>
      <div class="memo-value">VoxTek 전 사원</div>
    </div>
    <div class="memo-row">
      <div class="memo-key">발신</div>
      <div class="memo-value">VoxTek HR Evaluation System</div>
    </div>
    <div class="memo-row">
      <div class="memo-key">등급</div>
      <div class="memo-value">사내 평가 공지 (JUNE REVIEW)</div>
    </div>
  </div>

  <h2 class="memo-title-main">6월 인사 평가 시즌 안내</h2>
  <div class="memo-class">CLASSIFICATION: INTERNAL REVIEW · JUNE PERFORMANCE SEASON</div>

  <div class="memo-content">
    <p>오는 <strong>6월 1일</strong>부터 <strong>VoxTek 6월 인사 평가</strong> 시즌이 시작됩니다.</p>
<p class="memo-section-title">
  <strong>평가 기간: 6월 1일 ~ 6월 30일</strong>
</p>

<p class="memo-muted">
  해당 기간 동안의 출석 기록과 일일 지시 수행 기록이 평가 점수에 반영됩니다.
</p>

<hr class="memo-divider">

<p class="memo-section-title">
  <strong>평가 항목:</strong>
</p>

<p class="memo-eval-item">
  <strong>1. 출석 체크</strong><br>
  평가 창에 접속하여 당일 출석 기록을 남긴 경우 1점 반영
</p>

<p class="memo-eval-item">
  <strong>2. 오늘의 지시</strong><br>
  매일 갱신되는 지시를 확인하고 신호 보정 임무를 완료하면 2점 반영
</p>

<p class="memo-eval-item">
  <strong>3. 퍼펙트 보정</strong><br>
  실패 없이 한 번에 신호 보정을 완료한 사원에게는 추가 1점 지급
</p>

<p class="memo-score">
  하루 최대 점수: 4점 / 30일 기준 최고 점수: 120점
</p>

<hr class="memo-divider">

    <p>평가 점수는 추후 랭킹 집계에 사용되며, 동일 점수일 경우, <strong>입사일자가 빠른 사원</strong>이 우선 순위를 가집니다.</p>
    <p>평가 시스템은 6월 1일 00시부터 활성화됩니다. 그 전에는 접근하더라도 평가 기록이 생성되지 않습니다.</p>
    <p>성실하게 임하도록 하십시오.</p>

    <div class="memo-sign">
      <strong>— VoxTek HR Evaluation System</strong>
      June Performance Review Division<br>
      STATUS: ACTIVATION SCHEDULED FOR 2026.06.01
    </div>
  </div>
</article>`
      },
      {
        id:'hr_structure_update_notice',
        date:'2026.05.20',
        sender:'VoxTek HR Evaluation System',
        subject:'인사 체계 개편 및 승진 평가 기준 안내',
        badge:'HR UPDATE',
        body:`<article class="memo-shell">
  <div class="memo-meta">
    <div class="memo-row">
      <div class="memo-key">제목</div>
      <div class="memo-value">인사 체계 개편 및 승진 평가 기준 안내</div>
    </div>
    <div class="memo-row">
      <div class="memo-key">수신</div>
      <div class="memo-value">VoxTek 전 사원</div>
    </div>
    <div class="memo-row">
      <div class="memo-key">발신</div>
      <div class="memo-value">VoxTek HR Evaluation System</div>
    </div>
    <div class="memo-row">
      <div class="memo-key">등급</div>
      <div class="memo-value">사내 인사 공지 (HR UPDATE)</div>
    </div>
  </div>

  <h2 class="memo-title-main">인사 체계 개편 및 승진 평가 기준 안내</h2>
  <div class="memo-class">CLASSIFICATION: INTERNAL HR NOTICE · STRUCTURE UPDATE</div>

  <div class="memo-content">
    <p>전 사원에게 알립니다.</p>
    <p>사원 기록 체계 정비를 위한 <strong>인사 시스템 개편</strong>이 진행됩니다.</p>
    <p>아래 내용을 반드시 확인해주시기 바랍니다.</p>

    <p class="memo-section-title"><hr class="memo-divider">    
      <strong>[소속별 배정 가능 팀 목록]</strong>
    </p>
    <p><strong>복스</strong><br>인사평가팀 / 프로그램제작팀 / 송출관리팀</p>
    <p><strong>벨벳</strong><br>디자인팀 / 트렌드기획팀 / 소셜미디어팀</p>
    <p><strong>발렌티노</strong><br>촬영팀 / 캐스팅관리팀 / 스튜디오운영팀</p>
    <p class="memo-section-title"><hr class="memo-divider">    
      <strong>[직급 체계]</strong>
    </p>
    <p>인턴 → 계약직 → 정규직 → 선임직 → 임원급</p>
    <p>사원 기록은 대표 소속을 기준으로 재분류되며, 각 소속 내 지정 팀 중 하나가 배정됩니다.</p>
    <p>입사일 / 근속일 / 사원 ID / 누적 기록은 동일하게 유지되며, 개편 적용 시점부터 전 사원의 기본 직급은 <strong>계약직</strong>으로 재분류됩니다.</p>
    <p>이후 직급 변동 및 특수 배정 여부는 <strong>6월 인사평가 결과</strong>를 기준으로 결정됩니다.</p>

    <p class="memo-section-title"><hr class="memo-divider">    
      <strong>[승진 평가 기준]</strong>
    </p>
    <p>우수한 평가 기록을 남긴 사원에게는 직급 승진 검토 기회가 부여될 수 있습니다.</p>
    <p>승진 여부는 단순 점수뿐 아니라 <strong>출석 기록, 일일 지시 수행 기록, 보정 정확도 및 내부 검수 결과</strong>를 종합하여 반영됩니다.</p>

    <p class="memo-section-title"><hr class="memo-divider">    
      <strong>[V-PRIME 전략특임팀 배정 안내]</strong>
    </p>
    <p>평가 기간 내 최상위 성과자로 분류된 사원에게는</p>
    <p><strong>V-PRIME 전략특임팀 배정 검토 기회</strong>가 부여될 수 있습니다.</p>        
    <p>해당 부서에 대한 상세 내용은 추후 공지하도록 하겠습니다.</p>

<hr class="memo-divider">

    <p>평가 결과 및 인사 변동 사항은</p>
    <p>6월 인사평가 종료 후 내부 검수 절차를 거쳐 순차적으로 반영됩니다.</p>

<hr class="memo-divider">

    <p>전 사원은 6월 인사평가 기간 동안 <strong>출석 기록</strong> 및 <strong>일일 지시 수행 기록</strong>이 정상적으로 누적되고 있는지 반드시 확인하시기 바랍니다.</p>
    <p>성실한 기록은 향후 보상 및 승진 검토에 반영될 수 있으나,</p>
    <p>반대로 기록 누락 및 활동 부재는 평가 과정에서 불이익 요소로 반영될 수 있습니다.</p>
    <p>모쪼록 좋은 결과를 얻으시길 바랍니다.</p>

    <div class="memo-sign">
      <strong>— VoxTek HR Evaluation System</strong>
      June Performance Review Division<br>
      STATUS: HR STRUCTURE UPDATE SCHEDULED
    </div>
  </div>
</article>`
      }
    ];

    let activeMailId = '';

    function mailDateKeyFromDotted(value){
      return String(value || '').replaceAll('.', '-');
    }

    function buildBirthdayMailItem(){
      const employee = getActiveEmployee();
      if (!employee || isAdminEmployee(employee)) return null;
      const monthDay = employee.birthdayMonthDay || birthdayMonthDayFromValue(employee.birthday);
      if (!monthDay || monthDay !== currentMonthDay()) return null;
      const year = currentYear();
      return {
        id:`birthday_${year}_${employee.employeeId || employee.name}`,
        date:`${year}.${currentMonthDay().replace('-', '.')}`,
        sender:'VoxTek HR Celebration System',
        subject:`${employee.name} 사원 생일 축하 메일`,
        badge:'BIRTHDAY',
        body:`<article class="memo-shell">
          <div class="memo-meta">
            <div class="memo-row"><div class="memo-key">제목</div><div class="memo-value">생일 축하 및 특별 안내</div></div>
            <div class="memo-row"><div class="memo-key">수신</div><div class="memo-value">${escapeHtml(employee.name)} 사원</div></div>
            <div class="memo-row"><div class="memo-key">발신</div><div class="memo-value">VoxTek HR Celebration System</div></div>
            <div class="memo-row"><div class="memo-key">등급</div><div class="memo-value">사내 축하 메일 (BIRTHDAY)</div></div>
          </div>
          <h2 class="memo-title-main">HAPPY BIRTHDAY, ${escapeHtml(employee.name)}</h2>
          <div class="memo-class">CLASSIFICATION: CELEBRATION NOTICE · PERSONAL MAIL</div>
          <div class="memo-content">
            <p>${escapeHtml(employee.name)} 사원.</p>
            <p>오늘은 사원 기록상 생일로 등록된 날입니다. 복스테크는 귀하의 생존과 근속을 확인했으며, 그 사실을 최소한의 축하 문서로 남깁니다.</p>
            <p><strong>축하합니다.</strong> 오늘 하루 정도는 자신이 조금 더 특별하다는 착각을 허용하겠습니다.</p>
            <p class="memo-muted">※ 금일 특별 휴가를 지급하오니 만끽하시길 바랍니다.</p>
            <div class="memo-sign">
              <strong>— VoxTek HR Celebration System</strong>
              Employee Life Event Division<br>
              STATUS: BIRTHDAY SIGNAL DETECTED
            </div>
          </div>
        </article>`
      };
    }

    function mailDateSortValue(item){
      const value = String((item && (item.sortDate || item.date || item.visibleFrom)) || '').trim();
      const match = value.match(/^(\d{4})[.\-/](\d{1,2})[.\-/](\d{1,2})/);
      if (!match) return 0;
      return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])).getTime();
    }

    function sortMailItemsByDate(items){
      return (items || [])
        .map((item, index) => ({ item, index }))
        .sort((a, b) => {
          const diff = mailDateSortValue(b.item) - mailDateSortValue(a.item);
          if (diff) return diff;
          return a.index - b.index;
        })
        .map((entry) => entry.item);
    }

    function mailVisibleItems(){
      const today = missionToday ? missionToday() : new Date().toISOString().slice(0, 10);
      const items = MAIL_ITEMS.filter((item) => !item.visibleFrom || item.visibleFrom <= today);
      const birthdayMail = buildBirthdayMailItem();
      return sortMailItemsByDate(birthdayMail ? [birthdayMail, ...items] : items);
    }

    function getReadMailIds(){
      try{
        const raw = localStorage.getItem(MAIL_READ_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
      }catch(error){
        return [];
      }
    }

    function setReadMailIds(ids){
      try{
        localStorage.setItem(MAIL_READ_KEY, JSON.stringify([...new Set(ids.filter(Boolean))]));
      }catch(error){
        console.warn('Mail read state save failed:', error);
      }
    }

    function isMailRead(id){
      return getReadMailIds().includes(id);
    }

    function markMailRead(id){
      if (!id) return;
      const ids = getReadMailIds();
      if (!ids.includes(id)){
        ids.push(id);
        setReadMailIds(ids);
      }
      updateMailUnreadIndicator();
    }

    function unreadMailCount(){
      const readIds = new Set(getReadMailIds());
      return mailVisibleItems().filter((item) => !readIds.has(item.id)).length;
    }

    function updateMailUnreadIndicator(){
      const count = unreadMailCount();
      if (mailUnreadBadge){
        mailUnreadBadge.textContent = String(count);
        mailUnreadBadge.classList.toggle('hidden', count <= 0);
      }
      if (mailDesktopIcon){
        mailDesktopIcon.classList.toggle('has-unread', count > 0);
        mailDesktopIcon.setAttribute('title', count > 0 ? `읽지 않은 메일 ${count}건` : '읽지 않은 메일 없음');
        mailDesktopIcon.setAttribute('aria-label', count > 0 ? `메일, 읽지 않은 메일 ${count}건` : '메일');
      }
    }

    function renderMailInbox(selectedId = activeMailId){
      if (!mailList || !mailDetail) return;
      const items = mailVisibleItems();
      if (!items.length){
        mailList.innerHTML = '<div class="mail-empty"><div><strong>수신 메일 없음</strong>표시할 내부 메일이 없습니다.</div></div>';
        mailDetail.innerHTML = '<div class="mail-empty"><div><strong>메일을 선택하세요.</strong>수신 메일이 없습니다.</div></div>';
        if (mailShell) mailShell.classList.remove('mail-selected');
        updateMailUnreadIndicator();
        return;
      }

      const selected = selectedId ? items.find((item) => item.id === selectedId) : null;
      activeMailId = selected ? selected.id : '';
      if (mailShell) mailShell.classList.toggle('mail-selected', !!selected);

      if (selected){
        markMailRead(selected.id);
      } else {
        updateMailUnreadIndicator();
      }

      const readIds = new Set(getReadMailIds());
      mailList.innerHTML = items.map((item) => {
        const unread = !readIds.has(item.id);
        return `
          <button class="mail-item ${item.id === activeMailId ? 'is-active' : ''} ${unread ? 'is-unread' : ''}" type="button" data-mail-id="${escapeHtml(item.id)}">
            <span class="mail-item-subject-row">
              <span class="mail-item-subject">${escapeHtml(item.subject)}</span>
              ${unread ? '<span class="mail-item-unread-chip">NEW</span>' : ''}
            </span>
            <span class="mail-item-meta">${escapeHtml(item.sender)} · ${escapeHtml(item.date)}</span>
            <span class="mail-item-badge">${escapeHtml(item.badge || 'MAIL')}</span>
          </button>
        `;
      }).join('');
      mailList.querySelectorAll('[data-mail-id]').forEach((button) => {
        button.addEventListener('click', () => renderMailInbox(button.dataset.mailId));
      });

      if (selected){
        mailDetail.innerHTML = `
          <div class="mail-mobile-detailbar">
            <button class="mail-mobile-back" type="button" data-mail-back>← 받은 메일함</button>
          </div>
          ${selected.body}
        `;
      } else {
        mailDetail.innerHTML = `
          <div class="mail-empty">
            <div>
              <strong>메일을 선택하세요.</strong>
              받은 메일 제목을 클릭하면 상세 내용이 표시됩니다.<br>
              읽지 않은 메일은 파란 표시로 강조됩니다.
            </div>
          </div>
        `;
      }
      const mailBackButton = mailDetail.querySelector('[data-mail-back]');
      if (mailBackButton){
        mailBackButton.addEventListener('click', () => renderMailInbox(''));
      }
      mailDetail.scrollTop = 0;
    }

    const wikiData = {
      vox: {
        aliases: ['복스', 'vox', '빈센트', 'vincent', '빈센트휘트먼', 'vincentwhittman'],
        theme: 'default',
        ko: '복스',
        en: 'Vox',
        image: 'Vox.png',
        profile: {
          '이름': '복스 Vox',
          '본명': '빈센트 휘트먼 Vincent Whittman',
          '별명': '미디어 군주(Media Overlord)',
          '출생': '1891년 ~ 1909년 (미국)'
        },
        description: `
          <p>복스테크의 CEO이자 창립자로, 펜타그램 시티 최고의 미디어/엔터테인먼트 제공자입니다.</p>
          <p>지옥에서 가장 강력한 오버로드이자 감독, 겸손한 기업가. 뿐만 아니라 화려한 경력의 프로듀서, 배우, 그리고 토크쇼 호스트이기도 합니다.</p>
          <p>‘그래 네 여동생과 잤다 어쩔래?’와 ‘복스와의 야심한 밤’ 등 50편 이상의 클래식 히트 쇼를 제작한 바 있죠.</p>
          <p>그러니 펜타그램 시티에선 당신의 돈과 신뢰를 반드시 복스테크 브랜드에 맡기도록 합시다. “여러분의 즐거움을 책임지겠습니다!”</p>
        `
      },
      valentino: {
        aliases: ['발렌티노', 'valentino'],
        theme: 'default',
        ko: '발렌티노',
        en: 'Valentino',
        image: 'Valentino.png',
        profile: {
          '이름': '발렌티노 Valentino',
          '본명': '불명',
          '출생': '1921년 ~ 1949년 (미국 플로리다주)'
        },
        description: `
          <p>지옥에서 가장 섹시한 오버로드이자, 다수의 수상 경력을 가진 포르노 영화 감독입니다.</p>
          <p>매우 수려한 외모와 단연코 최고의 패션 감각으로 유명하죠.</p>
          <p>밤이 되면 그와 벨벳, 그리고 아마도 복스가 함께 소유한 유흥가에서 직접 쇼를 진행하는 모습을 볼 수 있습니다.</p>
          <p>최근 흥행 차트를 점령한 최신작 ‘내게 가버려’는 지옥 최고의 남창 엔젤 더스트가 주연을 맡고 있답니다. 아주 좋은 시간을 보내고 싶나요? 발렌티노가 기다립니다. ;)</p>
        `
      },
      velvette: {
        aliases: ['벨벳', 'velvette'],
        theme: 'default',
        ko: '벨벳',
        en: 'Velvette',
        image: 'Velvette.png',
        profile: {
          '이름': '벨벳 Velvette',
          '본명': '불명',
          '출생': '1971년 ~ 1989년 (영국)'
        },
        description: `
          <p>그녀/여성 | 복스테크 인플루언서 | 골칫덩이 | 1억+ 구독자 | # 여장부</p>
          <p>펜타그램 시티에서 가장 젊고 반항기 넘치는 오버로드입니다.</p>
          <p>지옥을 선도하는 패션 대기업을 V-타워에서 운영하고 있으며, 그녀의 영향력은 나날이 불어나는 중이죠.</p>
          <p>유행을 손쉽게 따라가는 것처럼 보이지만, 어떻게 그렇게 하는 걸까요? 솔직히 무서울 정도입니다.</p>
          <p>발렌티노와 콜라보한 ‘러브 포션 #9’의 책임 개발자로도 알려졌는데, 이 포션은 달콤한 맛과 고객 만족도 100%를 자랑합니다. 최고의 매출을 기록하는 브랜드들과 상까지 받은 주술을 보유한 그녀는 귀여운 악동이랍니다.</p>
        `
      },
      alastor: {
        aliases: ['알래스터', 'alastor', '라디오악마'],
        theme: 'alastor',
        ko: '알래스터',
        en: 'Alastor',
        image: 'Alastor.png',
        profile: {
          '이름': '알래스터 Alastor',
          '본명': '알래스터 Alastor',
          '출생': '1884년 ~ 1903년 (미국 루이지애나주 뉴올리언스)'
        },
        description: `
          <p>알래스터에 대해서? 하. 저 구식 라디오 흉물을 알고 싶다고?</p>
          <p>지옥에서 제일 인기 있다느니 떠들어대는, 잡음이랑 웃음소리만 요란한 자칭 전설이지.</p>
          <p>펜타그램 시티에서 제일 믿음 가는 언론 매체라고? 글쎄, 적어도 1920년대에 아직 처박혀 사는 놈들한텐 그렇게 보일 수도 있겠네.</p>
          <p>잠깐의 공백이 있었다고는 하는데, 그냥 시대에 뒤처져서 처박혀 있던 걸 잘도 포장하고 앉았어.</p>
          <p>그런데도 이제 라디오가 돌아왔다느니, 전보다 훨씬 좋아졌다느니 하면서 또 기어나왔더군.</p>
          <p>최근엔 찰리의 귀여운 호텔 놀이를 도와주는 척하느라 게스트를 부를 시간도 없었나 본데. 뭐, 두고 볼 일이지.</p>
          <p>다음엔 당신이 웃음거리로 쓰일 수도 있으니까. 연락만 주시라고? 아하. 그러지 마. 그러면 저쪽이 아주 신나서 달려들 테니까.</p>
        `
      },
      angeldust: {
        aliases: ['엔젤더스트', '엔젤 더스트', '엔젤', 'angeldust', 'angel dust', 'angel'],
        theme: 'default',
        ko: '엔젤 더스트',
        en: 'Angel Dust',
        image: 'Angel.png',
        profile: {
          '이름': '엔젤 더스트 Angel Dust',
          '본명': '앤서니 Anthony',
          '출생': '1914년 ~ 1916년, 4월 1일 (미국 뉴욕)'
        },
        description: `
          <p>펜타그램 시의 유명한 성인 영화 배우이자 댄서, 가수입니다.</p>
          <p>엔젤은 발렌티노가 제작한 영화 ‘내 사촌과 나’로 스크린에 데뷔했죠.</p>
          <p>이후 ‘모닝 커피를 마시다 섹텐이’ ‘새아빠들 4’ ‘낯선 남자가 들어와... 너에게’ ‘보이스토리’ 등 수많은 작품에 출연했으며, 다가오는 작품 ‘순결한 소년’에도 등장할 예정입니다.</p>
          <p>엔젤은 여러 SE-XXX-Y 상을 수상했고, 그중에는 영화 ‘심문’으로 받은 상도 포함됩니다.</p>
          <p>자애로운 보스, 발렌티노가 선물해준 팻너겟이라는 돼지를 키우고 있습니다.</p>
        `
      },
      charlotte: {
        aliases: ['찰리', '찰리 모닝스타', '찰리모닝스타', 'charlie', 'charliemorningstar', 'charlie morningstar', '샬럿', '샬럿 모닝스타', '샬럿모닝스타', 'charlotte', 'charlottemorningstar', 'charlotte morningstar'],
        theme: 'default',
        ko: '찰리 모닝스타',
        en: 'Charlie Morningstar',
        image: 'Charlie.png',
        profile: {
          '이름': '찰리 모닝스타 Charlie Morningstar',
          '본명': '샬럿 모닝스타 Charlotte Morningstar',
          '별명': '지옥의 공주 (The Princess of Hell)',
          '출생': '지옥 출생 (연도 불명)'
        },
        description: `
          <p>지옥의 공주이자 해즈빈 호텔의 설립자. 포옹과 노래, 눈물 몇 방울이면 살인마든 사기꾼이든 다 새사람이 될 수 있다고 굳게 믿는 낙관주의 과다 복용자입니다.</p>
          <p>살인? 사기? 배신? 괜찮아요, 여러분! 다 같이 손잡고 노래 한 곡 부르면 죄도 상처도 싹 해결된다지요. 아주 감동적이라 눈물겨울 정도입니다. 토가 나올 만큼.</p>
          <p>현재는 각종 문제아들을 한데 끌어모아 해즈빈 호텔이라는 구원 실험장을 운영 중이며, 지옥에서도 사랑과 용서가 통할 거라는 망상 같은 이상론을 아직도 진심으로 밀고 있습니다.</p>
          <p>가장 성가신 점은 그 말도 안 되는 낙관주의를 단순한 쇼가 아니라 진심으로 믿고 있다는 것. 펜타그램 시 한복판에서 현실감각 없이 희망을 외치는 가장 집요하고 시끄러운 왕족쯤으로 이해하면 됩니다.</p>
        `
      },
      lucifer: {
  aliases: ['루시퍼', '루시퍼모닝스타', '루시퍼 모닝스타', 'lucifer', 'lucifermorningstar', 'lucifer morningstar', '루', 'lu'],
  theme: 'default',
  ko: '루시퍼 모닝스타',
  en: 'Lucifer Morningstar',
  image: 'Lucifer.png',
  profile: {
    '이름': '루시퍼 모닝스타 Lucifer Morningstar',
    '별명': '지옥의 왕 (King of Hell)',
    '출생': '지옥 출생 (연도 불명)'
  },
  description: `
    <p>지옥의 왕. 네, 일단 직함은 그렇습니다.</p>
    <p>압도적인 힘과 상징성을 지닌 존재인 건 부정할 수 없지만, 실제 통치 능력에 대해서는 별도의 검토가 필요합니다. 아주 길고 피곤한 검토가요.</p>
    <p>겉으로는 화려하고 유쾌하고, 본인만의 기묘한 취향으로 가득 차 있습니다. 오리, 사과, 과장된 제스처, 불필요하게 극적인 등장. 왕권의 위엄이라기보단 고장 난 장난감 공장의 최고 책임자에 가까운 인상입니다.</p>
    <p>찰리 모닝스타의 아버지이며, 딸을 향한 애정만큼은 진심으로 보입니다. 문제는 그 진심이 늘 제대로 작동하느냐는 별개의 이야기라는 점이죠.</p>
    <p>다만 착각하지 않는 편이 좋습니다. 아무리 우스꽝스럽게 굴어도 그는 여전히 지옥 최상위 존재 중 하나입니다. 웃기다고 해서 만만한 건 아닙니다. 그 부분만큼은, 안타깝게도 사실입니다.</p>
  `
},
husk: {
  aliases: ['허스크', '허스커', 'husk', 'husker'],
  theme: 'default',
  ko: '허스크',
  en: 'Husk',
  image: 'Husk.png',
  profile: {
    '이름': '허스크 Husk',
    '본명': '불명',
    '별명': '허스커 (Husker)',
    '출생': '연도 불명 (미국 네바다주 라스베이거스)'
  },
  description: `
    <p>해즈빈 호텔의 바텐더. 전직 오버로드. 현직 알래스터 소유의 불평 많은 인력.</p>
    <p>술, 도박, 카드, 냉소, 한숨. 허스크를 설명하는 데 필요한 키워드는 대체로 이 정도면 충분합니다. 본인은 아마 더 줄이라고 하겠지만, 안타깝게도 기록은 그렇게 친절하지 않습니다.</p>
    <p>한때는 권력을 쥐었던 인물이지만, 지금은 호텔 바 뒤에서 술을 따르고 있습니다. 몰락의 표본으로는 꽤 우수한 사례죠. 교육 자료로 쓰기에도 나쁘지 않습니다.</p>
    <p>다만 완전히 무가치하다고 보긴 어렵습니다. 허세를 싫어하고, 남의 자기기만을 빠르게 알아보며, 듣기 싫은 진실을 불필요할 정도로 정확하게 찌르는 재주가 있습니다.</p>
    <p>즉, 태도는 최악이고 생산성은 의심스럽지만 관찰 가치는 있습니다.</p>
  `
},
vaggi: {
  aliases: ['배기', 'vaggi', 'vaggie'],
  theme: 'default',
  ko: '배기',
  en: 'Vaggi',
  image: 'Vaggi.png',
  profile: {
    '이름': '배기 Vaggi',
    '출생': '천국 출생 (연도 불명)'
  },
  description: `
    <p>해즈빈 호텔의 실질적인 관리 담당. 다시 말해, 찰리 모닝스타의 이상론이 현장에서 즉시 붕괴하지 않도록 옆에서 겨우 붙들고 있는 안전장치입니다.</p>
    <p>호텔 운영, 경계, 잔소리, 호위, 위기 대응, 감정적 수습까지. 직함 하나로 정리하기엔 맡은 일이 지나치게 많습니다. 인력 배치가 이 정도로 비효율적이라니, 참으로 호텔다운 운영 방식입니다.</p>
    <p>찰리가 모두를 믿는 쪽이라면, 배기는 모두를 의심하는 쪽입니다. 그나마 그 의심이 없었다면 호텔은 진작 누군가의 감상적인 발표회장이나 폭발 현장으로 전락했을 가능성이 높습니다.</p>
    <p>태도는 날카롭고, 경계심은 과하며, 찰리 관련 사안에서는 판단이 다소 감정적으로 흐르는 경향이 있습니다. 하지만 전투 능력과 충성심, 상황 판단력은 일정 수준 이상으로 평가됩니다.</p>
    <p>요약하자면, 해즈빈 호텔에서 드물게 현실을 보는 인물입니다. 문제는 그 현실 감각이 찰리의 꿈을 지키는 데 쓰이고 있다는 점이죠. 낭비입니다.</p>
  `
},
      vees: {
        aliases: ['vees', '브이스', '브이즈'],
        theme: 'default',
        ko: 'Vees',
        en: 'Vees',
        image: 'vees1.jpg',
        profile: {
          '구성원': 'Vox / Valentino / Velvette',
          '소속': 'V-타워 / VoxTek 연합',
          '분야': '미디어 · 유흥 · 패션 · 지배력'
        },
        description: `
          <p>Vees는 펜타그램 시티에서 가장 현대적이고, 가장 영향력 있으며, 가장 눈부신 브랜드 연합입니다.</p>
          <p>방송, 패션, 유흥, 트렌드, 여론, 소비 심리까지. 이 셋이 손대는 순간 시장은 곧장 방향을 바꾸죠.</p>
          <p>그 중심엔 언제나 최신 기술과 가장 빠른 감각, 그리고 압도적인 존재감이 있습니다.</p>
          <p>한마디로 말해, 지옥에서 시대를 만든다는 게 무슨 뜻인지 궁금하다면 그냥 Vees를 보면 됩니다.</p>
        `
      }
    };

    function escapeHtml(str){
      return String(str).replace(/[&<>"']/g, function(m){
        return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;'})[m];
      });
    }

    function escapeCssIdentifier(value){
      const text = String(value || '');
      if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(text);
      return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    }

    function pad2(num){
      return String(num).padStart(2, '0');
    }

    function formatDate(dateString){
      const d = new Date(dateString);
      if (Number.isNaN(d.getTime())) return '-';
      return `${d.getFullYear()}.${pad2(d.getMonth() + 1)}.${pad2(d.getDate())}`;
    }

    function calculateDayCount(dateString){
      const joined = new Date(dateString);
      if (Number.isNaN(joined.getTime())) return 1;
      const now = new Date();
      const joinedMid = new Date(joined.getFullYear(), joined.getMonth(), joined.getDate());
      const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const diff = nowMid - joinedMid;
      return Math.max(1, Math.floor(diff / 86400000) + 1);
    }

    function getAdminProfile(key){
      return ADMIN_PROFILES[key] || null;
    }

    function isReservedAdminHandle(value){
      const normalized = String(value || '').trim().toLowerCase();
      return Object.values(ADMIN_PROFILES).some(profile => profile.handle.toLowerCase() === normalized);
    }

    function isAdminEmployee(employee){
      return !!(employee && employee.isAdmin && getAdminProfile(employee.adminKey));
    }

    function getActiveEmployee(){
      return activeEmployee || getStoredEmployee();
    }

    function setMissionShellMode(admin){
      const title = document.querySelector('#window-helltalk .window-title');
      const missionIconLabel = document.querySelector('[data-app="helltalk"] .icon-label');
      if (title){
        title.innerHTML = admin ? 'REPORTS <small>Mission Completion Archive</small>' : 'MISSION <small>Vox Direct Assignment</small>';
      }
      if (missionIconLabel) missionIconLabel.textContent = admin ? 'REPORTS' : 'MISSION';
      if (missionArchiveBtn) missionArchiveBtn.style.display = admin ? 'none' : '';
    }

    function saveAdminEmployee(profile){
      const payload = {
        name: profile.name,
        joinedAt: profile.joinedAt,
        role: {
          employment: profile.authority,
          position: profile.position
        },
        badge: { ...profile.badge },
        employeeId: `ADMIN-${profile.key.toUpperCase()}`,
        isAdmin: true,
        adminKey: profile.key,
        handle: profile.handle,
        adminAuthority: profile.authority,
        adminPosition: profile.position,
        lastLoginAt: new Date().toISOString()
      };
      try{
        sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ key: profile.key, at: payload.lastLoginAt }));
      }catch(error){}
      return payload;
    }

    function adminDisplayName(employee){
      const profile = isAdminEmployee(employee) ? getAdminProfile(employee.adminKey) : null;
      return profile ? `${profile.name} ${profile.handle}` : (employee ? employee.name : '-');
    }

    function pickRandomBadge(){
      const badge = badgePool[Math.floor(Math.random() * badgePool.length)];
      return { ...badge };
    }

    function getDepartmentKeyFromBadge(badge){
      const src = badge && badge.src ? String(badge.src) : String(badge || '');
      const normalized = src.split('/').pop();
      if (normalized === 'v1.png') return 'valentino';
      if (normalized === 'v2.png') return 'vox';
      if (normalized === 'v3.png') return 'velvette';
      return 'unknown';
    }

    function getDepartmentLabelByKey(key){
      const map = {
        vox:'복스',
        valentino:'발렌티노',
        velvette:'벨벳',
        unknown:'미확인 소속'
      };
      return map[key] || map.unknown;
    }

    function pickRandomTeam(departmentKey){
      const pool = TEAM_POOL[departmentKey] || TEAM_POOL.unknown;
      return pool[Math.floor(Math.random() * pool.length)] || TEAM_POOL.unknown[0];
    }

    function isKnownTeamName(value){
      return TEAM_NAME_SET.has(String(value || '').trim());
    }

    function isTeamForDepartment(value, departmentKey){
      const team = String(value || '').trim();
      if (!team) return false;
      const key = String(departmentKey || '').trim() || 'unknown';
      if (team === DIRECT_SECRETARY_TEAM) return key === 'vox';
      if (team === SPECIAL_TEAM) return true;
      const pool = TEAM_POOL[key] || TEAM_POOL.unknown;
      return pool.includes(team);
    }

    function resolveTeamForDepartment(value, departmentKey){
      const team = String(value || '').trim();
      if (isTeamForDepartment(team, departmentKey)) return team;
      return pickRandomTeam(departmentKey);
    }

    function isDirectSecretaryTeam(value){
      return String(value || '').trim() === DIRECT_SECRETARY_TEAM;
    }

    function normalizeDirectSecretaryEmployeeId(value){
      const match = String(value || '').trim().toUpperCase().match(/VT-?\d{6}/);
      if (!match) return '';
      const digits = match[0].replace(/[^0-9]/g, '');
      return `VT-${digits}`;
    }

    function normalizeDirectSecretaryStaffItem(item){
      if (!item || typeof item !== 'object') return null;
      const employeeId = normalizeDirectSecretaryEmployeeId(item.employeeId || item.id || '');
      if (!employeeId) return null;
      return {
        employeeId,
        displayName:String(item.displayName || item.name || '').trim()
      };
    }

    function directSecretaryGetStaffList(){
      try{
        const raw = localStorage.getItem(DIRECT_SECRETARY_STAFF_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : DIRECT_SECRETARY_DEFAULT_STAFF;
        const list = Array.isArray(parsed) ? parsed : [];
        const map = new Map();
        list.forEach((item) => {
          const normalized = normalizeDirectSecretaryStaffItem(item);
          if (!normalized) return;
          map.set(normalized.employeeId, normalized);
        });
        return Array.from(map.values()).sort((a, b) => a.employeeId.localeCompare(b.employeeId));
      }catch(error){
        return [];
      }
    }

    function directSecretarySetStaffList(list){
      const map = new Map();
      (Array.isArray(list) ? list : []).forEach((item) => {
        const normalized = normalizeDirectSecretaryStaffItem(item);
        if (!normalized) return;
        map.set(normalized.employeeId, normalized);
      });
      localStorage.setItem(DIRECT_SECRETARY_STAFF_STORAGE_KEY, JSON.stringify(Array.from(map.values())));
    }

    function directSecretaryParseStaffInput(rawId, rawName = ''){
      const idSource = String(rawId || '').trim();
      const nameSource = String(rawName || '').trim();
      const employeeId = normalizeDirectSecretaryEmployeeId(idSource || nameSource);
      let displayName = nameSource;
      if (!displayName && employeeId){
        displayName = idSource
          .replace(new RegExp(employeeId.replace('-', '-?'), 'i'), '')
          .replace(/\s+/g, ' ')
          .trim();
      }
      return { employeeId, displayName };
    }

    function directSecretaryUpsertStaff(item){
      const normalized = normalizeDirectSecretaryStaffItem(item);
      if (!normalized) return { ok:false, updated:false };
      const list = directSecretaryGetStaffList();
      const index = list.findIndex((staff) => staff.employeeId === normalized.employeeId);
      if (index >= 0){
        list[index] = {
          ...list[index],
          displayName:normalized.displayName || list[index].displayName || ''
        };
        directSecretarySetStaffList(list);
        return { ok:true, updated:true };
      }
      list.push(normalized);
      directSecretarySetStaffList(list);
      return { ok:true, updated:false };
    }

    function directSecretaryStaffLabel(staff){
      const label = String(staff && (staff.displayName || staff.name) || '').trim();
      return label || (staff ? staff.employeeId : '-');
    }

    function isDirectSecretaryEligibleEmployeeId(employeeId){
      const id = normalizeDirectSecretaryEmployeeId(employeeId);
      return directSecretaryGetStaffList().some((staff) => staff.employeeId === id);
    }

    function directSecretaryStaffById(employeeId){
      const id = normalizeDirectSecretaryEmployeeId(employeeId);
      return directSecretaryGetStaffList().find((staff) => staff.employeeId === id) || null;
    }

    function directSecretaryGetBackupMap(){
      try{
        const parsed = JSON.parse(localStorage.getItem(DIRECT_SECRETARY_TEAM_BACKUP_KEY) || '{}');
        return parsed && typeof parsed === 'object' ? parsed : {};
      }catch(error){
        return {};
      }
    }

    function directSecretarySaveBackup(employeeId, backup){
      const id = normalizeDirectSecretaryEmployeeId(employeeId);
      if (!id) return;
      const map = directSecretaryGetBackupMap();
      map[id] = {
        previousTeam:backup.previousTeam || '',
        previousGrade:backup.previousGrade || DEFAULT_GRADE,
        previousDepartmentKey:backup.previousDepartmentKey || 'vox',
        previousDepartmentName:backup.previousDepartmentName || '복스',
        previousBadgeSrc:backup.previousBadgeSrc || 'v2.png',
        savedAt:new Date().toISOString()
      };
      localStorage.setItem(DIRECT_SECRETARY_TEAM_BACKUP_KEY, JSON.stringify(map));
    }

    function directSecretaryReadBackup(employeeId){
      const map = directSecretaryGetBackupMap();
      return map[normalizeDirectSecretaryEmployeeId(employeeId)] || null;
    }

    function directSecretaryRemoveBackup(employeeId){
      const id = normalizeDirectSecretaryEmployeeId(employeeId);
      if (!id) return;
      const map = directSecretaryGetBackupMap();
      delete map[id];
      localStorage.setItem(DIRECT_SECRETARY_TEAM_BACKUP_KEY, JSON.stringify(map));
    }

    function directSecretaryFallbackTeam(){
      return TEAM_POOL.vox[0] || '인사평가팀';
    }

    function normalizeDirectSecretaryRestoreTeam(value){
      const team = String(value || '').trim();
      if (team && team !== DIRECT_SECRETARY_TEAM && team !== SPECIAL_TEAM && isTeamForDepartment(team, 'vox')){
        return team;
      }
      return directSecretaryFallbackTeam();
    }

    function normalizeDepartmentKey(value){
      const key = String(value || '').trim();
      if (key === 'vox' || key === 'valentino' || key === 'velvette') return key;
      return 'unknown';
    }

    function normalizeGrade(value, fallback = DEFAULT_GRADE){
      const grade = String(value || '').trim();
      return GRADE_ORDER.includes(grade) ? grade : fallback;
    }

    function promoteGrade(baseGrade, steps = 0){
      const start = Math.max(0, GRADE_ORDER.indexOf(normalizeGrade(baseGrade, DEFAULT_GRADE)));
      const next = Math.min(GRADE_ORDER.length - 1, start + Math.max(0, Number(steps) || 0));
      return GRADE_ORDER[next] || DEFAULT_GRADE;
    }

    function rewardLabelFromRank(rank){
      const value = Number(rank || 0);
      if (value === 1) return '특별팀 배정 · 한 단계 승진';
      if (value >= 2 && value <= 5) return '한 단계 승진';
      return '유지';
    }

    function currentLocalDateKey(){
      const d = new Date();
      return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
    }

    function isHrAwardEffective(){
      return currentLocalDateKey() >= HR_AWARD_EFFECTIVE_DATE;
    }

    function buildHrRole({ badge, role = null, team = '', grade = '', baseTeam = '', baseGrade = '', reward = null } = {}){
      const departmentKey = getDepartmentKeyFromBadge(badge);
      const fallbackTeam = pickRandomTeam(departmentKey);
      const cleanBaseTeam = isTeamForDepartment(baseTeam, departmentKey) && baseTeam !== SPECIAL_TEAM && baseTeam !== DIRECT_SECRETARY_TEAM ? String(baseTeam).trim() : fallbackTeam;
      const cleanBaseGrade = normalizeGrade(baseGrade || DEFAULT_GRADE, DEFAULT_GRADE);
      const cleanTeam = isTeamForDepartment(team, departmentKey) ? String(team).trim() : cleanBaseTeam;
      const cleanGrade = normalizeGrade(grade || cleanBaseGrade, cleanBaseGrade);

      return {
        ...(role && typeof role === 'object' ? role : {}),
        hrVersion: HR_ROLE_VERSION,
        departmentKey,
        departmentName: getDepartmentLabelByKey(departmentKey),
        baseTeam: cleanBaseTeam,
        baseGrade: cleanBaseGrade,
        team: cleanTeam,
        grade: cleanGrade,
        employment: cleanTeam,
        position: cleanGrade,
        gradeIndex: GRADE_ORDER.indexOf(cleanGrade),
        rewardSeason: reward ? (reward.rewardSeason || '') : ((role && role.rewardSeason) || ''),
        rewardRank: reward ? (reward.rewardRank !== null && reward.rewardRank !== '' && Number.isFinite(Number(reward.rewardRank)) ? Number(reward.rewardRank) : null) : ((role && role.rewardRank) || null),
        rewardType: reward ? (reward.rewardType || '') : ((role && role.rewardType) || ''),
        rewardLabel: reward ? (reward.rewardLabel || '') : ((role && role.rewardLabel) || ''),
        rewardTotalScore: reward ? (reward.rewardTotalScore !== null && reward.rewardTotalScore !== '' && Number.isFinite(Number(reward.rewardTotalScore)) ? Number(reward.rewardTotalScore) : null) : ((role && role.rewardTotalScore) || null)
      };
    }

    function pickRandomRole(badge){
      return buildHrRole({ badge, baseGrade:DEFAULT_GRADE, grade:DEFAULT_GRADE });
    }

    function normalizeRole(role, badge){
      const departmentKey = getDepartmentKeyFromBadge(badge);
      if (!role || typeof role !== 'object'){
        return pickRandomRole(badge);
      }

      const looksLikeNewHrRole = role.hrVersion === HR_ROLE_VERSION ||
        (GRADE_ORDER.includes(String(role.position || '').trim()) && isKnownTeamName(role.employment));

      if (!looksLikeNewHrRole){
// 기존 랜덤 고용형태/직책은 6월 인사평가 도입과 함께 전원 계약직으로 재분류
// 입사일, 사원 ID, 대표 소속 마크는 건드리지 않음
        return buildHrRole({ badge, role:{}, baseTeam:pickRandomTeam(departmentKey), baseGrade:DEFAULT_GRADE, grade:DEFAULT_GRADE });
      }

      const incomingTeam = String(role.team || role.employment || '').trim();
      const incomingBaseTeam = String(role.baseTeam || '').trim();
      const baseTeam = incomingBaseTeam && incomingBaseTeam !== SPECIAL_TEAM && incomingBaseTeam !== DIRECT_SECRETARY_TEAM && isTeamForDepartment(incomingBaseTeam, departmentKey)
        ? incomingBaseTeam
        : (incomingTeam && incomingTeam !== SPECIAL_TEAM && incomingTeam !== DIRECT_SECRETARY_TEAM && isTeamForDepartment(incomingTeam, departmentKey) ? incomingTeam : pickRandomTeam(departmentKey));
      const baseGrade = normalizeGrade(role.baseGrade || DEFAULT_GRADE, DEFAULT_GRADE);
      const team = isTeamForDepartment(incomingTeam, departmentKey) ? incomingTeam : baseTeam;
      const grade = normalizeGrade(role.grade || role.position || baseGrade, baseGrade);

      return buildHrRole({ badge, role, team, grade, baseTeam, baseGrade });
    }

    function clearHrReward(role, badge){
      const normalized = normalizeRole(role, badge);
      const keepTeam = normalized.team === DIRECT_SECRETARY_TEAM ? DIRECT_SECRETARY_TEAM : normalized.baseTeam;
      return buildHrRole({
        badge,
        role: normalized,
        team: keepTeam,
        grade: normalized.baseGrade,
        baseTeam: normalized.baseTeam,
        baseGrade: normalized.baseGrade,
        reward:{ rewardSeason:'', rewardRank:null, rewardType:'', rewardLabel:'', rewardTotalScore:null }
      });
    }

    function generateEmployeeId(){
      return `VT-${Math.floor(100000 + Math.random() * 900000)}`;
    }

    function normalizeEmployeeRecord(data){
      if (!data || typeof data.name !== 'string' || !data.joinedAt) return null;
      if (data.isAdmin) return null;
      if (!data.badge || !data.badge.src){
        data.badge = pickRandomBadge();
      }
      if (!data.employeeId){
        data.employeeId = generateEmployeeId();
      }
      data.role = normalizeRole(data.role, data.badge);
      data.nameHistory = Array.isArray(data.nameHistory) ? data.nameHistory : [];
      if (data.birthday && !data.birthdayMonthDay){
        data.birthdayMonthDay = birthdayMonthDayFromValue(data.birthday);
      }
      if (!isHrAwardEffective()){
        data.role = clearHrReward(data.role, data.badge);
      }
      return data;
    }

    function birthdayMonthDayFromValue(value){
      const text = String(value || '').trim();
      const match = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (match) return `${match[2]}-${match[3]}`;
      const shortMatch = text.match(/^(\d{2})-(\d{2})$/);
      if (shortMatch) return text;
      return '';
    }

    function currentMonthDay(){
      const d = new Date();
      return `${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
    }

    function currentYear(){
      return new Date().getFullYear();
    }

    function birthdayDisplay(value){
      const text = String(value || '').trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(text)){
        const [, month, day] = text.match(/^\d{4}-(\d{2})-(\d{2})$/) || [];
        return `${month}월 ${day}일`;
      }
      if (/^\d{2}-\d{2}$/.test(text)){
        const [month, day] = text.split('-');
        return `${month}월 ${day}일`;
      }
      return '-';
    }

    function updateEmployeeRecord(updater){
      const current = getStoredEmployee();
      if (!current) return null;
      const draft = JSON.parse(JSON.stringify(current));
      const next = normalizeEmployeeRecord(updater(draft) || draft);
      if (!next) return null;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      activeEmployee = next;
      if (topbarName) topbarName.textContent = next.name || '-';
      if (employeeNameInput) employeeNameInput.value = next.name || '';
      if (missionState && missionState.accountId === (next.employeeId || next.name)){
        missionState.employeeName = next.name;
        missionSaveState();
      }
      renderIdCard(next);
      syncEmployeeProfile(next);
      updateMailUnreadIndicator();
      return next;
    }

    function sendEmployeeEvent(eventType, employee, detail = {}){
      if (!employee) return;
      const row = {
        event_type:eventType,
        account_id:employee.employeeId || employee.name || '',
        employee_name:employee.name || '',
        mission_id:null,
        creature_name:null,
        mission_day:null,
        points:null,
        affection:null,
        local_date:typeof missionToday === 'function' ? missionToday() : new Date().toISOString().slice(0, 10),
        session_id:typeof missionSession === 'function' ? missionSession() : '',
        user_agent:navigator.userAgent,
        detail:{
          source:'employee_profile',
          employee_id:employee.employeeId || '',
          client_time:new Date().toISOString(),
          ...detail
        }
      };

      if (typeof recordStructuredEmployeeEvent === 'function'){
        recordStructuredEmployeeEvent(eventType, employee, detail);
      }

      if (typeof vocInsertSupabaseRow === 'function'){
        vocInsertSupabaseRow(row).then((result) => {
          if (!result || !result.ok) console.warn(`[${eventType}] Supabase log failed:`, result);
        });
      } else if (supabaseClient){
        supabaseClient.from('voxtek_events').insert(row).then(({ error }) => {
          if (error) console.warn(`[${eventType}] Supabase log failed:`, error);
        });
      }
    }

    async function insertStructuredTable(tableName, payload, options = {}){
      if (!supabaseClient || !tableName || !payload) return { ok:false, reason:'no_supabase' };
      try{
        const query = supabaseClient.from(tableName);
        const result = options.upsert
          ? await query.upsert(payload, options.upsert)
          : await query.insert(payload);
        if (result.error) throw result.error;
        return { ok:true };
      }catch(error){
        console.warn(`[${tableName}] structured record failed:`, error);
        return { ok:false, error };
      }
    }

    function employeeProfilePayload(employee, extra = {}){
      if (!employee || isAdminEmployee(employee)) return null;
      const dept = getDepartmentInfo(employee);
      const role = normalizeRole(employee.role, employee.badge);
      const profileTeam = resolveTeamForDepartment(role.team || role.employment || '', dept.key);
      return {
        employee_id:employee.employeeId || employee.name || '',
        display_name:employee.name || '',
        joined_at:employee.joinedAt || null,
        birthday:employee.birthday || null,
        birthday_month_day:employee.birthdayMonthDay || birthdayMonthDayFromValue(employee.birthday || ''),
        department_key:dept.key || '',
        department_name:dept.name || '',
        badge_src:employee.badge && employee.badge.src ? employee.badge.src : '',
        team:profileTeam,
        grade:role.grade || role.position || '',
        updated_at:new Date().toISOString(),
        ...extra
      };
    }

    function syncEmployeeProfile(employee, extra = {}){
      const payload = employeeProfilePayload(employee, extra);
      if (!payload || !payload.employee_id) return;
      insertStructuredTable('voxtek_employee_profiles', payload, { upsert:{ onConflict:'employee_id' } });
    }


    function badgeForDepartmentKey(departmentKey){
      const key = String(departmentKey || '').trim();
      if (key === 'vox') return { src:'v2.png', label:'v2.png' };
      if (key === 'valentino') return { src:'v1.png', label:'v1.png' };
      if (key === 'velvette') return { src:'v3.png', label:'v3.png' };
      return null;
    }

    function applyRemoteEmployeeProfile(employee, profile){
      if (!employee || !profile || isAdminEmployee(employee)) return employee;
      const next = JSON.parse(JSON.stringify(employee));

      if (profile.display_name) next.name = String(profile.display_name);
      if (profile.joined_at && !next.joinedAt) next.joinedAt = profile.joined_at;
      if (profile.birthday){
        next.birthday = profile.birthday;
        next.birthdayMonthDay = profile.birthday_month_day || birthdayMonthDayFromValue(profile.birthday);
      } else if (profile.birthday_month_day && !next.birthdayMonthDay){
        next.birthdayMonthDay = profile.birthday_month_day;
      }

      const departmentBadge = badgeForDepartmentKey(profile.department_key);
      const badgeSrc = profile.badge_src || (departmentBadge ? departmentBadge.src : '');
      if (badgeSrc){
        next.badge = { src:badgeSrc, label:badgeSrc };
      } else if (departmentBadge){
        next.badge = { ...departmentBadge };
      }

      const currentRole = normalizeRole(next.role, next.badge);
      const departmentKey = getDepartmentKeyFromBadge(next.badge);
      const remoteTeam = String(profile.team || '').trim();
      const remoteGrade = String(profile.grade || '').trim();
      const finalTeam = isTeamForDepartment(remoteTeam, departmentKey)
        ? remoteTeam
        : resolveTeamForDepartment(currentRole.team || currentRole.employment || '', departmentKey);
      const finalGrade = GRADE_ORDER.includes(remoteGrade) ? remoteGrade : (currentRole.grade || currentRole.position || DEFAULT_GRADE);
      const finalBaseTeam = currentRole.baseTeam && currentRole.baseTeam !== SPECIAL_TEAM && currentRole.baseTeam !== DIRECT_SECRETARY_TEAM && isTeamForDepartment(currentRole.baseTeam, departmentKey)
        ? currentRole.baseTeam
        : (finalTeam === DIRECT_SECRETARY_TEAM ? directSecretaryFallbackTeam() : finalTeam);

      next.role = buildHrRole({
        badge:next.badge,
        role:currentRole,
        team:finalTeam,
        grade:finalGrade,
        baseTeam:finalBaseTeam,
        baseGrade:currentRole.baseGrade || DEFAULT_GRADE
      });

      const normalized = normalizeEmployeeRecord(next);
      return normalized || next;
    }

    async function syncEmployeeFromRemoteProfile(employee){
      if (!employee || isAdminEmployee(employee) || !supabaseClient || !employee.employeeId) return employee;
      try{
        const { data, error } = await supabaseClient
          .from('voxtek_employee_profiles')
          .select('*')
          .eq('employee_id', employee.employeeId)
          .maybeSingle();

        if (error){
          console.warn('[employee profile] remote sync failed:', error);
          return employee;
        }

        if (!data){
          syncEmployeeProfile(employee);
          return employee;
        }

        const next = applyRemoteEmployeeProfile(employee, data);
        if (!next) return employee;

        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        activeEmployee = next;
        if (topbarName) topbarName.textContent = next.name || '-';
        if (employeeNameInput) employeeNameInput.value = next.name || '';
        if (missionState && missionState.accountId === (next.employeeId || next.name)){
          missionState.employeeName = next.name;
          missionSaveState();
        }
        renderIdCard(next);
        updateMailUnreadIndicator();
        return next;
      }catch(error){
        console.warn('[employee profile] remote sync threw:', error);
        return employee;
      }
    }

    function recordStructuredEmployeeEvent(eventType, employee, detail = {}){
      if (!employee || isAdminEmployee(employee)) return;
      syncEmployeeProfile(employee);

      if (eventType === 'NAME_CHANGED'){
        const changedAt = detail.changed_at || new Date().toISOString();
        insertStructuredTable('voxtek_name_change_logs', {
          employee_id:employee.employeeId || employee.name || '',
          previous_name:detail.old_name || '',
          new_name:detail.new_name || employee.name || '',
          current_name:employee.name || '',
          changed_at:changedAt,
          created_at:changedAt
        });
        syncEmployeeProfile(employee, { last_name_changed_at:changedAt });
      }

      if (eventType === 'BIRTHDAY_REGISTERED'){
        const updatedAt = detail.updated_at || new Date().toISOString();
        insertStructuredTable('voxtek_birthday_records', {
          employee_id:employee.employeeId || employee.name || '',
          employee_name:employee.name || '',
          birthday:detail.birthday || employee.birthday || null,
          birthday_month_day:detail.birthday_month_day || employee.birthdayMonthDay || '',
          display_birthday:detail.display_birthday || birthdayDisplay(employee.birthday || ''),
          created_at:updatedAt
        });
        syncEmployeeProfile(employee, {
          birthday:detail.birthday || employee.birthday || null,
          birthday_month_day:detail.birthday_month_day || employee.birthdayMonthDay || '',
          updated_at:updatedAt
        });
      }
    }

    function recordStructuredAffiliationRequest(row){
      if (!row || row.type !== 'affiliation_change_request') return;
      insertStructuredTable('voxtek_affiliation_requests', {
        employee_id:row.employeeId || '',
        employee_name:row.employeeName || '',
        current_department:row.currentDepartment || row.department || '',
        requested_department:row.requestedDepartment || '',
        requested_department_key:row.requestedDepartmentKey || '',
        reason:row.reason || '',
        status:'pending',
        created_at:row.at || new Date().toISOString()
      });
    }

    function getStoredEmployee(){
      try{
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = normalizeEmployeeRecord(JSON.parse(raw));
        if (!parsed){
          return null;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        return parsed;
      }catch(e){
        return null;
      }
    }

    async function applyEmployeeHrAward(employee){
      if (!employee || isAdminEmployee(employee)) return employee;
      const normalized = normalizeEmployeeRecord({ ...employee, role:{ ...(employee.role || {}) }, badge:{ ...(employee.badge || {}) } });
      if (!normalized){
        return employee;
      }
      if (!isHrAwardEffective()){
        normalized.role = clearHrReward(normalized.role, normalized.badge);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
        return normalized;
      }
      if (!supabaseClient || !normalized.employeeId){
        return normalized;
      }

      try{
        const { data, error } = await supabaseClient.rpc('get_employee_hr_award', { p_employee_id: normalized.employeeId });
        if (error) throw error;
        const award = Array.isArray(data) ? data[0] : data;
        const baseRole = normalizeRole(normalized.role, normalized.badge);

        if (!award || !Number(award.reward_rank || award.rank || 0)){
          const keepTeam = baseRole.team === DIRECT_SECRETARY_TEAM ? DIRECT_SECRETARY_TEAM : baseRole.baseTeam;
          normalized.role = buildHrRole({
            badge: normalized.badge,
            role: baseRole,
            team: keepTeam,
            grade: baseRole.baseGrade,
            baseTeam: baseRole.baseTeam,
            baseGrade: baseRole.baseGrade,
            reward:{ rewardSeason:'', rewardRank:null, rewardType:'', rewardLabel:'', rewardTotalScore:null }
          });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
          return normalized;
        }

        const rewardRank = Number(award.reward_rank || award.rank || 0);
        const promotionSteps = Number(award.promotion_steps || (rewardRank >= 1 && rewardRank <= 5 ? 1 : 0));
        const rewardTeam = baseRole.team === DIRECT_SECRETARY_TEAM ? DIRECT_SECRETARY_TEAM : (rewardRank === 1 ? SPECIAL_TEAM : baseRole.baseTeam);
        const rewardGrade = award.grade_after || promoteGrade(baseRole.baseGrade, promotionSteps);
        const rewardType = award.reward_type || (rewardRank === 1 ? 'SPECIAL_TEAM_PROMOTION' : rewardRank <= 5 ? 'PROMOTION' : 'NONE');
        const rewardLabel = award.reward_label || rewardLabelFromRank(rewardRank);

        normalized.role = buildHrRole({
          badge: normalized.badge,
          role: baseRole,
          team: rewardTeam,
          grade: rewardGrade,
          baseTeam: baseRole.baseTeam,
          baseGrade: baseRole.baseGrade,
          reward:{
            rewardSeason: HR_AWARD_SEASON,
            rewardRank,
            rewardType,
            rewardLabel,
            rewardTotalScore: Number(award.total_score || 0)
          }
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
        return normalized;
      }catch(error){
        console.warn('HR award sync failed:', error);
        return normalized || employee;
      }
    }

    function saveEmployee(name){
      const current = getStoredEmployee();
      let payload;
      if (current && current.name === name){
        const badge = current.badge || pickRandomBadge();
        payload = {
          ...current,
          badge,
          role: normalizeRole(current.role, badge),
          employeeId: current.employeeId || generateEmployeeId(),
          lastLoginAt: new Date().toISOString()
        };
      } else {
        const badge = pickRandomBadge();
        payload = {
          name,
          joinedAt: new Date().toISOString(),
          badge,
          role: pickRandomRole(badge),
          employeeId: generateEmployeeId(),
          lastLoginAt: new Date().toISOString()
        };
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      return payload;
    }

    function updateLoginState(){
      const saved = getStoredEmployee();
      loginStatus.textContent = '';
      if (saved){
        employeeNameInput.value = saved.name;
        employeeNameInput.readOnly = true;
        employeeNameInput.placeholder = '';
        loginBtn.textContent = '로그인';
        quitBtn.textContent = '퇴사하기';
        quitBtn.classList.remove('hidden');
        if (adminLoginOpenBtn) adminLoginOpenBtn.classList.remove('hidden');
        loginNote.textContent = '';
      } else {
        employeeNameInput.value = '';
        employeeNameInput.readOnly = false;
        employeeNameInput.placeholder = '이름을 입력하세요';
        loginBtn.textContent = '로그인';
        quitBtn.textContent = '퇴사하기';
        quitBtn.classList.add('hidden');
        if (adminLoginOpenBtn) adminLoginOpenBtn.classList.remove('hidden');
        loginNote.textContent = '';
      }
    }

    function runBootSequence(callback){
      bootOverlay.classList.remove('hidden');
      bootLines.forEach(line => line.classList.remove('active'));
      const delays = [250, 740, 1220];
      delays.forEach((delay, i) => {
        setTimeout(() => bootLines[i].classList.add('active'), delay);
      });
      setTimeout(() => {
        bootOverlay.classList.add('hidden');
        callback();
      }, 1900);
    }


    function centerIntroPopup(){
      if (!introPopup || !introScreen || introScreen.classList.contains('hidden')) return;
      const bounds = introScreen.getBoundingClientRect();
      const popupRect = introPopup.getBoundingClientRect();
      const left = Math.max(10, Math.round((bounds.width - popupRect.width) / 2));
      const top = Math.max(18, Math.round((bounds.height - popupRect.height) / 2));
      introPopup.style.left = `${left}px`;
      introPopup.style.top = `${top}px`;
    }

    function showIntroPopup(employee){
      pendingEmployee = employee;
      enterDesktop(employee);
      introScreen.classList.remove('hidden');
      requestAnimationFrame(centerIntroPopup);
      setTimeout(centerIntroPopup, 60);
    }

    function closeIntroPopup(){
      introScreen.classList.add('hidden');
      pendingEmployee = null;
      maybeShowBirthdayPrompt();
    }

    function enterDesktop(employee){
      activeEmployee = employee;
      const admin = isAdminEmployee(employee);
      if (!admin) missionHandlePortalLogin(employee);
      if (topbarRoleLabel) topbarRoleLabel.textContent = admin ? '관리자' : '사원';
      topbarName.textContent = employee ? employee.name : '-';
      setMissionShellMode(admin);
      renderIdCard(employee);
      if (!admin) syncEmployeeProfile(employee);
      updateMailUnreadIndicator();
      applyMusicVideoSource();
      closeAllWindows();
      applyThemeMode('default');
      loginScreen.classList.add('hidden');
      desktopScreen.classList.remove('hidden');
    }

    function maybeShowBirthdayPrompt(){
      const employee = getActiveEmployee();
      if (!employee || isAdminEmployee(employee) || !birthdayModal) return;
      const hasBirthday = !!(employee.birthdayMonthDay || birthdayMonthDayFromValue(employee.birthday));
      const dismissed = sessionStorage.getItem(BIRTHDAY_PROMPT_SESSION_KEY) === 'dismissed';
      if (!hasBirthday && !dismissed){
        setTimeout(openBirthdayModal, 360);
      }
    }

    function openBirthdayModal(){
      if (!birthdayModal) return;
      const employee = getActiveEmployee();
      if (!employee || isAdminEmployee(employee)) return;
      if (birthdayInput) birthdayInput.value = employee.birthday || '';
      if (birthdayStatus) birthdayStatus.textContent = '';
      birthdayModal.classList.remove('hidden');
      setTimeout(() => birthdayInput && birthdayInput.focus(), 60);
    }

    function closeBirthdayModal(markDismissed = false){
      if (!birthdayModal) return;
      birthdayModal.classList.add('hidden');
      if (birthdayStatus) birthdayStatus.textContent = '';
      if (markDismissed) sessionStorage.setItem(BIRTHDAY_PROMPT_SESSION_KEY, 'dismissed');
    }

    function saveBirthday(){
      const value = birthdayInput ? birthdayInput.value.trim() : '';
      if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)){
        if (birthdayStatus) birthdayStatus.textContent = '생일을 선택하십시오.';
        return;
      }
      const next = updateEmployeeRecord((employee) => {
        employee.birthday = value;
        employee.birthdayMonthDay = birthdayMonthDayFromValue(value);
        employee.birthdayUpdatedAt = new Date().toISOString();
        return employee;
      });
      if (next){
        sendEmployeeEvent('BIRTHDAY_REGISTERED', next, {
          birthday:value,
          birthday_month_day:next.birthdayMonthDay,
          display_birthday:birthdayDisplay(value),
          updated_at:next.birthdayUpdatedAt || new Date().toISOString()
        });
        closeBirthdayModal(true);
        missionToast('생일 기록 저장 완료.');
        if (mailList && !document.getElementById('window-mail').classList.contains('hidden')) renderMailInbox(activeMailId);
      }
    }

    function renderNameHistory(employee = getActiveEmployee()){
      if (!nameHistoryList) return;
      const history = Array.isArray(employee && employee.nameHistory) ? employee.nameHistory : [];
      if (!history.length){
        nameHistoryList.innerHTML = '<div class="name-history-item">아직 이름 수정 이력이 없습니다.</div>';
        return;
      }
      nameHistoryList.innerHTML = history.slice().reverse().map((item) => `
        <div class="name-history-item">
          ${escapeHtml(item.from || '-')} → <strong>${escapeHtml(item.to || '-')}</strong>
          <small>${escapeHtml(item.at ? formatDate(item.at) : '-')} · ${escapeHtml(item.employeeId || '')}</small>
        </div>
      `).join('');
    }

    function openNameEditModal(){
      if (!nameEditModal) return;
      const employee = getActiveEmployee();
      if (!employee || isAdminEmployee(employee)) return;
      if (nameEditInput) nameEditInput.value = employee.name || '';
      if (nameEditStatus) nameEditStatus.textContent = '';
      nameEditModal.classList.remove('hidden');
      setTimeout(() => nameEditInput && nameEditInput.focus(), 60);
    }

    function closeNameEditModal(){
      if (!nameEditModal) return;
      nameEditModal.classList.add('hidden');
      if (nameEditStatus) nameEditStatus.textContent = '';
    }

    function saveEditedName(){
      const employee = getActiveEmployee();
      const nextName = nameEditInput ? nameEditInput.value.trim() : '';
      if (!employee || isAdminEmployee(employee)) return;
      if (!nextName){
        if (nameEditStatus) nameEditStatus.textContent = '새 이름을 입력하십시오.';
        return;
      }
      if (isReservedAdminHandle(nextName)){
        if (nameEditStatus) nameEditStatus.textContent = '대표 계정명은 일반 사원 이름으로 사용할 수 없습니다.';
        return;
      }
      if (nextName === employee.name){
        if (nameEditStatus) nameEditStatus.textContent = '현재 이름과 동일합니다.';
        return;
      }
      const oldName = employee.name;
      const changedAt = new Date().toISOString();
      const updated = updateEmployeeRecord((record) => {
        record.nameHistory = Array.isArray(record.nameHistory) ? record.nameHistory : [];
        record.nameHistory.push({ from:oldName, to:nextName, at:changedAt, employeeId:record.employeeId || '' });
        record.name = nextName;
        record.lastNameChangedAt = changedAt;
        return record;
      });
      if (updated){
        sendEmployeeEvent('NAME_CHANGED', updated, {
          old_name:oldName,
          new_name:nextName,
          changed_at:changedAt,
          history_count:updated.nameHistory.length
        });
        missionToast('이름 수정 완료.');
        closeNameEditModal();
      }
    }

    if (birthdaySave) birthdaySave.addEventListener('click', saveBirthday);
    if (birthdayLater) birthdayLater.addEventListener('click', () => closeBirthdayModal(true));
    if (birthdayInput) birthdayInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') saveBirthday(); });
    if (birthdayModal) birthdayModal.addEventListener('click', (e) => { if (e.target === birthdayModal) closeBirthdayModal(true); });
    if (editNameBtn) editNameBtn.addEventListener('click', openNameEditModal);
    if (nameEditSave) nameEditSave.addEventListener('click', saveEditedName);
    if (nameEditCancel) nameEditCancel.addEventListener('click', closeNameEditModal);
    if (nameEditInput) nameEditInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') saveEditedName(); });
    if (nameEditModal) nameEditModal.addEventListener('click', (e) => { if (e.target === nameEditModal) closeNameEditModal(); });

    function handleLogin(){
      if (isBooting) return;
      const raw = employeeNameInput.value.trim();
      if (!raw){
        loginStatus.textContent = '이름부터 입력해. 아무나 들여보낼 생각은 없거든.';
        employeeNameInput.focus();
        return;
      }
      if (isReservedAdminHandle(raw)){
        loginStatus.textContent = '대표 계정은 관리자 로그인 창구로 접속하십시오.';
        if (adminLoginOpenBtn) adminLoginOpenBtn.focus();
        return;
      }
      isBooting = true;
      loginBtn.disabled = true;
      quitBtn.disabled = true;
      if (adminLoginOpenBtn) adminLoginOpenBtn.disabled = true;
      loginStatus.textContent = '';
      const employee = saveEmployee(raw);
      runBootSequence(() => {
        isBooting = false;
        loginBtn.disabled = false;
        quitBtn.disabled = false;
        if (adminLoginOpenBtn) adminLoginOpenBtn.disabled = false;
        applyEmployeeHrAward(employee).then(async (updatedEmployee) => {
          const baseEmployee = updatedEmployee || employee;
          const syncedEmployee = await syncEmployeeFromRemoteProfile(baseEmployee);
          showIntroPopup(syncedEmployee || baseEmployee);
        });
      });
    }

    function resetEmployee(){
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(SOUND_KEY);
      localStorage.removeItem(MAIL_READ_KEY);
      try{ sessionStorage.removeItem(ADMIN_SESSION_KEY); }catch(error){}
      bgAudio.pause();
      bgAudio.currentTime = 0;
      applyThemeMode('default');
      quitModal.classList.add('hidden');
      if (birthdayModal) birthdayModal.classList.add('hidden');
      if (nameEditModal) nameEditModal.classList.add('hidden');
      desktopScreen.classList.add('hidden');
      introScreen.classList.add('hidden');
      pendingEmployee = null;
      activeEmployee = null;
      if (topbarRoleLabel) topbarRoleLabel.textContent = '사원';
      setMissionShellMode(false);
      loginScreen.classList.remove('hidden');
      updateLoginState();
      soundToggle.textContent = 'SOUND OFF';
    }

    function openAdminLogin(){
      if (!adminLoginModal) return;
      setSelectedAdminAccount(selectedAdminKey || 'vox');
      if (adminPasscodeInput) adminPasscodeInput.value = '';
      if (adminLoginStatus) adminLoginStatus.textContent = '';
      adminLoginModal.classList.remove('hidden');
      setTimeout(() => adminPasscodeInput && adminPasscodeInput.focus(), 60);
    }

    function closeAdminLogin(){
      if (!adminLoginModal) return;
      adminLoginModal.classList.add('hidden');
      if (adminPasscodeInput) adminPasscodeInput.value = '';
      if (adminLoginStatus) adminLoginStatus.textContent = '';
    }

    function setSelectedAdminAccount(key){
      selectedAdminKey = key;
      adminAccountButtons.forEach((button) => {
        button.classList.toggle('is-selected', button.dataset.adminKey === key);
      });
      if (adminLoginStatus) adminLoginStatus.textContent = '';
    }

    function handleAdminLogin(){
      const profile = getAdminProfile(selectedAdminKey);
      if (!profile) return;
      const value = adminPasscodeInput ? adminPasscodeInput.value.trim() : '';
      if (!value){
        if (adminLoginStatus) adminLoginStatus.textContent = '관리자 키를 입력하십시오.';
        return;
      }
      if (value.toLowerCase() !== profile.passcode.toLowerCase()){
        if (adminLoginStatus) adminLoginStatus.textContent = 'ACCESS DENIED. 관리자 키가 일치하지 않습니다.';
        return;
      }
      const employee = saveAdminEmployee(profile);
      closeAdminLogin();
      isBooting = true;
      loginBtn.disabled = true;
      quitBtn.disabled = true;
      if (adminLoginOpenBtn) adminLoginOpenBtn.disabled = true;
      runBootSequence(() => {
        isBooting = false;
        loginBtn.disabled = false;
        quitBtn.disabled = false;
        if (adminLoginOpenBtn) adminLoginOpenBtn.disabled = false;
        enterDesktop(employee);
      });
    }

    if (adminLoginOpenBtn) adminLoginOpenBtn.addEventListener('click', openAdminLogin);
    if (adminLoginCancel) adminLoginCancel.addEventListener('click', closeAdminLogin);
    if (adminLoginConfirm) adminLoginConfirm.addEventListener('click', handleAdminLogin);
    if (adminPasscodeInput) adminPasscodeInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleAdminLogin(); });
    adminAccountButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setSelectedAdminAccount(button.dataset.adminKey || 'vox');
        if (adminPasscodeInput) adminPasscodeInput.focus();
      });
    });
    if (adminLoginModal){
      adminLoginModal.addEventListener('click', (e) => { if (e.target === adminLoginModal) closeAdminLogin(); });
    }

    loginBtn.addEventListener('click', handleLogin);
    employeeNameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleLogin();
    });

    introCloseBtn.addEventListener('click', closeIntroPopup);

    quitBtn.addEventListener('click', () => {
      const title = quitModal ? quitModal.querySelector('h3') : null;
      const copy = quitModal ? quitModal.querySelector('p') : null;
      if (title) title.textContent = '되돌릴 수 없습니다.';
      if (copy) copy.textContent = '당신의 무가치한 인생으로 돌아가겠습니까?';
      quitModal.classList.remove('hidden');
    });

    cancelQuit.addEventListener('click', () => quitModal.classList.add('hidden'));
    confirmQuit.addEventListener('click', resetEmployee);

    quitModal.addEventListener('click', (e) => {
      if (e.target === quitModal) quitModal.classList.add('hidden');
    });



    /* 미션 상태 및 Supabase 기록 저장 */
    function missionToday(){
      const d = new Date();
      return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
    }

    function missionFormatDateKey(dateKey){
      return String(dateKey || missionToday()).replaceAll('-', '.');
    }

    function missionUnlockDate(employee){
      if (!employee || !employee.joinedAt) return missionToday();
      const joined = new Date(employee.joinedAt);
      if (Number.isNaN(joined.getTime())) return missionToday();
      joined.setDate(joined.getDate() + MISSION_UNLOCK_DAY - 1);
      return `${joined.getFullYear()}-${pad2(joined.getMonth() + 1)}-${pad2(joined.getDate())}`;
    }

    function missionServiceDays(employee = getStoredEmployee()){
      if (!employee || !employee.joinedAt) return 0;
      return calculateDayCount(employee.joinedAt);
    }

    function missionHasEnoughServiceDays(employee = getStoredEmployee()){
      return missionServiceDays(employee) >= MISSION_UNLOCK_DAY;
    }

    function missionUpdateGateInfo(){
      if (!missionGateDayInfo) return;
      const employee = getStoredEmployee();
      const days = missionServiceDays(employee);
      const remain = Math.max(0, MISSION_UNLOCK_DAY - days);
      const unlockDate = missionFormatDateKey(missionUnlockDate(employee));
      if (days >= MISSION_UNLOCK_DAY){
        missionGateDayInfo.className = 'mission-gate-info unlocked';
        missionGateDayInfo.innerHTML = `<strong>근속 ${days}일차</strong><br>MISSION 채널 접근 조건이 충족되었습니다. 공통 패스워드를 입력하세요.`;
      } else {
        missionGateDayInfo.className = 'mission-gate-info locked';
        missionGateDayInfo.innerHTML = `<strong>근속 ${days}일차 / ${MISSION_UNLOCK_DAY}일 필요</strong><br>${remain}일 후 활성화 예정입니다. 해금 예정일: ${unlockDate}`;
      }
    }

    function missionDate(dateKey){
      return new Date(`${dateKey}T00:00:00`);
    }

    function missionAddDays(dateKey, amount){
      const d = missionDate(dateKey);
      d.setDate(d.getDate() + amount);
      return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
    }

    function missionDiffDays(startKey, endKey){
      return Math.floor((missionDate(endKey) - missionDate(startKey)) / 86400000);
    }

    function missionClamp(value, min, max){
      return Math.max(min, Math.min(max, value));
    }

    function missionUid(){
      return Math.random().toString(36).slice(2) + Date.now().toString(36);
    }

    function missionSession(){
      let value = localStorage.getItem(MISSION_SESSION_KEY);
      if (!value){
        value = missionUid();
        localStorage.setItem(MISSION_SESSION_KEY, value);
      }
      return value;
    }

    function missionStorageKey(employee){
      const id = employee && employee.employeeId ? employee.employeeId : (employee && employee.name ? employee.name : 'unknown');
      return `${MISSION_STORAGE_PREFIX}${id}`;
    }

    function missionBlankState(employee){
      return {
        accountId: employee.employeeId || employee.name,
        employeeName: employee.name,
        createdAt: new Date().toISOString(),
        lastLoginDate: '',
        loginDates: [],
        completedMissions: [],
        feedback: [],
        chatHistory: [],
        chatOfferRound: null,
        missionAccessGranted: false,
        missionAccessLabel: '',
        chatSent: false,
        currentMission: null
      };
    }

    function missionUniqueDateList(list){
      return [...new Set((list || []).filter(Boolean))].sort();
    }

    function missionActionDateSet(mission, action){
      const key = action === 'feed' ? 'feedDates' : action === 'bath' ? 'bathDates' : '';
      const dates = new Set(key ? (mission[key] || []) : []);
      (mission.careLog || []).forEach(log => {
        if (log && log.action === action && log.date) dates.add(log.date);
      });
      return dates;
    }

    function missionRequiredCareDates(mission){
      if (!mission) return [];
      const start = mission.startedAt;
      const end = missionAddDays(mission.startedAt, MISSION_CARE_TOTAL - 1);
      const feedSet = missionActionDateSet(mission, 'feed');
      const bathSet = missionActionDateSet(mission, 'bath');
      return [...feedSet]
        .filter(date => bathSet.has(date) && date >= start && date <= end)
        .sort();
    }

    function missionNormalizeMissionRecord(mission){
      if (!mission) return mission;
      mission.careDates = missionUniqueDateList(mission.careDates || []);
      mission.feedDates = missionUniqueDateList(mission.feedDates || []);
      mission.bathDates = missionUniqueDateList(mission.bathDates || []);
      (mission.careLog || []).forEach(log => {
        if (!log || !log.date) return;
        if (log.action === 'feed' && !mission.feedDates.includes(log.date)) mission.feedDates.push(log.date);
        if (log.action === 'bath' && !mission.bathDates.includes(log.date)) mission.bathDates.push(log.date);
      });
      mission.feedDates = missionUniqueDateList(mission.feedDates);
      mission.bathDates = missionUniqueDateList(mission.bathDates);
      if (!mission.lastFeedDate && mission.feedDates.length) mission.lastFeedDate = mission.feedDates[mission.feedDates.length - 1];
      if (!mission.lastBathDate && mission.bathDates.length) mission.lastBathDate = mission.bathDates[mission.bathDates.length - 1];
      mission.careDates = missionRequiredCareDates(mission);
      return mission;
    }

    function missionLoadState(employee){
      if (!employee) return null;
      try{
        const raw = localStorage.getItem(missionStorageKey(employee));
        if (!raw) return missionBlankState(employee);
        const parsed = JSON.parse(raw);
        parsed.accountId = parsed.accountId || employee.employeeId || employee.name;
        parsed.employeeName = employee.name;
        parsed.loginDates = parsed.loginDates || [];
        parsed.completedMissions = parsed.completedMissions || [];
        parsed.feedback = parsed.feedback || [];
        parsed.chatHistory = parsed.chatHistory || [];
        parsed.chatOfferRound = Number.isInteger(parsed.chatOfferRound) ? parsed.chatOfferRound : null;
        parsed.chatSent = !!parsed.chatSent;
        parsed.missionAccessGranted = !!parsed.missionAccessGranted;
        parsed.missionAccessLabel = parsed.missionAccessLabel || '';
        parsed.currentMission = parsed.currentMission || null;
        if (parsed.currentMission) missionNormalizeMissionRecord(parsed.currentMission);
        return parsed;
      }catch(error){
        return missionBlankState(employee);
      }
    }

    function missionSaveState(){
      const employee = getStoredEmployee();
      if (employee && missionState){
        localStorage.setItem(missionStorageKey(employee), JSON.stringify(missionState));
      }
      missionUpdateStatus();
    }

    function missionEnsureState(){
      const employee = getStoredEmployee();
      if (!employee) return null;
      if (!missionState || missionState.accountId !== (employee.employeeId || employee.name)){
        missionState = missionLoadState(employee);
      }
      return missionState;
    }

    function missionEventLog(type, detail = {}){
      const state = missionEnsureState();
      const employee = getStoredEmployee();
      if (!state || !employee) return;
      const mission = state.currentMission;
      const row = {
        event_type: type,
        account_id: state.accountId,
        employee_name: state.employeeName,
        mission_id: mission ? mission.missionId : null,
        creature_name: mission ? mission.creatureName : null,
        mission_day: mission ? missionDay(mission) : null,
        points: mission ? mission.points : null,
        affection: mission ? mission.affection : null,
        local_date: missionToday(),
        session_id: missionSession(),
        user_agent: navigator.userAgent,
        detail: {
          ...detail,
          client_time: new Date().toISOString()
        }
      };

      if (supabaseClient){
        supabaseClient.from('voxtek_events').insert(row).then(({ error }) => {
          if (error) console.warn('Supabase log failed:', error);
        });
      }
    }

    function missionHandlePortalLogin(employee){
      missionState = missionLoadState(employee);
      missionEventLog('LOGIN', { source:'portal_login' });
      missionDailyLoginBonus();
      missionSaveState();
    }

    function missionDailyLoginBonus(){
      const state = missionEnsureState();
      if (!state) return;
      const todayKey = missionToday();
      if (!state.loginDates.includes(todayKey)) state.loginDates.push(todayKey);
      if (state.lastLoginDate !== todayKey){
        state.lastLoginDate = todayKey;
        const mission = state.currentMission;
        if (mission && mission.state !== 'dead' && mission.state !== 'completed'){
          mission.bonusDates = mission.bonusDates || [];
          if (!mission.bonusDates.includes(todayKey)){
            mission.points += MISSION_DAILY_POINT;
            mission.bonusDates.push(todayKey);
            missionEventLog('DAILY_LOGIN_BONUS', { points:MISSION_DAILY_POINT });
          }
        }
      }
    }

    function missionUpdateStatus(){
      const state = missionEnsureState();
      const point = state && state.currentMission ? state.currentMission.points : 0;
      const status = document.getElementById('missionChannelStatus');
      if (missionPointDisplay) missionPointDisplay.innerHTML = `POINT <b>${point}</b>`;
      const pointText = document.getElementById('missionPointText');
      const pointBar = document.getElementById('missionPointBar');
      if (pointText) pointText.textContent = `${point} POINT`;
      if (pointBar) pointBar.style.width = `${missionClamp(Math.min(point, 10) * 10, 0, 100)}%`;
      if (status){
        if (!state || !state.missionAccessGranted) status.textContent = 'LOCKED';
        else if (!state.currentMission) status.textContent = 'DIRECT LINE';
        else if (state.currentMission.state === 'dead') status.textContent = 'FAILED';
        else if (missionDay(state.currentMission) >= MISSION_FINAL_DAY) status.textContent = 'RETURN READY';
        else status.textContent = 'ACTIVE';
      }
    }

    function missionShowView(viewName){
      [missionGateView, missionChatView, missionSetupView, missionGameView, missionFinalView, missionDeadView].forEach(view => {
        if (view) view.classList.add('hidden');
      });
      const target = {
        gate: missionGateView,
        chat: missionChatView,
        setup: missionSetupView,
        game: missionGameView,
        final: missionFinalView,
        dead: missionDeadView
      }[viewName];
      if (target) target.classList.remove('hidden');
      missionUpdateStatus();
    }

    function missionScrollChat(){
      if (missionChatRoom) missionChatRoom.scrollTop = missionChatRoom.scrollHeight;
    }

    function missionAppendBubble(side, html){
      if (side === 'vox'){
        const row = document.createElement('div');
        row.className = 'mission-message-row vox-row';
        row.innerHTML = `
          <div class="mission-avatar">
            <img src="Vox.png" alt="VOX" onerror="assetFail(this)" loading="lazy" decoding="async">
            <div class="fallback">VOX</div>
          </div>
          <div class="mission-message-stack">
            <div class="mission-name">VOX</div>
            <div class="mission-bubble vox">${html}</div>
          </div>
        `;
        missionChatRoom.appendChild(row);
        missionScrollChat();
        return row;
      }
      const row = document.createElement('div');
      row.className = 'mission-message-row user-row';
      row.innerHTML = `<div class="mission-message-stack"><div class="mission-bubble user">${html}</div></div>`;
      missionChatRoom.appendChild(row);
      missionScrollChat();
      return row;
    }

    function missionAppendCard(html){
      const div = document.createElement('div');
      div.className = 'mission-card-message';
      div.innerHTML = html;
      missionChatRoom.appendChild(div);
      missionScrollChat();
      return div;
    }

    function missionQueueBubble(state, side, html){
      if (!state) return;
      state.chatHistory = state.chatHistory || [];
      state.chatHistory.push({ type:'bubble', side, html:String(html), at:new Date().toISOString() });
      if (state.chatHistory.length > 240) state.chatHistory = state.chatHistory.slice(-240);
    }

    function missionQueueCard(state, html){
      if (!state) return;
      state.chatHistory = state.chatHistory || [];
      state.chatHistory.push({ type:'card', html:String(html), at:new Date().toISOString() });
      if (state.chatHistory.length > 240) state.chatHistory = state.chatHistory.slice(-240);
    }

    function missionRenderChatHistory(){
      const state = missionEnsureState();
      const employee = getStoredEmployee();
      const displayDate = missionFormatDateKey(missionUnlockDate(employee));
      missionChatRoom.innerHTML = `<div class="mission-date">${displayDate}</div>`;
      (state.chatHistory || []).forEach(item => {
        if (item.type === 'card') missionAppendCard(item.html || '');
        else missionAppendBubble(item.side || 'vox', item.html || '');
      });
      missionScrollChat();
    }

    function missionOfferBubbleData(state){
      const count = state.completedMissions.length;
      if (count === 0){
        return [
          `축하하지, ${escapeHtml(state.employeeName)} 사원.<br>44일이나 버텼다는 건 최소한 접속 기록을 삭제할 정도로 무가치하진 않았다는 뜻이야.`,
          '그래서 새 임무를 하나 주지. 이 알을 맡아. 이름을 붙이고, 상태를 확인하고, 매일 관리해.',
          '10일째에 완전히 성장하면 11일째, 내가 다시 가져가지.'
        ];
      }
      if (count === 1){
        return [
          '지난번에도 같은 일을 성공했던가? 좋아. 그 기록은 아직 내 시스템에 남아 있어.',
          `이번에도 다시 믿어보지. 내 믿음을 깨지 않는 게 좋을 거야, ${escapeHtml(state.employeeName)} 사원.`
        ];
      }
      return [
        '흠. 그래. 또 같은 임무군.',
        '설명은 줄이지. 지난번처럼만 하도록 해. 내가 반복 업무를 싫어하는 만큼, 실패도 싫어한다는 것만 기억하고.'
      ];
    }

    function missionEnsureOfferMessages(state){
      state.chatHistory = state.chatHistory || [];
      const count = state.completedMissions.length;
      const expectedReply = count === 0 ? '임무 내용을 확인했습니다.' : '다시 임무를 받겠습니다.';

      if (state.chatHistory.length === 0 && state.chatSent){
        missionOfferBubbleData(state).forEach(text => missionQueueBubble(state, 'vox', text));
        missionQueueBubble(state, 'user', escapeHtml(expectedReply));
        missionQueueBubble(state, 'vox', '좋아. 말은 그럴듯하군. 이제 결과를 보여.');
        missionQueueCard(state, '<b>MISSION FILE READY</b><br>생명체 등록 권한이 열렸습니다. 미션 받기를 눌러 식별명을 등록하세요.');
        state.chatOfferRound = count;
        missionSaveState();
        return;
      }

      if (!state.currentMission && !state.chatSent && state.chatOfferRound !== count){
        missionOfferBubbleData(state).forEach(text => missionQueueBubble(state, 'vox', text));
        state.chatOfferRound = count;
        missionSaveState();
      }
    }

    function missionBackfillInitialChat(state){
      if (!state) return;
      state.chatHistory = state.chatHistory || [];
      const hasMissionIntro = state.chatHistory.some(item => {
        const html = String(item.html || '');
        return html.includes('MISSION FILE READY') || html.includes('이 알을 맡아') || html.includes('44일이나 버텼다는 건');
      });
      if (hasMissionIntro) return;

      const count = Number.isInteger(state.chatOfferRound) ? state.chatOfferRound : state.completedMissions.length;
      const expectedReply = count === 0 ? '임무 내용을 확인했습니다.' : '다시 임무를 받겠습니다.';
      const tempState = { ...state, completedMissions: new Array(Math.max(0, count)).fill({}) };
      const restored = [];

      missionOfferBubbleData(tempState).forEach(text => restored.push({ type:'bubble', side:'vox', html:String(text), at:new Date().toISOString(), restored:true }));
      restored.push({ type:'bubble', side:'user', html:escapeHtml(expectedReply), at:new Date().toISOString(), restored:true });
      restored.push({ type:'bubble', side:'vox', html:'좋아. 말은 그럴듯하군. 이제 결과를 보여.', at:new Date().toISOString(), restored:true });
      restored.push({ type:'card', html:'<b>MISSION FILE READY</b><br>생명체 등록 권한이 열렸습니다. 미션 받기를 눌러 식별명을 등록하세요.', at:new Date().toISOString(), restored:true });
      if (state.currentMission){
        restored.push({ type:'card', html:`<b>MISSION ACCEPTED</b><br>${escapeHtml(state.currentMission.creatureName || '생명체')} 등록이 완료되었습니다.`, at:new Date().toISOString(), restored:true });
      }

      state.chatHistory = restored.concat(state.chatHistory);
      state.chatOfferRound = count;
      state.chatSent = true;
      missionSaveState();
    }

    function missionEnsureActiveStatusMessage(state){
      const mission = state.currentMission;
      if (!mission || mission.state === 'completed') return;
      const currentDay = missionDay(mission);
      const stage = missionStage(mission);
      const statusKey = `active:${mission.missionId}:${missionToday()}:${currentDay}:${mission.state}:${mission.sick ? 'sick' : 'normal'}`;
      if (mission.lastChannelStatusKey === statusKey) return;

      missionQueueBubble(state, 'vox', `${escapeHtml(mission.creatureName)} 관리 기록은 계속 수집 중이야.<br>${currentDay}일차. ${escapeHtml(stage.label)}. 상태 확인을 게을리하지 마.`);
      if (mission.sick){
        missionQueueBubble(state, 'vox', '그리고 지금 상태가 정상은 아니군. 약부터 처리해. 방치 기록까지 내가 못 볼 거라고 생각하진 마.');
      } else if (mission.state === 'dead'){
        missionQueueBubble(state, 'vox', '관리 실패 기록이 올라왔군. 이건 더 이상 정상 임무로 분류되지 않겠지.');
      } else if (currentDay >= MISSION_FINAL_DAY){
        missionQueueBubble(state, 'vox', '회수 시간이 됐다. 결과 보고 화면으로 돌아와.');
      } else {
        missionQueueBubble(state, 'vox', '채널은 열어둘 테니, 필요하면 돌아와 확인해. 하지만 관리는 네가 해야 해.');
      }
      missionQueueCard(state, `<b>MISSION IN PROGRESS</b><br>현재 보유 포인트: ${mission.points} POINT<br>관리 화면으로 돌아가 임무를 계속 진행하세요.`);
      mission.lastChannelStatusKey = statusKey;
      missionSaveState();
    }

    function missionRenderGate(){
      const state = missionEnsureState();
      if (!state) return;
      missionShowView('gate');
      missionUpdateGateInfo();
      if (missionPasswordInput) missionPasswordInput.value = '';
      if (missionPasswordStatus) missionPasswordStatus.textContent = '';
      setTimeout(() => missionPasswordInput && missionPasswordInput.focus(), 60);
    }

    function missionVerifyPassword(){
      const state = missionEnsureState();
      const employee = getStoredEmployee();
      if (!state || !employee) return;
      const value = missionPasswordInput ? missionPasswordInput.value.trim() : '';
      const serviceDays = missionServiceDays(employee);
      const unlockDate = missionFormatDateKey(missionUnlockDate(employee));
      if (!value){
        if (missionPasswordStatus) missionPasswordStatus.textContent = '패스워드가 비어 있습니다.';
        return;
      }
      if (value !== MISSION_COMMON_PASSWORD){
        if (missionPasswordStatus) missionPasswordStatus.textContent = 'ACCESS DENIED. 지급된 공통 패스워드를 확인하세요.';
        missionEventLog('CARE_ACTION', { action:'mission_access_denied_password', enteredLength:value.length, serviceDays, requiredDay:MISSION_UNLOCK_DAY });
        return;
      }
      if (serviceDays < MISSION_UNLOCK_DAY){
        if (missionPasswordStatus) missionPasswordStatus.textContent = `ACCESS DENIED. 현재 근속 ${serviceDays}일차입니다. MISSION 채널은 ${MISSION_UNLOCK_DAY}일차부터 활성화됩니다.`;
        missionEventLog('CARE_ACTION', { action:'mission_access_denied_day', serviceDays, requiredDay:MISSION_UNLOCK_DAY, unlockDate });
        missionUpdateGateInfo();
        return;
      }
      state.missionAccessGranted = true;
      state.missionAccessLabel = 'COMMON 44-DAY ACCESS';
      missionSaveState();
      missionEventLog('CARE_ACTION', { action:'mission_access_granted', label:state.missionAccessLabel, unlockDay:MISSION_UNLOCK_DAY, serviceDays });
      missionRenderChat();
    }

    function missionRenderChat(){
      const state = missionEnsureState();
      if (!state) return;
      missionShowView('chat');
      const returnCareBtn = document.getElementById('missionReturnCareBtn');
      const activeMission = state.currentMission && state.currentMission.state !== 'completed';

      if (activeMission){
        missionBackfillInitialChat(state);
        missionEnsureActiveStatusMessage(state);
      } else {
        missionEnsureOfferMessages(state);
      }

      missionRenderChatHistory();

      if (activeMission){
        missionReplyInput.value = '현재 임무를 관리하겠습니다.';
        missionReplyInput.disabled = true;
        missionSendBtn.disabled = true;
        missionAcceptBtn.classList.add('hidden');
        if (returnCareBtn) returnCareBtn.classList.remove('hidden');
        return;
      }

      if (returnCareBtn) returnCareBtn.classList.add('hidden');
      missionReplyInput.disabled = false;
      const count = state.completedMissions.length;
      missionReplyInput.value = count === 0 ? '임무 내용을 확인했습니다.' : '다시 임무를 받겠습니다.';
      missionSendBtn.disabled = !!state.chatSent;
      missionAcceptBtn.classList.toggle('hidden', !state.chatSent);
      missionScrollChat();
    }

    function ensureImageSrcById(id, fallbackSrc = ''){
      const image = document.getElementById(id);
      if (!image) return;
      const nextSrc = image.getAttribute('data-src') || fallbackSrc;
      if (nextSrc && !image.getAttribute('src')){
        image.setAttribute('src', nextSrc);
      }
    }

    function missionSendReply(){
      const state = missionEnsureState();
      if (!state || state.chatSent) return;
      const message = missionReplyInput.value || '임무 내용을 확인했습니다.';
      state.chatSent = true;
      missionQueueBubble(state, 'user', escapeHtml(message));
      missionEventLog('CARE_ACTION', { action:'mission_chat_send', message });
      missionSaveState();
      missionRenderChat();
      setTimeout(() => {
        const latestState = missionEnsureState();
        missionQueueBubble(latestState, 'vox', '좋아. 말은 그럴듯하군. 이제 결과를 보여.');
        missionQueueCard(latestState, '<b>MISSION FILE READY</b><br>생명체 등록 권한이 열렸습니다. 미션 받기를 눌러 식별명을 등록하세요.');
        missionSaveState();
        missionRenderChat();
        missionAcceptBtn.classList.remove('hidden');
      }, 480);
    }

    function missionAccept(){
      const state = missionEnsureState();
      if (state){
        missionQueueCard(state, '<b>MISSION ACCEPTED</b><br>생명체 등록 화면으로 이동합니다.');
        missionSaveState();
      }
      missionEventLog('CARE_ACTION', { action:'mission_accept_clicked' });
      missionCreatureName.value = '';
      ensureImageSrcById('missionSetupEggImg', 'egg.png');
      missionShowView('setup');
      setTimeout(() => missionCreatureName.focus(), 60);
    }

    function missionNewMission(creatureName){
      const todayKey = missionToday();
      return {
        missionId: missionUid(),
        creatureName,
        startedAt: todayKey,
        state:'active',
        points: MISSION_DAILY_POINT,
        bonusDates:[todayKey],
        affection:0,
        careDates:[],
        feedDates:[],
        bathDates:[],
        careLog:[],
        lastCareDate:'',
        lastFeedDate:'',
        lastBathDate:'',
        sick:false,
        sickSince:'',
        deathDate:'',
        lastDecayCheckDate: todayKey,
        lastAction:'',
        currentSpeech:'🥚',
        creatureType:'VOX',
        creatureLabel:'복냥이',
        lastActionDate:'',
        stage1NoticeShown:false,
        finalLogged:false,
        ending:null,
        createdAt:new Date().toISOString()
      };
    }

    function missionStart(){
      const state = missionEnsureState();
      if (!state) return;
      const name = missionCreatureName.value.trim();
      if (!name){
        missionToast('이름을 붙여.');
        missionCreatureName.focus();
        return;
      }
      state.currentMission = missionNewMission(name);
      state.chatSent = false;
      missionQueueCard(state, `<b>CREATURE REGISTERED</b><br>${escapeHtml(name)} 관리 파일이 생성되었습니다.`);
      missionQueueBubble(state, 'vox', `좋아. ${escapeHtml(name)} 관리 기록을 시작하지.`);
      missionSaveState();
      missionEventLog('MISSION_STARTED', { creatureName:name, startPoint:MISSION_DAILY_POINT });
      missionToast('임무 시작. 로그인 보너스 3포인트 지급.');
      missionRenderGame();
    }

    function missionDay(mission){
      return Math.max(1, missionDiffDays(mission.startedAt, missionToday()) + 1);
    }

    function missionStage(mission){
      const value = missionDay(mission);
      if (value >= 10) return { lv:3, label:'성장 3단계' };
      if (value >= 5) return { lv:2, label:'성장 2단계' };
      if (value >= 2) return { lv:1, label:'성장 1단계' };
      return { lv:0, label:'알 상태' };
    }

    function missionStageAt(mission, dateKey){
      const value = Math.max(1, missionDiffDays(mission.startedAt, dateKey) + 1);
      if (value >= 10) return 3;
      if (value >= 5) return 2;
      if (value >= 2) return 1;
      return 0;
    }

    function missionStage1Start(mission){
      return missionAddDays(mission.startedAt, 1);
    }

    function missionCareDays(mission){
      return missionRequiredCareDates(mission).length;
    }

    function missionEffectiveRequiredDate(value, stageStart){
      return value && value >= stageStart ? value : stageStart;
    }

    function missionRandomCreatureSeed(){
      return MISSION_CREATURE_POOL[0];
    }

    function missionEnsureCreatureDraw(mission){
      if (!mission) return null;
      if (!mission.creatureType){
        mission.creatureType = 'VOX';
        mission.creatureLabel = '복냥이';
      }
      return MISSION_CREATURE_POOL[0];
    }

    function missionStageToken(stageLevel){
      if (stageLevel >= 3) return 'Third';
      if (stageLevel >= 2) return 'Second';
      return 'First';
    }

    function missionFeedVariantForToday(mission){
      const todayKey = missionToday();
      const count = (mission.careLog || []).filter(log => log.action === 'feed' && log.date === todayKey).length;
      return Math.min(3, Math.max(1, count || 1));
    }

    function missionCreatureAsset(mission, stageLevel, variant = ''){
      if (stageLevel < 1){
        if (variant === 'bath') return 'egg2.png';
        if (variant === 'heart') return 'egg3.png';
        return 'egg.png';
      }
      const stageToken = missionStageToken(stageLevel);
      const assetMap = {
        First: {
          default: 'First.png',
          sick: 'First2.png',
          bath: 'First4.png',
          feed1: 'First3-1.png',
          feed2: 'First3-2.png',
          feed3: 'First3-3.png'
        },
        Second: {
          default: 'Second.png',
          sick: 'Second2.png',
          dead: 'Second3.png',
          happy: 'Second4.png',
          bath: 'Second6.png',
          heart: 'Second7.png',
          feed1: 'Second5-1.png',
          feed2: 'Second5-2.png',
          feed3: 'Second5-3.png'
        },
        Third: {
          default: 'Third.png',
          sick: 'Third2.png',
          dead: 'Third3.png',
          happy: 'Third4.png',
          bath: 'Third6.png',
          heart: 'Third7.png',
          feed1: 'Third5-1.png',
          feed2: 'Third5-2.png',
          feed3: 'Third5-3.png'
        }
      };
      const stageAssets = assetMap[stageToken] || assetMap.First;
      return stageAssets[variant] || stageAssets.default;
    }


    let missionFeedAnimationKey = '';
    let missionFeedAnimationTimers = [];

    function missionClearFeedAnimation(){
      missionFeedAnimationTimers.forEach(timer => clearTimeout(timer));
      missionFeedAnimationTimers = [];
    }

    function missionFeedAnimationFrames(mission){
      const stage = missionStage(mission);
      if (stage.lv < 1) return [];
      return [
        missionCreatureAsset(mission, stage.lv, 'feed1'),
        missionCreatureAsset(mission, stage.lv, 'feed2'),
        missionCreatureAsset(mission, stage.lv, 'feed3')
      ];
    }

    function missionRunFeedAnimation(mission){
      if (!mission || mission.lastAction !== 'feed' || mission.lastActionDate !== missionToday()) return;
      const frames = missionFeedAnimationFrames(mission);
      if (!frames.length) return;
      const actionCount = (mission.careLog || []).length;
      const key = `${mission.missionId}:${actionCount}:${mission.lastActionDate}:feed`;
      if (missionFeedAnimationKey === key) return;
      missionFeedAnimationKey = key;
      missionClearFeedAnimation();
      const img = document.getElementById('missionCreatureImg');
      const fb = document.getElementById('missionCreatureFallback');
      frames.forEach((src, index) => {
        const timer = setTimeout(() => {
          if (!img) return;
          img.style.display = 'block';
          img.src = src;
          if (fb){
            fb.textContent = '';
            fb.style.display = 'none';
          }
        }, index * 500);
        missionFeedAnimationTimers.push(timer);
      });
    }

    function missionApplyTimeEffects(){
      const state = missionEnsureState();
      const mission = state && state.currentMission;
      if (!mission || mission.state === 'dead' || mission.state === 'completed') return;
      missionNormalizeMissionRecord(mission);
      const todayKey = missionToday();
      const stage = missionStage(mission);
      if (stage.lv >= 1){
        const requiredCareDates = missionRequiredCareDates(mission);
        let current = mission.lastDecayCheckDate || todayKey;
        while (current < todayKey){
          current = missionAddDays(current, 1);
          if (current >= todayKey) break;
          if (missionStageAt(mission, current) >= 1 && !requiredCareDates.includes(current)){
            mission.affection = Math.max(0, (mission.affection || 0) - 1);
          }
        }
        mission.lastDecayCheckDate = todayKey;

        const stageStart = missionStage1Start(mission);
        const feedBase = missionEffectiveRequiredDate(mission.lastFeedDate, stageStart);
        const bathBase = missionEffectiveRequiredDate(mission.lastBathDate, stageStart);
        const feedGap = Math.max(0, missionDiffDays(feedBase, todayKey));
        const bathGap = Math.max(0, missionDiffDays(bathBase, todayKey));
        const maxGap = Math.max(feedGap, bathGap);
        const neglectDetail = { feedGap, bathGap, maxGap, requiredCare:'feed+bath' };

        if (maxGap >= MISSION_DEATH_AFTER_DAYS){
          mission.state = 'dead';
          mission.sick = true;
          mission.deathDate = todayKey;
          if (!mission.deathLogged){
            mission.deathLogged = true;
            missionEventLog('CREATURE_DEAD', { daysWithoutCare:maxGap, ...neglectDetail });
          }
        } else if (maxGap >= MISSION_SICK_AFTER_DAYS && !mission.sick){
          mission.sick = true;
          mission.sickSince = todayKey;
          missionEventLog('CREATURE_SICK', { daysWithoutCare:maxGap, ...neglectDetail });
        }
      }
      if (stage.lv >= 1 && !mission.creatureType){
        const picked = missionEnsureCreatureDraw(mission);
        missionEventLog('CREATURE_DRAWN', { day:missionDay(mission), creatureType:picked ? picked.key : null, creatureLabel:picked ? picked.label : null });
      }
      if (stage.lv >= 1 && !mission.stage1NoticeShown){
        mission.stage1NoticeShown = true;
        missionEventLog('AFFECTION_SYSTEM_UNLOCKED', { day:missionDay(mission) });
      }
      missionSaveState();
    }

    function missionImageFor(mission){
      const stage = missionStage(mission);
      const affectionate = (mission.affection || 0) >= 50;
      if (stage.lv < 1){
        if (mission.lastActionDate === missionToday()){
          if (mission.lastAction === 'bath') return missionCreatureAsset(mission, 0, 'bath');
          if (mission.lastAction === 'pet' || mission.lastAction === 'talk') return missionCreatureAsset(mission, 0, 'heart');
        }
        return missionCreatureAsset(mission, 0);
      }
      missionEnsureCreatureDraw(mission);
      if (mission.state === 'dead') return missionCreatureAsset(mission, stage.lv, 'dead');
      if (mission.sick) return missionCreatureAsset(mission, stage.lv, 'sick');
      if (mission.lastActionDate === missionToday()){
        if (mission.lastAction === 'feed') return missionCreatureAsset(mission, stage.lv, 'feed1');
        if (mission.lastAction === 'bath') return missionCreatureAsset(mission, stage.lv, 'bath');
        if (mission.lastAction === 'pet' || mission.lastAction === 'talk'){
          if (stage.lv >= 2) return missionCreatureAsset(mission, stage.lv, 'heart');
          return missionCreatureAsset(mission, stage.lv, 'default');
        }
      }
      if (affectionate && stage.lv >= 2) return missionCreatureAsset(mission, stage.lv, 'happy');
      return missionCreatureAsset(mission, stage.lv, 'default');
    }

    function missionSafeEmoji(value){
      const text = String(value || '').trim();
      if (!text) return '';
      return /[A-Za-z가-힣]/.test(text) ? '' : text;
    }

    function missionSpeechFor(mission){
      const stage = missionStage(mission);
      const stored = missionSafeEmoji(mission.currentSpeech);
      if (mission.state === 'dead') return '…';
      if (mission.sick) return stored || '🤒';
      if (stage.lv === 0) return stored || ['🥚','✨','💤','〰️'][missionDay(mission) % 4];
      if (stage.lv === 1) return stored || (mission.affection >= 50 ? '💖' : ['😊','🥺','😴','✨','🫧','🍽️'][missionDay(mission) % 6]);
      if (stage.lv >= 2) return stored || (mission.affection >= 50 ? '💖' : ['😊','✨','🫧','🍽️','💤','〰️'][missionDay(mission) % 6]);
      return '…';
    }

    function missionRenderGame(){
      const state = missionEnsureState();
      const mission = state && state.currentMission;
      if (!mission){
        missionRenderChat();
        return;
      }
      missionApplyTimeEffects();
      if (mission.state === 'dead'){
        missionShowView('dead');
        return;
      }
      if (missionDay(mission) >= MISSION_FINAL_DAY){
        missionRenderFinal();
        return;
      }
      missionShowView('game');
      const stage = missionStage(mission);
      const dayValue = missionDay(mission);
      const growth = missionClamp(Math.round(Math.min(dayValue, MISSION_CARE_TOTAL) / MISSION_CARE_TOTAL * 100), 0, 100);
      const affection = missionClamp(mission.affection || 0, 0, 100);
      const careCount = missionCareDays(mission);
      const image = missionImageFor(mission);
      document.getElementById('missionCreatureTitle').textContent = mission.creatureName;
      document.getElementById('missionSpeech').innerHTML = missionSpeechFor(mission);
      const img = document.getElementById('missionCreatureImg');
      const fb = document.getElementById('missionCreatureFallback');
      img.style.display = 'block';
      img.src = image;
      fb.textContent = '';
      fb.style.display = 'none';
      document.getElementById('missionStageChip').querySelector('b').textContent = stage.label;
      document.getElementById('missionStageChip').className = 'mission-stat-chip ' + (stage.lv >= 3 ? 'good' : '');
      document.getElementById('missionHealthChip').querySelector('b').textContent = mission.sick ? 'SICK' : 'NORMAL';
      document.getElementById('missionHealthChip').className = 'mission-stat-chip ' + (mission.sick ? 'bad' : 'good');
      document.getElementById('missionDayChip').querySelector('b').textContent = pad2(dayValue);
      const careChip = document.getElementById('missionCareChip');
      if (careChip) careChip.querySelector('b').textContent = `${pad2(careCount)}/${MISSION_CARE_TOTAL}`;
      document.getElementById('missionGrowthText').textContent = `${growth}%`;
      document.getElementById('missionGrowthBar').style.width = `${growth}%`;
      document.getElementById('missionAffText').textContent = stage.lv >= 1 ? `${affection}/100` : '성장 1단계부터';
      document.getElementById('missionAffBar').style.width = `${stage.lv >= 1 ? affection : 0}%`;
      missionUpdateStatus();

      const enough1 = mission.points >= 1;
      const enough3 = mission.points >= 3;
      const dead = mission.state === 'dead';
      document.getElementById('missionFeedBtn').disabled = dead || stage.lv < 1 || !enough1 || mission.sick;
      document.getElementById('missionBathBtn').disabled = dead || !enough1 || mission.sick;
      document.getElementById('missionPetBtn').disabled = dead || !enough1 || mission.sick;
      const talkActionBtn = document.getElementById('missionTalkBtn');
      if (talkActionBtn) talkActionBtn.disabled = dead || !enough1 || mission.sick;
      document.getElementById('missionMedicineBtn').disabled = dead || !mission.sick || !enough3;
      const notice = document.getElementById('missionStageNotice');
      if (notice) notice.textContent = mission.sick ? '상태 이상 감지됨.' : '';
      missionRunFeedAnimation(mission);
      missionSaveState();
    }

    function missionSpend(point){
      const state = missionEnsureState();
      const mission = state.currentMission;
      if (mission.points < point){
        missionToast('포인트가 부족해.');
        return false;
      }
      mission.points -= point;
      return true;
    }

    function missionMarkCare(action, options = {}){
      const state = missionEnsureState();
      const mission = state.currentMission;
      const todayKey = missionToday();
      mission.feedDates = missionUniqueDateList(mission.feedDates || []);
      mission.bathDates = missionUniqueDateList(mission.bathDates || []);

      if (action === 'feed'){
        if (!mission.feedDates.includes(todayKey)) mission.feedDates.push(todayKey);
        mission.lastFeedDate = todayKey;
      }
      if (action === 'bath'){
        if (!mission.bathDates.includes(todayKey)) mission.bathDates.push(todayKey);
        mission.lastBathDate = todayKey;
      }
      if (options.resetNeglect){
        mission.lastFeedDate = todayKey;
        mission.lastBathDate = todayKey;
      }

      mission.feedDates = missionUniqueDateList(mission.feedDates);
      mission.bathDates = missionUniqueDateList(mission.bathDates);
      const requiredCompleteToday = mission.feedDates.includes(todayKey) && mission.bathDates.includes(todayKey);
      mission.careDates = missionRequiredCareDates(mission);
      if (requiredCompleteToday) mission.lastCareDate = todayKey;

      const countsAsCare = (action === 'feed' || action === 'bath') && requiredCompleteToday;
      mission.affection = missionClamp((mission.affection || 0) + (options.aff || 0), 0, 100);
      mission.lastAction = action;
      mission.lastActionDate = todayKey;
      if (options.say) mission.currentSpeech = options.say;
      mission.careLog.push({ action, at:new Date().toISOString(), date:todayKey, affection:mission.affection, points:mission.points, countsAsCare, requiredCareComplete:requiredCompleteToday });
      missionEventLog('CARE_ACTION', { action, affectionUp:options.aff || 0, countsAsCare, requiredCareComplete:requiredCompleteToday });
      missionSaveState();
      missionRenderGame();
    }

    function missionRandomAffection(){
      return Math.floor(Math.random() * 8) + 1;
    }

    function missionRandomEmoji(pool){
      return pool[Math.floor(Math.random() * pool.length)];
    }

    function missionTalkCare(){
      const state = missionEnsureState();
      const mission = state && state.currentMission;
      if (!mission || mission.state === 'dead') return;
      const stage = missionStage(mission);
      if (mission.sick) return missionToast('아플 때는 먼저 약을 줘야 해.');
      if (!missionSpend(1)) return;
      const todayKey = missionToday();
      const gain = missionRandomAffection();
      mission.affection = missionClamp((mission.affection || 0) + gain, 0, 100);
      mission.lastAction = 'talk';
      mission.lastActionDate = todayKey;
      mission.currentSpeech = missionRandomEmoji(mission.affection >= 50 ? ['💖','✨','😊','🌟'] : ['💬','✨','😊','❔','〰️']);
      mission.careLog.push({ action:'talk', at:new Date().toISOString(), date:todayKey, affection:mission.affection, points:mission.points, affectionUp:gain, countsAsCare:false });
      missionEventLog('CARE_ACTION', { action:'talk', affectionUp:gain, countsAsCare:false });
      missionSaveState();
      missionToast(`대화 완료. 애정도 +${gain}`);
      missionRenderGame();
    }

    function missionCare(action){
      const state = missionEnsureState();
      const mission = state && state.currentMission;
      if (!mission || mission.state === 'dead') return;
      const stage = missionStage(mission);
      if (mission.sick && action !== 'medicine'){
        missionToast('아플 때는 먼저 약을 줘야 해.');
        return;
      }
      if (action === 'feed'){
        if (stage.lv < 1) return missionToast('밥은 성장 1단계부터 가능해.');
        if (missionSpend(1)) missionMarkCare('feed', { aff:3, say:'🍽️' });
      }
      if (action === 'bath'){
        if (missionSpend(1)) missionMarkCare('bath', { aff:3, say:'🫧' });
      }
      if (action === 'pet'){
        if (missionSpend(1)) missionMarkCare('pet', { aff:3, say:'💗', countsAsCare:false });
      }
      if (action === 'talk'){
        missionTalkCare();
      }
      if (action === 'medicine'){
        if (!mission.sick) return missionToast('지금은 약이 필요 없어.');
        if (missionSpend(3)){
          mission.sick = false;
          mission.sickSince = '';
          mission.lastAction = 'medicine';
          mission.lastActionDate = missionToday();
          missionMarkCare('medicine', { aff:5, say:'🤍', resetNeglect:true });
          missionEventLog('MEDICINE_GIVEN');
        }
      }
    }

    function missionRenderFinal(){
      const state = missionEnsureState();
      const mission = state.currentMission;
      const careCount = missionCareDays(mission);
      const ending = careCount >= 5 ? 'happy' : careCount >= 3 ? 'normal' : 'bad';
      const img = { happy:MISSION_ASSET.happy, normal:MISSION_ASSET.normal, bad:MISSION_ASSET.bad }[ending];
      const title = { happy:'HAPPY ENDING', normal:'NORMAL ENDING', bad:'BAD ENDING' }[ending];
      missionShowView('final');
      document.getElementById('missionFinalText').innerHTML = `
        <p>시간 됐군. ${escapeHtml(mission.creatureName)}은 내가 회수한다.</p>
        <p>기록은 확인했다. 결과는 누적된 관리 수치대로 분류하지.</p>
        <p>${ending === 'happy' ? '좋아. 이 정도면 인정하지. 결과물도, 관리 기록도, 사원으로서의 끈기도 나쁘지 않았어.' : ending === 'normal' ? '완벽하진 않지만, 폐기할 정도는 아니야. 다음번엔 더 나은 수치를 보여.' : '완수라고 부르기엔 민망한 결과지만, 어쨌든 끝까지 도달은 했군.'}</p>
        <p>임무 보고 종료. ${title}.</p>
      `;
      const endingImg = document.getElementById('missionEndingImg');
      const endingFb = document.getElementById('missionEndingFallback');
      endingImg.style.display = 'block';
      endingImg.src = img;
      endingFb.textContent = '';
      endingFb.style.display = 'none';
      document.getElementById('missionEndingCaption').textContent = ending === 'happy' ? '첫 임무 완수를 축하합니다. 복스테크는 해당 사원을 “유지 가치 있음”으로 재분류했습니다.' : ending === 'normal' ? '첫 임무는 완료되었습니다. 결과는 안정권이나, 복스테크 기준으로는 개선 여지가 있습니다.' : '임무는 끝났습니다. 다만 결과를 자랑할 생각이라면 그 판단력부터 재검토하는 편이 좋겠습니다.';
      if (!mission.finalLogged){
        mission.finalLogged = true;
        mission.ending = ending;
        missionEventLog('MISSION_READY_TO_RETURN', { ending, careDays:careCount });
        missionSaveState();
      }
    }

    function missionEndingImage(ending){
      return { happy:MISSION_ASSET.happy, normal:MISSION_ASSET.normal, bad:MISSION_ASSET.bad }[ending] || MISSION_ASSET.normal;
    }

    function missionEndingLabel(ending){
      return { happy:'HAPPY ENDING', normal:'NORMAL ENDING', bad:'BAD ENDING' }[ending] || 'UNKNOWN ENDING';
    }

    function missionArchiveDateLabel(value){
      if (!value) return '-';
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return String(value).slice(0, 10).replaceAll('-', '.');
      return `${d.getFullYear()}.${pad2(d.getMonth() + 1)}.${pad2(d.getDate())}`;
    }

    function missionArchiveNumber(index){
      return String(index + 1).padStart(3, '0');
    }

    function missionRenderArchive(selectedIndex = null){
      const state = missionEnsureState();
      const records = state && Array.isArray(state.completedMissions) ? state.completedMissions : [];
      if (!missionArchiveList || !missionArchiveImage || !missionArchiveInfo) return;
      missionArchiveList.innerHTML = '';

      if (!records.length){
        missionArchiveList.innerHTML = '<div class="mission-archive-empty">완료된 임무 기록이 없습니다.<br>첫 회수 보고가 끝나면 여기에 001번부터 저장됩니다.</div>';
        missionArchiveImage.innerHTML = '<div class="mission-archive-empty">표시할 엔딩 일러스트가 없습니다.</div>';
        missionArchiveInfo.innerHTML = '아직 완료된 임무가 없습니다.';
        return;
      }

      records.forEach((record, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'mission-archive-item';
        button.dataset.archiveIndex = String(index);
        button.innerHTML = `
          <span class="mission-archive-no">${missionArchiveNumber(index)}</span>
          <span class="mission-archive-name">${escapeHtml(record.creatureName || '이름 없음')}</span>
          <span class="mission-archive-meta">${missionEndingLabel(record.ending)} · ${missionArchiveDateLabel(record.completedAt)}</span>
        `;
        button.addEventListener('click', () => missionSelectArchive(index));
        missionArchiveList.appendChild(button);
      });

      const startIndex = selectedIndex === null ? records.length - 1 : missionClamp(selectedIndex, 0, records.length - 1);
      missionSelectArchive(startIndex);
    }

    function missionSelectArchive(index){
      const state = missionEnsureState();
      const records = state && Array.isArray(state.completedMissions) ? state.completedMissions : [];
      const record = records[index];
      if (!record || !missionArchiveImage || !missionArchiveInfo) return;

      missionArchiveList.querySelectorAll('.mission-archive-item').forEach(item => {
        item.classList.toggle('active', Number(item.dataset.archiveIndex) === index);
      });

      const image = record.endingImage || missionEndingImage(record.ending);
      missionArchiveImage.innerHTML = `
        <img src="${escapeHtml(image)}" alt="${escapeHtml(record.creatureName || '완료 기록')} 엔딩 일러스트" onerror="assetFail(this)" loading="lazy" decoding="async">
        <div class="fallback"></div>
      `;
      missionArchiveInfo.innerHTML = `
        <b>${missionArchiveNumber(index)} ${escapeHtml(record.creatureName || '이름 없음')}</b><br>
        결과: ${missionEndingLabel(record.ending)}<br>
        관리 기록: ${Number(record.careDays || 0)} / ${MISSION_CARE_TOTAL}일<br>
        최종 애정도: ${Number(record.affection || 0)} / 100<br>
        회수일: ${missionArchiveDateLabel(record.completedAt)}
      `;
    }

    function missionCompleteAndNew(){
      const state = missionEnsureState();
      const mission = state.currentMission;
      if (!mission) return;
      const careCount = missionCareDays(mission);
      const ending = mission.ending || (careCount >= 5 ? 'happy' : careCount >= 3 ? 'normal' : 'bad');
      const employee = getStoredEmployee();
      const dept = getDepartmentInfo(employee);
      const role = employee ? normalizeRole(employee.role, employee.badge) : null;
      const team = role ? (role.team || role.employment || '') : '';
      const grade = role ? (role.grade || role.position || '') : '';
      mission.state = 'completed';
      mission.completedAt = new Date().toISOString();
      mission.ending = ending;
      mission.careDays = careCount;
      state.completedMissions.push({ missionId:mission.missionId, creatureName:mission.creatureName, creatureType:mission.creatureType || '', creatureLabel:mission.creatureLabel || '', startedAt:mission.startedAt, completedAt:mission.completedAt, ending, endingImage:missionEndingImage(ending), careDays:careCount, affection:mission.affection, department:dept.name, departmentLine:dept.line, team, grade, position:grade });
      missionQueueCard(state, `<b>MISSION ARCHIVED</b><br>${escapeHtml(mission.creatureName)} 회수 기록이 저장되었습니다.`);
      state.currentMission = null;
      state.chatSent = false;
      missionEventLog('MISSION_COMPLETED_AND_RETURNED', { ending, careDays:careCount, department:dept.name, department_line:dept.line, team, grade, position:grade });
      missionSaveState();
      missionRenderChat();
    }

    function missionReset(){
      const state = missionEnsureState();
      if (!state || !state.currentMission) return;
      missionEventLog('MISSION_RESET', { oldMissionId:state.currentMission.missionId, creatureName:state.currentMission.creatureName });
      missionQueueCard(state, `<b>MISSION RESET</b><br>${escapeHtml(state.currentMission.creatureName)} 관리 기록이 리셋되었습니다.`);
      state.currentMission = null;
      state.chatSent = false;
      missionSaveState();
      missionRenderChat();
    }

    function missionSubmitFeedback(){
      const state = missionEnsureState();
      const text = document.getElementById('missionFeedback').value.trim();
      if (!text){
        missionToast('내용이 비어 있어.');
        return;
      }
      const mission = state.currentMission;
      state.feedback.push({ text, at:new Date().toISOString(), employeeName:state.employeeName, missionId:mission ? mission.missionId : null, creatureName:mission ? mission.creatureName : null });
      missionEventLog('FEEDBACK_SUBMITTED', { text });
      document.getElementById('missionFeedback').value = '';
      missionSaveState();
      missionToast('의견 기록 완료.');
    }

    function missionToast(message){
      loginStatus.textContent = '';
      const old = document.getElementById('missionToast');
      if (old) old.remove();
      const toast = document.createElement('div');
      toast.id = 'missionToast';
      toast.textContent = message;
      toast.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:120;border:1px solid rgba(124,205,255,.26);border-radius:999px;padding:11px 15px;background:rgba(5,10,18,.96);box-shadow:0 12px 34px rgba(0,0,0,.42);font-size:14px;color:#e9f7ff;';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1600);
    }

    function adminObservationKey(profile){
      return `voxtek_admin_observation_${profile.key}_v1`;
    }

    function renderAdminMission(){
      const employee = getActiveEmployee();
      const profile = isAdminEmployee(employee) ? getAdminProfile(employee.adminKey) : null;
      if (!profile || !adminMissionShell) return;
      setMissionShellMode(true);
      if (normalMissionShell) normalMissionShell.classList.add('hidden');
      adminMissionShell.classList.remove('hidden');
      adminMissionShell.innerHTML = `
        <section class="admin-mission-panel">
          <div class="admin-mission-head">
            <strong>MISSION REPORT ARCHIVE</strong>
            <span class="admin-mission-status">${escapeHtml(profile.line)}</span>
          </div>
          <div class="admin-mission-body admin-report-body">
            <article class="admin-console-card">
              <h3>${escapeHtml(profile.name)} 관리자 보고 채널</h3>
              <p>직원들의 임무 완료 기록을 확인하는 대표 전용 보고서입니다. 소속 구분 없이 전체 기록을 불러오며, 직원명, 소속, 생명체 이름, 엔딩 결과를 이 창구에서 검토합니다.</p>
              <div class="admin-action-row">
                <button id="adminMissionRefresh" class="mission-btn primary" type="button">보고서 새로고침</button>
              </div>
              <p class="admin-mode-note">조회 가능한 기록이 없으면 완료 보고서가 아직 접수되지 않은 상태로 표시됩니다.</p>
            </article>
            <article class="admin-console-card admin-report-list-card">
              <h3>임무 완료 보고서</h3>
              <div id="adminMissionReportList" class="admin-report-list">
                <div class="admin-mode-note">보고서를 불러오는 중입니다.</div>
              </div>
            </article>
          </div>
        </section>
      `;
      const refreshBtn = document.getElementById('adminMissionRefresh');
      if (refreshBtn) refreshBtn.addEventListener('click', () => loadAdminMissionReports(profile));
      loadAdminMissionReports(profile);
    }

    async function loadAdminMissionReports(profile){
      const mount = document.getElementById('adminMissionReportList');
      if (!mount) return;
      mount.innerHTML = '<div class="admin-mode-note">보고서를 불러오는 중입니다.</div>';
      if (!supabaseClient){
        mount.innerHTML = '<div class="admin-report-empty">보고서 조회 모듈이 준비되지 않았습니다.</div>';
        return;
      }
      try{
        let { data, error } = await supabaseClient
          .from('admin_mission_reports')
          .select('*')
          .order('created_at', { ascending:false })
          .limit(50);

        if (error){
          console.warn('Mission report view load failed. Trying raw event fallback:', error);
          const fallback = await supabaseClient
            .from('voxtek_events')
            .select('created_at, employee_name, creature_name, detail')
            .eq('event_type', 'MISSION_COMPLETED_AND_RETURNED')
            .order('created_at', { ascending:false })
            .limit(50);
          data = fallback.data;
          error = fallback.error;
        }

        if (error) throw error;
        renderAdminMissionReports(data || []);
      }catch(error){
        console.warn('Mission report load failed:', error);
        mount.innerHTML = '<div class="admin-report-empty">보고서 조회에 실패했습니다. 보고서 조회용 프로그램 설정을 확인하십시오.</div>';
      }
    }

    function renderAdminMissionReports(records){
      const mount = document.getElementById('adminMissionReportList');
      if (!mount) return;
      if (!records.length){
        mount.innerHTML = `
          <div class="admin-report-empty">
            아직 접수된 임무 완료 보고서가 없습니다.<br>
            표시 형식: 번호 001 · 직원 이름 · 소속 · 생명체 이름 · 사진
          </div>
        `;
        return;
      }
      mount.innerHTML = records.map((row, index) => {
        const detail = row && typeof row.detail === 'object' && row.detail ? row.detail : {};
        const ending = row.ending || detail.ending || detail.result || '-';
        const image = row.ending_image || detail.endingImage || missionEndingImage(ending);
        const careDays = row.care_days ?? detail.careDays ?? detail.care_days ?? '-';
        const department = row.department || detail.department || detail.department_name || '-';
        const created = row.created_at ? formatDate(row.created_at) : '-';
        return `
          <article class="admin-report-card">
            <div class="admin-report-no">${pad2(index + 1).padStart(3, '0')}</div>
            <div class="admin-report-main">
              <dl>
                <dt>직원 이름</dt><dd>${escapeHtml(row.employee_name || '-')}</dd>
                <dt>소속</dt><dd>${escapeHtml(String(department))}</dd>
                <dt>생명체 이름</dt><dd>${escapeHtml(row.creature_name || '-')}</dd>
                <dt>엔딩 결과</dt><dd>${escapeHtml(String(ending).toUpperCase())}</dd>
                <dt>관리 기록</dt><dd>${escapeHtml(String(careDays))} / ${MISSION_CARE_TOTAL}일</dd>
                <dt>보고일</dt><dd>${escapeHtml(created)}</dd>
              </dl>
            </div>
            <div class="admin-report-image">
              <img src="${escapeHtml(image)}" alt="엔딩 일러스트" onerror="assetFail(this)" loading="lazy" decoding="async">
              <div class="fallback">${escapeHtml(image)}</div>
            </div>
          </article>
        `;
      }).join('');
    }

    function saveAdminObservation(profile){
      const textarea = document.getElementById('adminObservationText');
      const status = document.getElementById('adminObservationStatus');
      const text = textarea ? textarea.value.trim() : '';
      if (!text){
        if (status) status.textContent = '기록 내용이 비어 있습니다.';
        return;
      }
      const item = { at:new Date().toISOString(), admin:profile.name, handle:profile.handle, text };
      try{
        const key = adminObservationKey(profile);
        const logs = JSON.parse(localStorage.getItem(key) || '[]');
        logs.push(item);
        localStorage.setItem(key, JSON.stringify(logs.slice(-100)));
      }catch(error){
        console.warn('Admin observation local log failed:', error);
      }
      if (supabaseClient){
        supabaseClient.from('voxtek_events').insert({
          event_type:'ADMIN_OBSERVATION_SUBMITTED',
          account_id:`ADMIN-${profile.key.toUpperCase()}`,
          employee_name:profile.name,
          local_date:missionToday(),
          session_id:missionSession(),
          user_agent:navigator.userAgent,
          detail:{ source:'admin_observation_console', admin_key:profile.key, handle:profile.handle, text, client_time:item.at }
        }).then(({ error }) => { if (error) console.warn('Admin observation log failed:', error); });
      }
      if (textarea) textarea.value = '';
      if (status) status.textContent = '관찰 일지가 저장되었습니다.';
      missionToast('관찰 일지 저장 완료.');
    }

    function missionRender(){
      const employee = getActiveEmployee();
      if (isAdminEmployee(employee)){
        renderAdminMission();
        return;
      }
      setMissionShellMode(false);
      if (adminMissionShell) adminMissionShell.classList.add('hidden');
      if (normalMissionShell) normalMissionShell.classList.remove('hidden');
      const state = missionEnsureState();
      if (!state || !employee) return;
      if (state.missionAccessGranted && !missionHasEnoughServiceDays(employee)){
        state.missionAccessGranted = false;
        state.missionAccessLabel = '';
        missionSaveState();
      }
      missionDailyLoginBonus();
      if (!state.missionAccessGranted){
        missionRenderGate();
        return;
      }
      const mission = state.currentMission;
      if (!mission){
        missionRenderChat();
        return;
      }
      missionApplyTimeEffects();
      if (mission.state === 'dead') missionShowView('dead');
      else if (missionDay(mission) >= MISSION_FINAL_DAY) missionRenderFinal();
      else missionRenderGame();
    }

    function missionBindEvents(){
      if (missionPasswordBtn) missionPasswordBtn.addEventListener('click', missionVerifyPassword);
      if (missionPasswordInput) missionPasswordInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') missionVerifyPassword(); });
      if (missionSendBtn) missionSendBtn.addEventListener('click', missionSendReply);
      if (missionAcceptBtn) missionAcceptBtn.addEventListener('click', missionAccept);
      const startBtn = document.getElementById('missionStartBtn');
      if (startBtn) startBtn.addEventListener('click', missionStart);
      if (missionCreatureName) missionCreatureName.addEventListener('keydown', (e) => { if (e.key === 'Enter') missionStart(); });
      const backBtn = document.getElementById('missionBackChatBtn');
      if (backBtn) backBtn.addEventListener('click', missionRenderChat);
      const returnChatBtn = document.getElementById('missionReturnChatBtn');
      if (returnChatBtn) returnChatBtn.addEventListener('click', missionRenderChat);
      const returnCareBtn = document.getElementById('missionReturnCareBtn');
      if (returnCareBtn) returnCareBtn.addEventListener('click', missionRender);
      const feedBtn = document.getElementById('missionFeedBtn');
      const bathBtn = document.getElementById('missionBathBtn');
      const petBtn = document.getElementById('missionPetBtn');
      const talkBtn = document.getElementById('missionTalkBtn');
      const medicineBtn = document.getElementById('missionMedicineBtn');
      if (feedBtn) feedBtn.addEventListener('click', () => missionCare('feed'));
      if (bathBtn) bathBtn.addEventListener('click', () => missionCare('bath'));
      if (petBtn) petBtn.addEventListener('click', () => missionCare('pet'));
      if (talkBtn) talkBtn.addEventListener('click', () => missionCare('talk'));
      if (medicineBtn) medicineBtn.addEventListener('click', () => missionCare('medicine'));
      const feedbackBtn = document.getElementById('missionFeedbackBtn');
      if (feedbackBtn) feedbackBtn.addEventListener('click', missionSubmitFeedback);
      const newMissionBtn = document.getElementById('missionNewMissionBtn');
      if (newMissionBtn) newMissionBtn.addEventListener('click', missionCompleteAndNew);
      const resetBtn = document.getElementById('missionResetBtn');
      if (resetBtn) resetBtn.addEventListener('click', missionReset);
      if (missionManualBtn) missionManualBtn.addEventListener('click', () => missionManualModal.classList.remove('hidden'));
      if (missionManualClose) missionManualClose.addEventListener('click', () => missionManualModal.classList.add('hidden'));
      if (missionManualModal) missionManualModal.addEventListener('click', (e) => { if (e.target === missionManualModal) missionManualModal.classList.add('hidden'); });
      if (missionArchiveBtn) missionArchiveBtn.addEventListener('click', () => { missionRenderArchive(); missionArchiveModal.classList.remove('hidden'); });
      if (missionArchiveClose) missionArchiveClose.addEventListener('click', () => missionArchiveModal.classList.add('hidden'));
      if (missionArchiveModal) missionArchiveModal.addEventListener('click', (e) => { if (e.target === missionArchiveModal) missionArchiveModal.classList.add('hidden'); });
    }



    /* 6월 인사평가 및 오늘의 지시 - 좆같으면 내용 변경할 수도 있으니 따로 정리해 두기 */
    const EVALUATION_YEAR = 2026;
    const EVALUATION_MONTH = 6;
    const EVALUATION_PREVIEW_MODE = false; // 테스트 시 true 설정 필요
    const EVALUATION_STORAGE_PREFIX = 'voxtek_june_evaluation_v1_';
    const JUNE_DAILY_ORDERS = [
      { day:1, difficulty:'EASY', text:'복스테크 사내 송출망 점검일입니다. 기본 신호를 안정권에 맞추고, 불필요한 잡음을 제거하십시오. 첫날부터 실수하면 기록이 꽤 보기 흉할 겁니다.', game:{ requiredHits:2, zoneWidth:34, speed:.9 } },
      { day:2, difficulty:'NORMAL', text:'발렌티노 님의 심기를 건드리지 마십시오. 주변에 계시다면 대피하시고, 피해를 관찰하셨다면 보고서를 제출하시길 바랍니다.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:3, difficulty:'EASY', text:'벨벳 님의 트렌드 피드가 갱신되었습니다. 뒤처진 감각은 사내 품질 저하로 간주됩니다. 유행 신호를 정상 범위에 맞추십시오.', game:{ requiredHits:2, zoneWidth:34, speed:.9 } },
      { day:4, difficulty:'NORMAL', text:'복스 님의 방송 회선이 미세하게 흔들리고 있습니다. 원인은 장비가 아니라 직원의 집중력일 가능성이 높습니다. 즉시 보정하십시오.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:5, difficulty:'HARD', text:'V-타워 내부 채널에 과부하가 감지되었습니다. 세 대표님의 회선이 동시에 열려 있습니다. 우선순위를 착각하지 말고 신호를 고정하십시오.', game:{ requiredHits:4, zoneWidth:20, speed:1.45 } },
      { day:6, difficulty:'EASY', text:'금일 업무 태도 점검이 있습니다. 당황하지 말고, 평소보다 덜 무능해 보이도록 행동하십시오. 기본 주파수 안정화가 필요합니다.', game:{ requiredHits:2, zoneWidth:34, speed:.9 } },
      { day:7, difficulty:'NORMAL', text:'발렌티노 스튜디오 주변 소음이 기준치를 초과했습니다. 비명인지 환호인지 구분할 필요는 없습니다. 송출 가능한 수준으로 정리하십시오.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:8, difficulty:'HARD', text:'알 수 없는 라디오 잡음이 유입되었습니다. 낡은 주파수는 복스테크 시스템에 어울리지 않습니다. 즉시 차단하고 화면 신호를 복구하십시오.', game:{ requiredHits:4, zoneWidth:20, speed:1.45 } },
      { day:9, difficulty:'EASY', text:'벨벳 님의 승인 대기 콘텐츠가 쌓여 있습니다. 구린 것은 걸러내고, 쓸 만한 것만 살려두십시오. 판단이 느리면 그것도 기록됩니다.', game:{ requiredHits:2, zoneWidth:34, speed:.9 } },
      { day:10, difficulty:'NORMAL', text:'사내 메신저 응답 속도 점검일입니다. 읽씹은 권장되지 않습니다. 단, 상급자의 메시지는 즉시 반응하는 편이 신상에 좋습니다.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:11, difficulty:'HARD', text:'복스 님의 생방송 예비 송출이 시작됩니다. 화면 지연, 음성 깨짐, 라디오 간섭을 동시에 억제하십시오. 실패 시 변명은 수신하지 않습니다.', game:{ requiredHits:4, zoneWidth:20, speed:1.45 } },
      { day:12, difficulty:'NORMAL', text:'발렌티노 님의 스튜디오 콜시트가 변경되었습니다. 혼선이 발생하지 않도록 내부 알림 신호를 재정렬하십시오. 실수하면 직접 설명하게 될 겁니다.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:13, difficulty:'EASY', text:'사원 기록 동기화가 필요합니다. 이름, 소속, 직책이 시스템과 일치하는지 확인하십시오. 본인이 누구 소속인지 모르는 직원은 곤란합니다.', game:{ requiredHits:2, zoneWidth:34, speed:.9 } },
      { day:14, difficulty:'EXTREME', text:'비인가 라디오 주파수가 복스테크 송출망을 침범했습니다. 구식 잡음을 완전히 밀어내고 화면 신호를 장악하십시오. 복스 님이 보고 있습니다.', game:{ requiredHits:5, zoneWidth:15, speed:1.75 } },
      { day:15, difficulty:'NORMAL', text:'월중 평가 중간 점검일입니다. 지금까지의 근속 태도가 평가 시스템에 반영됩니다. 늦었더라도 지금부터라도 쓸모를 증명하십시오.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:16, difficulty:'HARD', text:'벨벳 님의 트렌드 알림이 폭주 중입니다. 인기 있는 것과 역겨운 것을 구분하십시오. 둘을 헷갈리는 순간 사내 평판은 끝입니다.', game:{ requiredHits:4, zoneWidth:20, speed:1.45 } },
      { day:17, difficulty:'EASY', text:'VoxTek 기본 보안 점검입니다. 화면 잠금, 회선 잠금, 입 조심. 세 가지 중 하나라도 놓치면 귀찮은 일이 생깁니다.', game:{ requiredHits:2, zoneWidth:34, speed:.9 } },
      { day:18, difficulty:'NORMAL', text:'발렌티노 님 근처의 분위기가 불안정합니다. 감정 신호를 자극하지 않도록 거리 유지 및 상황 보고를 수행하십시오. 가까이 갈 필요는 없습니다.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:19, difficulty:'HARD', text:'복스 님의 시청률이 불안정합니다. 수치가 떨어지는 것처럼 보이게 만들지 마십시오. 그래프 신호를 정상 범위로 고정하십시오.', game:{ requiredHits:4, zoneWidth:20, speed:1.45 } },
      { day:20, difficulty:'NORMAL', text:'사내 VOC 회선 점검일입니다. 접수된 문의 중 헛소리와 실제 건의를 분리하십시오. 둘 다 짜증 나지만, 처리 방식은 달라야 합니다.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:21, difficulty:'EASY', text:'근속 기록 백업이 진행됩니다. 출석 기록이 누락되지 않도록 사원 신호를 확인하십시오. 존재감이 희미한 직원은 시스템도 놓치기 쉽습니다.', game:{ requiredHits:2, zoneWidth:34, speed:.9 } },
      { day:22, difficulty:'HARD', text:'Vees 공동 회의 송출 준비 중입니다. 세 대표님의 회선을 동시에 안정화하십시오. 어느 한쪽도 끊기게 만들지 마십시오. 균형 감각이 필요합니다.', game:{ requiredHits:4, zoneWidth:20, speed:1.45 } },
      { day:23, difficulty:'NORMAL', text:'벨벳 님이 오늘의 금지 키워드를 갱신했습니다. 구린 표현이 송출되지 않도록 필터를 조정하십시오. 본인 감각을 믿지 마십시오.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:24, difficulty:'EXTREME', text:'복스테크 중앙 송출망에 대규모 글리치가 발생했습니다. 화면, 음성, 영향력 수치를 동시에 복구하십시오. 실패하면 아주 눈에 띌 겁니다.', game:{ requiredHits:5, zoneWidth:15, speed:1.75 } },
      { day:25, difficulty:'EASY', text:'발렌티노 님의 대기실 주변 정숙 지시가 내려왔습니다. 괜히 눈에 띄지 말고, 조용히 신호만 정돈하십시오. 살아남는 것도 능력입니다.', game:{ requiredHits:2, zoneWidth:34, speed:.9 } },
      { day:26, difficulty:'NORMAL', text:'복스 님의 내부 공지가 예약 송출됩니다. 문장 깨짐, 자막 지연, 불필요한 감정 표현을 제거하십시오. 완벽한 전달만 허용됩니다.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:27, difficulty:'HARD', text:'라디오성 잡음이 사내 스피커에서 감지되었습니다. 웃음소리처럼 들리더라도 반응하지 마십시오. 반응하는 순간 그쪽이 이긴 겁니다.', game:{ requiredHits:4, zoneWidth:20, speed:1.45 } },
      { day:28, difficulty:'NORMAL', text:'평가 종료 전 사원 태도 재점검입니다. 지금이라도 성실한 척을 하십시오. 시스템은 속지 않지만, 점수는 계산해 줍니다.', game:{ requiredHits:3, zoneWidth:26, speed:1.15 } },
      { day:29, difficulty:'HARD', text:'최종 평가 데이터가 집계 중입니다. 출석, 지시 수행, 보정 정확도를 다시 확인하십시오. 마지막에 실수하는 직원은 오래 기억됩니다.', game:{ requiredHits:4, zoneWidth:20, speed:1.45 } },
      { day:30, difficulty:'EXTREME', text:'6월 인사 평가 최종 송출일입니다. 모든 평가 신호를 안정권에 맞추고 최종 랭킹 등록을 완료하십시오. 축하합니다. 아직 폐기되진 않았군요.', game:{ requiredHits:5, zoneWidth:15, speed:1.75 } }
    ];

    let evaluationGameState = null;

    function evaluationDateKey(date = new Date()){
      return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
    }

    function evaluationTodayInfo(){
      const now = new Date();
      const actualKey = evaluationDateKey(now);
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (EVALUATION_PREVIEW_MODE){
        year = EVALUATION_YEAR;
        month = EVALUATION_MONTH;
        day = 1;
      }
      const key = `${year}-${pad2(month)}-${pad2(day)}`;
      const startKey = `${EVALUATION_YEAR}-06-01`;
      const endKey = `${EVALUATION_YEAR}-06-30`;
      return { year, month, day, key, actualKey, startKey, endKey, isBefore:key < startKey, isAfter:key > endKey, isActive:year === EVALUATION_YEAR && month === EVALUATION_MONTH && day >= 1 && day <= 30 };
    }

    function evaluationStorageKey(employee){
      const id = employee && employee.employeeId ? employee.employeeId : (employee && employee.name ? employee.name : 'unknown');
      return `${EVALUATION_STORAGE_PREFIX}${EVALUATION_YEAR}_${id}`;
    }

    function evaluationBlankState(){
      return { attendanceDates:[], clearedOrders:{}, updatedAt:new Date().toISOString() };
    }

    function evaluationLoadState(employee = getStoredEmployee()){
      if (!employee) return evaluationBlankState();
      try{
        const raw = localStorage.getItem(evaluationStorageKey(employee));
        if (!raw) return evaluationBlankState();
        const parsed = JSON.parse(raw);
        parsed.attendanceDates = Array.isArray(parsed.attendanceDates) ? parsed.attendanceDates : [];
        parsed.clearedOrders = parsed.clearedOrders && typeof parsed.clearedOrders === 'object' ? parsed.clearedOrders : {};
        return parsed;
      }catch(error){
        return evaluationBlankState();
      }
    }

    function evaluationSaveState(state, employee = getStoredEmployee()){
      if (!employee || !state) return;
      state.updatedAt = new Date().toISOString();
      localStorage.setItem(evaluationStorageKey(employee), JSON.stringify(state));
    }

    function evaluationScore(state){
      const attendance = new Set(state.attendanceDates || []).size;
      const cleared = Object.values(state.clearedOrders || {});
      const clearCount = cleared.length;
      const perfectCount = cleared.filter(item => item && item.perfect).length;
      return { attendance, clearCount, perfectCount, total:attendance + clearCount * 2 + perfectCount };
    }

    function evaluationCurrentOrder(){
      const info = evaluationTodayInfo();
      if (!info.isActive) return null;
      return JUNE_DAILY_ORDERS[info.day - 1] || null;
    }

    function evaluationEventLog(type, detail = {}){
      const employee = getStoredEmployee();
      if (!employee) return;
      const dept = getDepartmentInfo(employee);
      const role = normalizeRole(employee.role, employee.badge);
      const row = {
        event_type:type,
        account_id:employee.employeeId || employee.name,
        employee_name:employee.name,
        mission_id:null,
        creature_name:null,
        mission_day:null,
        points:null,
        affection:null,
        local_date:evaluationTodayInfo().key,
        session_id:typeof missionSession === 'function' ? missionSession() : '',
        user_agent:navigator.userAgent,
        detail:{
          source:'june_evaluation',
          department:dept.name,
          department_key:dept.key || '',
          department_line:dept.line,
          team:role.team || role.employment || '',
          grade:role.grade || role.position || '',
          position:role.grade || role.position || '',
          base_team:role.baseTeam || '',
          base_grade:role.baseGrade || DEFAULT_GRADE,
          reward_rank:role.rewardRank || null,
          reward_label:role.rewardLabel || '',
          reward_season:role.rewardSeason || '',
          joined_at:employee.joinedAt || '',
          employee_id:employee.employeeId || '',
          client_time:new Date().toISOString(),
          ...detail
        }
      };
      if (supabaseClient){
        supabaseClient.from('voxtek_events').insert(row).then(({ error }) => {
          if (error) console.warn('Evaluation Supabase log failed:', error);
        });
      }
    }

    function evaluationEnsureAttendance(){
      const employee = getStoredEmployee();
      const info = evaluationTodayInfo();
      if (!employee || !info.isActive) return;
      const state = evaluationLoadState(employee);
      if (!state.attendanceDates.includes(info.key)){
        state.attendanceDates.push(info.key);
        evaluationSaveState(state, employee);
        evaluationEventLog('EVAL_ATTENDANCE', { score_gain:1 });
      }
    }

    function evaluationRenderStats(state){
      const score = evaluationScore(state);
      return `
        <div class="evaluation-stat-grid">
          <div class="evaluation-stat"><span>Attendance</span><b>${score.attendance}/30</b></div>
          <div class="evaluation-stat"><span>Orders</span><b>${score.clearCount}/30</b></div>
          <div class="evaluation-stat"><span>Perfect</span><b>${score.perfectCount}/30</b></div>
          <div class="evaluation-stat"><span>Score</span><b>${score.total}/120</b></div>
        </div>
      `;
    }

    function renderAdminEvaluation(employee){
      const profile = getAdminProfile(employee.adminKey);
      const info = evaluationTodayInfo();
      if (evaluationStatus) evaluationStatus.textContent = info.isActive ? 'ADMIN VIEW' : (info.isBefore ? 'LOCKED' : 'RECORDS');
      if (info.isBefore){
        evaluationBody.innerHTML = `
          <div class="evaluation-lock">
            <div class="evaluation-lock-box">
              <h3>ADMIN REVIEW LOCKED</h3>
              <p>평가 시스템은 ${EVALUATION_YEAR}.06.01부터 ${EVALUATION_YEAR}.06.30까지 진행됩니다.</p>
              <p class="evaluation-muted">평가가 시작되면 직원별 출석, 오늘의 지시 완료, 퍼펙트 보정 기록이 이 창구에 표시됩니다.</p>
              <p class="evaluation-muted">${escapeHtml(profile.name)} 관리자 권한으로 접속 중입니다.</p>
            </div>
          </div>
        `;
        return;
      }
      const order = evaluationCurrentOrder();
      const periodText = info.isActive
        ? '현재 6월 인사 평가가 진행 중입니다. 직원별 누적 기록을 확인할 수 있습니다.'
        : '6월 인사 평가 기간이 종료되었습니다. 직원별 평가 기록은 이 창구에 보존됩니다.';
      evaluationBody.innerHTML = `
        <div class="evaluation-grid">
          <section class="evaluation-card">
            <h3>관리자 확인 모드</h3>
            <p><strong>${escapeHtml(profile.name)}</strong> · ${escapeHtml(profile.handle)}</p>
            <p class="evaluation-muted">대표 계정에서는 평가 점수를 산정하지 않습니다. 직원들의 평가 수행 기록을 확인하는 관리자 전용 화면입니다.</p>
          </section>
          <section class="evaluation-card">
            <h3>평가 기간</h3>
            <p><strong>${EVALUATION_YEAR}.06.01 - ${EVALUATION_YEAR}.06.30</strong></p>
            <p class="evaluation-muted">${periodText}</p>
          </section>
        </div>
        ${info.isActive ? `
          <section class="evaluation-card">
            <h3>오늘의 지시</h3>
            <div class="evaluation-order-text">${escapeHtml(order ? order.text : '오늘 등록된 지시가 없습니다.')}</div>
            <p class="evaluation-mini-note">관리자 계정은 신호 보정 게임을 수행하지 않습니다. 오늘 직원들이 수행할 지시를 확인하는 용도입니다.</p>
          </section>
        ` : ''}
        <section class="evaluation-card">
          <h3>직원 평가 기록</h3>
          <p class="evaluation-muted">소속 구분 없이 전체 직원의 출석, 지시 완료, 퍼펙트 보정, 총점을 표시합니다.</p>
          <div class="admin-action-row">
            <button id="adminEvaluationRefresh" class="mission-btn primary" type="button">평가 기록 새로고침</button>
          </div>
          <div id="adminEvaluationReportList" class="admin-report-list">
            <div class="admin-mode-note">평가 기록을 불러오는 중입니다.</div>
          </div>
        </section>
      `;
      const refreshBtn = document.getElementById('adminEvaluationRefresh');
      if (refreshBtn) refreshBtn.addEventListener('click', () => loadAdminEvaluationReports(profile));
      loadAdminEvaluationReports(profile);
    }

    async function loadAdminEvaluationReports(profile){
      const mount = document.getElementById('adminEvaluationReportList');
      if (!mount) return;
      mount.innerHTML = '<div class="admin-mode-note">평가 기록을 불러오는 중입니다.</div>';
      if (!supabaseClient){
        mount.innerHTML = '<div class="admin-report-empty">평가 기록 조회 모듈이 준비되지 않았습니다.</div>';
        return;
      }
      try{
        let { data, error } = await supabaseClient
          .from('admin_evaluation_scores')
          .select('*')
          .order('total_score', { ascending:false })
          .order('joined_at', { ascending:true, nullsFirst:false })
          .limit(100);

        if (error){
          console.warn('Evaluation score view load failed. Trying raw event fallback:', error);
          const fallback = await supabaseClient
            .from('voxtek_events')
            .select('created_at, event_type, account_id, employee_name, local_date, detail')
            .in('event_type', ['EVAL_ATTENDANCE', 'DAILY_ORDER_CLEARED'])
            .gte('local_date', `${EVALUATION_YEAR}-06-01`)
            .lte('local_date', `${EVALUATION_YEAR}-06-30`)
            .order('created_at', { ascending:false })
            .limit(2000);
          data = fallback.data;
          error = fallback.error;
        }

        if (error) throw error;
        renderAdminEvaluationReports(data || []);
      }catch(error){
        console.warn('Evaluation report load failed:', error);
        mount.innerHTML = '<div class="admin-report-empty">평가 기록 조회에 실패했습니다. 평가 기록 조회용 프로그램 설정을 확인하십시오.</div>';
      }
    }

    function renderAdminEvaluationSummary(results){
      const mount = document.getElementById('adminEvaluationReportList');
      if (!mount) return;
      const filtered = (results || []).filter((item) => item.attendance || item.clearCount || item.perfectCount || item.total);
      if (!filtered.length){
        mount.innerHTML = '<div class="admin-report-empty">표시할 평가 기록이 없습니다.</div>';
        return;
      }
      mount.innerHTML = filtered.map((item, index) => {
        const rank = Number(item.rank || index + 1);
        const reward = item.rewardLabel || rewardLabelFromRank(rank);
        return `
        <article class="admin-report-card evaluation-report-card">
          <div class="admin-report-no">${pad2(rank).padStart(3, '0')}</div>
          <div class="admin-report-main">
            <dl>
              <dt>직원 이름</dt><dd>${escapeHtml(item.employeeName || '-')}</dd>
              <dt>소속</dt><dd>${escapeHtml(item.department || '-')}</dd>
              <dt>팀</dt><dd>${escapeHtml(item.team || '-')}</dd>
              <dt>직급</dt><dd>${escapeHtml(item.grade || item.position || '-')}</dd>
              <dt>특혜</dt><dd>${escapeHtml(reward)}</dd>
              <dt>출석</dt><dd>${item.attendance} / 30</dd>
              <dt>지시 완료</dt><dd>${item.clearCount} / 30</dd>
              <dt>퍼펙트</dt><dd>${item.perfectCount} / 30</dd>
              <dt>점수</dt><dd><strong>${item.total} / 120</strong></dd>
              <dt>최근 기록</dt><dd>${escapeHtml(item.latestAt ? formatDate(item.latestAt) : '-')}</dd>
            </dl>
          </div>
        </article>
      `;
      }).join('');
    }

    function renderAdminEvaluationReports(records){
      const mount = document.getElementById('adminEvaluationReportList');
      if (!mount) return;
      if (!records.length){
        mount.innerHTML = `
          <div class="admin-report-empty">
            아직 접수된 평가 기록이 없습니다.<br>
            평가가 시작되면 직원별 출석, 지시 완료, 퍼펙트 보정, 총점이 표시됩니다.
          </div>
        `;
        return;
      }
      if ('total_score' in records[0] || 'attendance_days' in records[0]){
        const results = records.map((row) => {
          const rank = Number(row.rank || 0);
          return {
            employeeName:row.employee_name || '-',
            department:row.department || '-',
            team:row.team || '-',
            grade:row.grade || row.position || '-',
            position:row.grade || row.position || '-',
            rewardLabel:row.reward_label || rewardLabelFromRank(rank),
            attendance:Number(row.attendance_days || 0),
            clearCount:Number(row.order_clear_days || 0),
            perfectCount:Number(row.perfect_days || 0),
            total:Number(row.total_score || 0),
            latestAt:row.latest_recorded_at || row.created_at || '',
            joinedAt:row.joined_at || '',
            rank:rank || ''
          };
        });
        renderAdminEvaluationSummary(results);
        return;
      }

      const grouped = new Map();
      records.forEach((row) => {
        const detail = row && typeof row.detail === 'object' && row.detail ? row.detail : {};
        const key = row.account_id || row.employee_name || 'unknown';
        if (!grouped.has(key)){
          grouped.set(key, {
            accountId:key,
            employeeName:row.employee_name || '-',
            department:detail.department || '-',
            team:detail.team || '-',
            grade:detail.grade || detail.position || '-',
            position:detail.grade || detail.position || '-',
            joinedAt:detail.joined_at || '',
            latestAt:row.created_at || '',
            attendanceDates:new Set(),
            clearDates:new Set(),
            perfectDates:new Set()
          });
        }
        const item = grouped.get(key);
        if ((!item.department || item.department === '-') && detail.department) item.department = detail.department;
        if ((!item.team || item.team === '-') && detail.team) item.team = detail.team;
        if ((!item.grade || item.grade === '-') && (detail.grade || detail.position)) item.grade = detail.grade || detail.position;
        item.position = item.grade;
        if (!item.joinedAt && detail.joined_at) item.joinedAt = detail.joined_at;
        if (row.created_at && (!item.latestAt || row.created_at > item.latestAt)) item.latestAt = row.created_at;
        const dateKey = row.local_date || (detail.client_time ? String(detail.client_time).slice(0, 10) : '');
        if (!dateKey) return;
        if (row.event_type === 'EVAL_ATTENDANCE') item.attendanceDates.add(dateKey);
        if (row.event_type === 'DAILY_ORDER_CLEARED'){
          item.clearDates.add(dateKey);
          if (detail.perfect === true || detail.perfect === 'true') item.perfectDates.add(dateKey);
        }
      });
      const results = Array.from(grouped.values()).map((item) => {
        const attendance = item.attendanceDates.size;
        const clearCount = item.clearDates.size;
        const perfectCount = item.perfectDates.size;
        return { ...item, attendance, clearCount, perfectCount, total:attendance + clearCount * 2 + perfectCount };
      }).filter((item) => item.attendance || item.clearCount || item.perfectCount);
      if (!results.length){
        mount.innerHTML = '<div class="admin-report-empty">표시할 평가 기록이 없습니다.</div>';
        return;
      }
      results.sort((a, b) => {
        if (b.total !== a.total) return b.total - a.total;
        const aj = a.joinedAt ? new Date(a.joinedAt).getTime() : Infinity;
        const bj = b.joinedAt ? new Date(b.joinedAt).getTime() : Infinity;
        if (aj !== bj) return aj - bj;
        return String(a.employeeName).localeCompare(String(b.employeeName), 'ko');
      });
      renderAdminEvaluationSummary(results.map((item, index) => ({ ...item, rank:index + 1, rewardLabel:rewardLabelFromRank(index + 1) })));
    }

    function renderEvaluation(){
      if (!evaluationBody) return;
      const employee = getActiveEmployee();
      if (!employee){
        evaluationBody.innerHTML = '<div class="evaluation-lock"><div class="evaluation-lock-box"><h3>NO EMPLOYEE DATA</h3><p>사원 기록을 먼저 생성하십시오.</p></div></div>';
        return;
      }
      if (isAdminEmployee(employee)){
        renderAdminEvaluation(employee);
        return;
      }
      const info = evaluationTodayInfo();
      if (evaluationStatus) evaluationStatus.textContent = info.isActive ? 'ACTIVE' : (info.isBefore ? 'LOCKED' : 'CLOSED');
      if (!info.isActive){
        const state = evaluationLoadState(employee);
        const score = evaluationScore(state);
        const message = info.isBefore
          ? `평가 시스템은 ${EVALUATION_YEAR}.06.01 00:00부터 활성화됩니다. 현재는 사전 공지만 열람 가능합니다.`
          : `6월 인사 평가 기간이 종료되었습니다. 최종 집계는 관리자 확인 후 별도 공지됩니다.`;
        evaluationBody.innerHTML = `
          <div class="evaluation-lock">
            <div class="evaluation-lock-box">
              <h3>${info.isBefore ? 'JUNE REVIEW LOCKED' : 'JUNE REVIEW CLOSED'}</h3>
              <p>${message}</p>
              <p class="evaluation-muted">현재 개인 기록: 출석 ${score.attendance}/30 · 지시 완료 ${score.clearCount}/30 · 퍼펙트 ${score.perfectCount}/30 · ${score.total}/120점</p>
            </div>
          </div>
        `;
        return;
      }
      evaluationEnsureAttendance();
      const state = evaluationLoadState(employee);
      const dept = getDepartmentInfo(employee);
      const role = normalizeRole(employee.role, employee.badge);
      const order = evaluationCurrentOrder();
      const cleared = state.clearedOrders[info.key];
      evaluationBody.innerHTML = `
        <div class="evaluation-grid">
          <section class="evaluation-card">
            <h3>사원 평가 현황</h3>
            <p><strong>${escapeHtml(employee.name)}</strong> 사원 · ${escapeHtml(dept.name)} 소속 · ${escapeHtml(role.team || '-')} · ${escapeHtml(role.grade || '-')}</p>
            ${evaluationRenderStats(state)}
            <p class="evaluation-mini-note">평가 점수 = 출석 1점 + 오늘의 지시 완료 2점 + 퍼펙트 보정 1점입니다.</p>
          </section>
          <section class="evaluation-card">
            <h3>평가 기간</h3>
            <p><strong>${EVALUATION_YEAR}.06.01 - ${EVALUATION_YEAR}.06.30</strong></p>
            <p class="evaluation-muted">랭킹은 평가 종료 후 별도 집계됩니다.</p>
          </section>
        </div>
        <section class="evaluation-card">
          <h3>오늘의 지시</h3>
          <div class="evaluation-order-text">${escapeHtml(order ? order.text : '오늘 등록된 지시가 없습니다.')}</div>
          <div id="evaluationGameMount" class="evaluation-game ${order && order.difficulty === 'EXTREME' ? 'is-extreme' : ''}">
            ${cleared ? evaluationRenderCompleted(cleared) : evaluationRenderGameReady(order)}
          </div>
        </section>
      `;
      evaluationBindGame(order, !!cleared);
    }

    function evaluationRenderCompleted(record){
      return `
        <div class="evaluation-complete">
          <strong>ORDER COMPLETE</strong><br>
          오늘의 지시 수행 기록이 이미 반영되었습니다.<br>
          ${record.perfect ? '퍼펙트 보정 보너스가 적용되었습니다.' : '보정 완료 점수가 적용되었습니다.'}
        </div>
      `;
    }

    function evaluationRenderGameReady(order){
      if (!order) return '<p class="evaluation-muted">오늘 등록된 신호 보정 임무가 없습니다.</p>';
      return `
        <div class="evaluation-game-head">
          <span>SIGNAL CALIBRATION</span>
          <span id="evaluationHitCounter">0/${order.game.requiredHits}</span>
        </div>
        <div class="evaluation-track" id="evaluationTrack" style="--eval-zone-width:${order.game.zoneWidth}%; --eval-zone-left:${Math.max(0, (100 - order.game.zoneWidth) / 2)}%; --eval-cursor-left:0%;">
          <div class="evaluation-zone" id="evaluationZone"></div>
          <div class="evaluation-cursor" id="evaluationCursor"></div>
        </div>
        <div id="evaluationGameMessage" class="evaluation-game-message">안정 구역에 커서를 맞춰 신호를 고정하십시오.</div>
        <div class="evaluation-actions">
          <button id="evaluationStartBtn" class="evaluation-btn" type="button">Start Calibration</button>
          <button id="evaluationLockBtn" class="evaluation-btn secondary" type="button" disabled>Lock Signal</button>
        </div>
      `;
    }

    function evaluationBindGame(order, alreadyCleared){
      if (!order || alreadyCleared) return;
      const startBtn = document.getElementById('evaluationStartBtn');
      const lockBtn = document.getElementById('evaluationLockBtn');
      if (startBtn) startBtn.addEventListener('click', () => evaluationStartGame(order));
      if (lockBtn) lockBtn.addEventListener('click', evaluationLockSignal);
      const track = document.getElementById('evaluationTrack');
      if (track) track.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'evaluationTrack') evaluationLockSignal();
      });
    }

    function evaluationPlayTone(kind){
      try{
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = kind === 'lost' ? 'sawtooth' : 'square';
        osc.frequency.value = kind === 'lost' ? 120 : 760;
        gain.gain.setValueAtTime(.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(.08, ctx.currentTime + .015);
        gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + .16);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + .18);
      }catch(error){}
    }

    function evaluationStartGame(order){
      if (evaluationGameState && evaluationGameState.rafId) cancelAnimationFrame(evaluationGameState.rafId);
      const info = evaluationTodayInfo();
      evaluationGameState = {
        order,
        dateKey:info.key,
        running:true,
        hits:0,
        misses:0,
        round:1,
        cursor:0,
        direction:1,
        startedAt:performance.now(),
        roundStartedAt:performance.now(),
        currentSpeed:order.game.speed,
        zoneLeft:Math.max(0, (100 - order.game.zoneWidth) / 2)
      };
      const startBtn = document.getElementById('evaluationStartBtn');
      const lockBtn = document.getElementById('evaluationLockBtn');
      if (startBtn) startBtn.disabled = true;
      if (lockBtn) lockBtn.disabled = false;
      evaluationPrepareRound();
      evaluationAnimateCursor();
    }

    function evaluationPrepareRound(){
      const state = evaluationGameState;
      if (!state) return;
      const order = state.order;
      const track = document.getElementById('evaluationTrack');
      const msg = document.getElementById('evaluationGameMessage');
      const width = order.game.zoneWidth;
      if (order.difficulty === 'EXTREME'){
        const seed = (state.round * 23 + state.misses * 17) % Math.max(1, 100 - width);
        state.zoneLeft = Math.max(2, Math.min(98 - width, seed));
        state.currentSpeed = order.game.speed + (state.round - 1) * .18 + state.misses * .06;
      } else {
        state.zoneLeft = Math.max(0, (100 - width) / 2);
        state.currentSpeed = order.game.speed;
      }
      if (track){
        track.style.setProperty('--eval-zone-width', `${width}%`);
        track.style.setProperty('--eval-zone-left', `${state.zoneLeft}%`);
      }
      if (msg){
        msg.classList.remove('lost');
        msg.textContent = `보정 진행: ${state.hits}/${order.game.requiredHits}`;
      }
      state.roundStartedAt = performance.now();
    }

    function evaluationAnimateCursor(){
      const state = evaluationGameState;
      if (!state || !state.running) return;
      const track = document.getElementById('evaluationTrack');
      const elapsed = performance.now() - state.roundStartedAt;
      const period = Math.max(620, 1700 / Math.max(.1, state.currentSpeed));
      const phase = (elapsed % period) / period;
      const cursor = phase < .5 ? phase * 200 : (1 - phase) * 200;
      state.cursor = cursor;
      if (track) track.style.setProperty('--eval-cursor-left', `${cursor}%`);
      state.rafId = requestAnimationFrame(evaluationAnimateCursor);
    }

    function evaluationLockSignal(){
      const state = evaluationGameState;
      if (!state || !state.running) return;
      const order = state.order;
      const width = order.game.zoneWidth;
      const hit = state.cursor >= state.zoneLeft && state.cursor <= state.zoneLeft + width;
      const msg = document.getElementById('evaluationGameMessage');
      const counter = document.getElementById('evaluationHitCounter');
      if (hit){
        state.hits += 1;
        evaluationPlayTone(order.difficulty === 'EXTREME' ? 'warn' : 'hit');
        if (counter) counter.textContent = `${state.hits}/${order.game.requiredHits}`;
        if (state.hits >= order.game.requiredHits){
          evaluationCompleteGame();
          return;
        }
        state.round += 1;
        evaluationPrepareRound();
      } else {
        state.misses += 1;
        evaluationPlayTone('lost');
        if (msg){
          msg.classList.add('lost');
          msg.textContent = 'SIGNAL LOST';
        }
        state.round += 1;
        setTimeout(() => {
          if (evaluationGameState && evaluationGameState.running) evaluationPrepareRound();
        }, 360);
      }
    }

    function evaluationCompleteGame(){
      const state = evaluationGameState;
      if (!state) return;
      state.running = false;
      if (state.rafId) cancelAnimationFrame(state.rafId);
      const perfect = state.misses === 0;
      const elapsed = Math.round(performance.now() - state.startedAt);
      const employee = getStoredEmployee();
      const info = evaluationTodayInfo();
      const local = evaluationLoadState(employee);
      if (!local.clearedOrders[info.key]){
        local.clearedOrders[info.key] = {
          day:state.order.day,
          perfect,
          completedAt:new Date().toISOString(),
          attempts:state.hits + state.misses,
          misses:state.misses,
          clearTimeMs:elapsed,
          scoreGain:perfect ? 3 : 2
        };
        evaluationSaveState(local, employee);
        evaluationEventLog('DAILY_ORDER_CLEARED', {
          day:state.order.day,
          order_text:state.order.text,
          perfect,
          attempts:state.hits + state.misses,
          misses:state.misses,
          clear_time_ms:elapsed,
          score_gain:perfect ? 3 : 2
        });
      }
      const mount = document.getElementById('evaluationGameMount');
      if (mount) mount.innerHTML = evaluationRenderCompleted(local.clearedOrders[info.key]);
      setTimeout(renderEvaluation, 180);
    }


    /* VOC 상담 및 내부 문의 회선 */
    function getDepartmentInfo(employee = getStoredEmployee()){
      const key = getDepartmentKeyFromBadge(employee && employee.badge ? employee.badge : '');
      const map = {
        valentino: { key:'valentino', name:'발렌티노', line:'VALENTINO LINE' },
        vox: { key:'vox', name:'복스', line:'VOX LINE' },
        velvette: { key:'velvette', name:'벨벳', line:'VELVETTE LINE' },
        unknown: { key:'unknown', name:'미확인 소속', line:'UNASSIGNED LINE' }
      };
      return map[key] || map.unknown;
    }

    function vocScroll(includeWindow = false){
      if (vocRoom) vocRoom.scrollTop = vocRoom.scrollHeight;
      if (includeWindow){
        const supportWindow = document.getElementById('window-support');
        const supportBody = supportWindow ? supportWindow.querySelector('.window-body') : null;
        if (supportBody) supportBody.scrollTop = supportBody.scrollHeight;
      }
    }

    function vocScrollToBottom(includeWindow = true){
      vocScroll(includeWindow);
      requestAnimationFrame(() => vocScroll(includeWindow));
      setTimeout(() => vocScroll(includeWindow), 80);
      setTimeout(() => vocScroll(includeWindow), 220);
    }

    function vocFormatAnswerText(value){
      return escapeHtml(value || '').replace(/\n/g, '<br>');
    }

    function vocFindAnswerLane(key){
      return VOC_ANSWER_LANES.find((lane) => lane.key === key) || VOC_ANSWER_LANES[0];
    }

    function vocRenderPublicAnswers(laneKey){
      if (!vocPublicAnswers) return;
      const lane = vocFindAnswerLane(laneKey || vocPublicActiveLane || 'valentino');
      const items = VOC_PUBLIC_ANSWERS[lane.key] || [];
      const cards = items.length
        ? items.map((item) => `
            <article class="voc-answer-card">
              <div class="voc-answer-question">${vocFormatAnswerText(item.question)}</div>
              <div class="voc-answer-label">답변</div>
              <div class="voc-answer-reply">${vocFormatAnswerText(item.answer)}</div>
              ${item.date ? `<div class="voc-answer-meta">${escapeHtml(item.date)}</div>` : ''}
            </article>
          `).join('')
        : `<div class="voc-answer-empty">${escapeHtml(lane.empty)}<br>답변이 등록되면 익명 공개 기록으로 표시됩니다.</div>`;

      if (vocPublicTitle) vocPublicTitle.textContent = '공개 답변';
      if (vocPublicDesc) vocPublicDesc.textContent = '질문자 정보는 표시하지 않습니다. 선택한 대표 소속의 답변만 공개됩니다.';
      vocPublicAnswers.innerHTML = `
        <section class="voc-answer-column voc-answer-${lane.key}">
          <div class="voc-answer-title">
            <strong>${escapeHtml(lane.title)}</strong>
            <span>${escapeHtml(lane.label)}</span>
          </div>
          <div class="voc-answer-list">${cards}</div>
        </section>
      `;
    }

    function vocSetAdminInboxButton(open){
      if (!vocAdminInboxToggle) return;
      vocAdminInboxToggle.classList.toggle('is-active', !!open);
      vocAdminInboxToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function vocSetAdminAffiliationButton(open){
      if (!vocAdminAffiliationToggle) return;
      vocAdminAffiliationToggle.classList.toggle('is-active', !!open);
      vocAdminAffiliationToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function vocSetPublicButtons(open, activeLane){
      vocPublicButtons.forEach((button) => {
        const active = !!open && button.dataset.vocLane === activeLane;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-expanded', active ? 'true' : 'false');
      });
      if (open){
        vocSetAdminInboxButton(false);
        vocSetAdminAffiliationButton(false);
      }
    }

    function vocSetLauncherMode(admin){
      const launcher = document.querySelector('.voc-public-launcher');
      if (launcher){
        launcher.style.display = '';
        launcher.setAttribute('aria-label', admin ? '관리자 VOC 조회' : '공개 답변 소속 선택');
      }
      vocPublicButtons.forEach((button) => button.classList.toggle('hidden', !!admin));
      if (vocAdminInboxToggle) vocAdminInboxToggle.classList.toggle('hidden', !admin);
      if (vocAdminAffiliationToggle) vocAdminAffiliationToggle.classList.toggle('hidden', !admin);
    }

    function vocSetPublicBoardOpen(open, laneKey){
      if (!vocPublicBoard) return;
      const lane = vocFindAnswerLane(laneKey || vocPublicActiveLane || 'valentino');
      vocPublicActiveLane = open ? lane.key : '';

      if (open){
        vocRenderPublicAnswers(lane.key);
      }

      vocPublicBoard.classList.toggle('is-open', !!open);
      vocPublicBoard.setAttribute('aria-hidden', open ? 'false' : 'true');
      vocSetPublicButtons(open, lane.key);

      if (open){
        requestAnimationFrame(() => {
          vocPublicBoard.scrollIntoView({ block:'nearest', behavior:'smooth' });
        });
      } else {
        vocScrollToBottom(true);
      }
    }

    function vocRenderAdminVocLoading(){
      if (vocPublicTitle) vocPublicTitle.textContent = '접수된 VOC 건의';
      if (vocPublicDesc) vocPublicDesc.textContent = '소속과 문의내용만 표시합니다. 버그 확인 시 제보 바랍니다.';
      if (vocPublicAnswers){
        vocPublicAnswers.innerHTML = `
          <section class="voc-answer-column voc-answer-admin">
            <div class="voc-answer-title">
              <strong>건의 조회 중</strong>
              <span>ADMIN VOC</span>
            </div>
            <div class="voc-answer-list">
              <div class="voc-answer-empty">접수된 VOC 건의를 불러오는 중입니다.</div>
            </div>
          </section>
        `;
      }
    }

    function vocRenderAdminVocRows(items){
      if (!vocPublicAnswers) return;
      const rows = items.length
        ? items.map((item) => `
            <article class="voc-answer-card">
              <dl class="voc-admin-inquiry-card">
                <dt>소속</dt>
                <dd>${escapeHtml(item.department || '미확인 소속')}</dd>
                <dt>문의내용</dt>
                <dd>${vocFormatAnswerText(item.message || '')}</dd>
              </dl>
              ${item.createdAt ? `<div class="voc-answer-meta">${escapeHtml(formatDate(item.createdAt))}</div>` : ''}
            </article>
          `).join('')
        : `<div class="voc-answer-empty">표시할 VOC 건의가 없습니다.<br>직원이 불편사항을 작성해 전송하면 이곳에 소속과 문의내용만 표시됩니다.</div>`;

      vocPublicAnswers.innerHTML = `
        <section class="voc-answer-column voc-answer-admin">
          <div class="voc-answer-title">
            <strong>접수된 건의</strong>
            <span>ADMIN VOC</span>
          </div>
          <div class="voc-answer-list">${rows}</div>
        </section>
      `;
    }

    async function vocFetchAdminVocRows(){
      if (!supabaseClient) throw new Error('Supabase 연결 모듈을 찾지 못했습니다.');

      const rpcResult = await supabaseClient.rpc('get_admin_voc_inbox');
      if (!rpcResult.error){
        return (rpcResult.data || [])
          .map((row) => ({
            message:String(row.message || '').trim(),
            department:String(row.department || '미확인 소속').trim(),
            createdAt:row.created_at || ''
          }))
          .filter((item) => item.message)
          .slice(0, 50);
      }

      console.warn('Admin VOC RPC load failed. Trying direct table fallback:', rpcResult.error);

      const tableResult = await supabaseClient
        .from('voxtek_events')
        .select('created_at, detail')
        .eq('event_type', 'VOC_SUBMITTED')
        .order('created_at', { ascending:false })
        .limit(80);

      if (tableResult.error) throw tableResult.error;

      return (tableResult.data || [])
        .map((row) => {
          const detail = row && typeof row.detail === 'object' && row.detail ? row.detail : {};
          const source = String(detail.source || '');
          const message = String(detail.message || detail.text || '').trim();
          const department = String(detail.department || detail.department_line || '미확인 소속').trim();
          return { source, message, department, createdAt:row.created_at || '' };
        })
        .filter((item) => item.source === 'voc_center' && item.message)
        .slice(0, 50);
    }

    async function vocLoadAdminVocSubmissions(){
      vocRenderAdminVocLoading();
      try{
        const items = await vocFetchAdminVocRows();
        if (vocPublicDesc) vocPublicDesc.textContent = '직원 식별 정보는 숨기고, 소속과 문의내용만 표시합니다.';
        vocRenderAdminVocRows(items);
      }catch(error){
        console.warn('Admin VOC submissions load failed:', error);
        const message = error && error.message ? error.message : '알 수 없는 오류';
        if (vocPublicTitle) vocPublicTitle.textContent = '들어온 VOC 건의';
        if (vocPublicDesc) vocPublicDesc.textContent = 'VOC 건의 조회에 실패했습니다. get_admin_voc_inbox 프로그램 또는 SELECT 권한을 확인하십시오. 버그 제보 전달 바랍니다.';
        if (vocPublicAnswers){
          vocPublicAnswers.innerHTML = `
            <section class="voc-answer-column voc-answer-admin">
              <div class="voc-answer-title">
                <strong>조회 실패</strong>
                <span>ADMIN VOC</span>
              </div>
              <div class="voc-answer-list">
                <div class="voc-answer-empty">건의 목록을 불러오지 못했습니다.<br><br>오류: ${escapeHtml(message)}</div>
              </div>
            </section>
          `;
        }
      }
    }

    function vocRenderAdminAffiliationLoading(){
      if (vocPublicTitle) vocPublicTitle.textContent = '소속 변경 요청';
      if (vocPublicDesc) vocPublicDesc.textContent = '대기 중인 소속 변경 요청을 확인하고 승인할 수 있습니다.';
      if (vocPublicAnswers){
        vocPublicAnswers.innerHTML = `
          <section class="voc-answer-column voc-answer-admin">
            <div class="voc-answer-title">
              <strong>요청 조회 중</strong>
              <span>ADMIN HR</span>
            </div>
            <div class="voc-answer-list">
              <div class="voc-answer-empty">접수된 소속 변경 요청을 불러오는 중입니다.</div>
            </div>
          </section>
        `;
      }
    }

    function departmentDefaultsForApproval(key, name){
      const cleanKey = String(key || '').trim();
      const cleanName = String(name || '').trim();
      if (cleanKey === 'vox' || cleanName === '복스') return { key:'vox', name:'복스', badge:'v2.png', team:pickRandomTeam('vox'), grade:DEFAULT_GRADE };
      if (cleanKey === 'valentino' || cleanName === '발렌티노') return { key:'valentino', name:'발렌티노', badge:'v1.png', team:pickRandomTeam('valentino'), grade:DEFAULT_GRADE };
      if (cleanKey === 'velvette' || cleanName === '벨벳') return { key:'velvette', name:'벨벳', badge:'v3.png', team:pickRandomTeam('velvette'), grade:DEFAULT_GRADE };
      return { key:cleanKey || 'unknown', name:cleanName || '미확인 소속', badge:'v1.png', team:pickRandomTeam('unknown'), grade:DEFAULT_GRADE };
    }

    function vocRequestStatusLabel(status){
      const value = String(status || 'pending').toLowerCase();
      if (value === 'approved') return '승인 완료';
      if (value === 'rejected') return '반려';
      return '대기 중';
    }

    let directSecretaryLastAffiliationItems = [];

    function directSecretaryPanelHtml(){
      const staff = directSecretaryGetStaffList();
      const staffCards = staff.length ? staff.map((item) => {
        const label = directSecretaryStaffLabel(item);
        return `
          <article class="voc-answer-card voc-admin-request-card" data-direct-secretary-row="${escapeHtml(item.employeeId)}">
            <span class="voc-admin-request-status" data-direct-secretary-chip="${escapeHtml(item.employeeId)}">상태 확인 중</span>
            <dl>
              <dt>직원 ID</dt>
              <dd>${escapeHtml(item.employeeId)}</dd>
              <dt>표시명</dt>
              <dd>${escapeHtml(label)}</dd>
              <dt>팀</dt>
              <dd><strong>${escapeHtml(DIRECT_SECRETARY_TEAM)}</strong></dd>
              <dt>조건</dt>
              <dd>복스 소속에서만 설정 가능 · 해제 시 이전 복스 팀으로 복귀</dd>
              <dt>현재 상태</dt>
              <dd data-direct-secretary-status="${escapeHtml(item.employeeId)}">원격 프로필 확인 중입니다.</dd>
            </dl>
            <div class="voc-admin-request-actions">
              <button class="voc-approve-request" type="button" data-direct-secretary-action="assign" data-employee-id="${escapeHtml(item.employeeId)}">설정</button>
              <button class="voc-approve-request" type="button" data-direct-secretary-action="release" data-employee-id="${escapeHtml(item.employeeId)}">해제</button>
              <button class="voc-approve-request" type="button" data-direct-secretary-remove="${escapeHtml(item.employeeId)}">목록 삭제</button>
            </div>
          </article>
        `;
      }).join('') : `
        <div class="voc-answer-empty">등록된 직원 ID가 없습니다.<br>아래 입력칸에 직원 ID를 추가한 뒤 설정 버튼을 누르십시오.</div>
      `;

      return `
        <article class="voc-answer-card voc-admin-request-card">
          <div class="voc-answer-question">직속비서팀 지정 관리</div>
          <div class="voc-answer-meta">직원 ID를 등록한 뒤 설정/해제합니다. 직속비서팀은 복스 소속에서만 적용됩니다.</div>
          <dl>
            <dt>직원 ID</dt>
            <dd><input id="directSecretaryEmployeeIdInput" class="search-input" type="text" autocomplete="off" placeholder="예: VT-123456"></dd>
            <dt>표시명</dt>
            <dd><input id="directSecretaryEmployeeNameInput" class="search-input" type="text" autocomplete="off" placeholder="이름 입력"></dd>
          </dl>
          <div class="voc-admin-request-actions">
            <button id="directSecretaryAddBtn" class="voc-approve-request" type="button">목록 추가</button>
          </div>
          <div class="voc-answer-meta">직원 ID 입력칸에 “VT-123456 이름”처럼 한 번에 적어도 자동으로 분리됩니다.</div>
        </article>
        ${staffCards}
      `;
    }

    function directSecretaryBindButtons(){
      if (!vocPublicAnswers) return;
      const addBtn = vocPublicAnswers.querySelector('#directSecretaryAddBtn');
      const idInput = vocPublicAnswers.querySelector('#directSecretaryEmployeeIdInput');
      const nameInput = vocPublicAnswers.querySelector('#directSecretaryEmployeeNameInput');
      if (addBtn) addBtn.addEventListener('click', directSecretaryAddFromForm);
      [idInput, nameInput].forEach((input) => {
        if (!input) return;
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') directSecretaryAddFromForm();
        });
      });
      vocPublicAnswers.querySelectorAll('[data-direct-secretary-action]').forEach((button) => {
        button.addEventListener('click', () => directSecretaryToggle(button.dataset.employeeId, button.dataset.directSecretaryAction, button));
      });
      vocPublicAnswers.querySelectorAll('[data-direct-secretary-remove]').forEach((button) => {
        button.addEventListener('click', () => directSecretaryRemoveFromList(button.dataset.directSecretaryRemove));
      });
      directSecretaryRefreshStatuses();
    }

    function directSecretaryAddFromForm(){
      if (!vocPublicAnswers) return;
      const idInput = vocPublicAnswers.querySelector('#directSecretaryEmployeeIdInput');
      const nameInput = vocPublicAnswers.querySelector('#directSecretaryEmployeeNameInput');
      const parsed = directSecretaryParseStaffInput(idInput ? idInput.value : '', nameInput ? nameInput.value : '');
      if (!parsed.employeeId){
        missionToast('직원 ID를 입력해줘.');
        if (idInput) idInput.focus();
        return;
      }
      const result = directSecretaryUpsertStaff(parsed);
      if (idInput) idInput.value = '';
      if (nameInput) nameInput.value = '';
      missionToast(result.updated ? '목록 갱신 완료.' : '목록 추가 완료.');
      vocRenderAdminAffiliationRows(directSecretaryLastAffiliationItems || []);
    }

    function directSecretaryRemoveFromList(employeeId){
      const id = normalizeDirectSecretaryEmployeeId(employeeId);
      if (!id) return;
      directSecretarySetStaffList(directSecretaryGetStaffList().filter((staff) => staff.employeeId !== id));
      missionToast('목록에서 삭제했습니다.');
      vocRenderAdminAffiliationRows(directSecretaryLastAffiliationItems || []);
    }

    function directSecretarySetStatus(employeeId, text, chipText = '', active = false){
      const statusEl = vocPublicAnswers ? vocPublicAnswers.querySelector(`[data-direct-secretary-status="${escapeCssIdentifier(employeeId)}"]`) : null;
      const chipEl = vocPublicAnswers ? vocPublicAnswers.querySelector(`[data-direct-secretary-chip="${escapeCssIdentifier(employeeId)}"]`) : null;
      if (statusEl) statusEl.innerHTML = text;
      if (chipEl){
        chipEl.textContent = chipText || (active ? '설정됨' : '일반 팀');
        chipEl.classList.toggle('done', !!active);
      }
    }

    function directSecretarySetButtonState(employeeId, active){
      if (!vocPublicAnswers) return;
      const assignBtn = vocPublicAnswers.querySelector(`[data-direct-secretary-action="assign"][data-employee-id="${escapeCssIdentifier(employeeId)}"]`);
      const releaseBtn = vocPublicAnswers.querySelector(`[data-direct-secretary-action="release"][data-employee-id="${escapeCssIdentifier(employeeId)}"]`);
      if (assignBtn) assignBtn.disabled = !!active;
      if (releaseBtn) releaseBtn.disabled = !active;
    }

    async function directSecretaryFetchProfiles(){
      if (!supabaseClient) throw new Error('Supabase 연결 모듈을 찾지 못했습니다.');
      const ids = directSecretaryGetStaffList().map((staff) => staff.employeeId);
      if (!ids.length) return new Map();
      const { data, error } = await supabaseClient
        .from('voxtek_employee_profiles')
        .select('*')
        .in('employee_id', ids);
      if (error) throw error;
      const map = new Map();
      (data || []).forEach((row) => map.set(row.employee_id, row));
      return map;
    }

    async function directSecretaryRefreshStatuses(){
      if (!vocPublicAnswers) return;
      const staffList = directSecretaryGetStaffList();
      if (!staffList.length) return;
      try{
        const profiles = await directSecretaryFetchProfiles();
        staffList.forEach((staff) => {
          const profile = profiles.get(staff.employeeId);
          const team = profile ? String(profile.team || '').trim() : '';
          const deptKey = profile ? String(profile.department_key || '').trim() : '';
          const deptName = profile ? String(profile.department_name || '').trim() : '';
          const active = deptKey === 'vox' && team === DIRECT_SECRETARY_TEAM;
          if (!profile){
            directSecretarySetStatus(staff.employeeId, '원격 프로필 없음 · 설정 시 복스 소속으로 새 프로필이 생성됩니다.', '미등록', false);
            directSecretarySetButtonState(staff.employeeId, false);
            return;
          }
          directSecretarySetStatus(
            staff.employeeId,
            `${escapeHtml(deptName || getDepartmentLabelByKey(deptKey))} 소속 · ${escapeHtml(team || '-')}`,
            active ? '설정됨' : '일반 팀',
            active
          );
          directSecretarySetButtonState(staff.employeeId, active);
        });
      }catch(error){
        console.warn('Direct secretary status load failed:', error);
        staffList.forEach((staff) => {
          directSecretarySetStatus(staff.employeeId, '상태 조회 실패. Supabase 프로필 테이블 접근 권한을 확인하십시오.', '조회 실패', false);
        });
      }
    }

    function directSecretaryProfilePayload(staff, base = {}, team = DIRECT_SECRETARY_TEAM){
      const now = new Date().toISOString();
      const displayName = String(base.display_name || staff.displayName || staff.name || staff.employeeId || '').trim();
      const grade = normalizeGrade(base.grade || DEFAULT_GRADE, DEFAULT_GRADE);
      return {
        employee_id:staff.employeeId,
        display_name:displayName,
        joined_at:base.joined_at || now,
        birthday:base.birthday || null,
        birthday_month_day:base.birthday_month_day || '',
        department_key:'vox',
        department_name:'복스',
        badge_src:'v2.png',
        team,
        grade,
        updated_at:now
      };
    }

    async function directSecretaryPreviousTeamFromEvent(staff){
      if (!supabaseClient || !staff) return '';
      try{
        const { data, error } = await supabaseClient
          .from('voxtek_events')
          .select('detail')
          .eq('event_type', 'DIRECT_SECRETARY_TEAM_ASSIGNED')
          .eq('account_id', staff.employeeId)
          .order('created_at', { ascending:false })
          .limit(1);
        if (error) throw error;
        const detail = Array.isArray(data) && data[0] && typeof data[0].detail === 'object' ? data[0].detail : null;
        return detail ? String(detail.previous_team || '').trim() : '';
      }catch(error){
        console.warn('Direct secretary previous team event lookup failed:', error);
        return '';
      }
    }

    async function directSecretaryRecordEvent(eventType, staff, detail = {}){
      if (!supabaseClient) return;
      try{
        await supabaseClient.from('voxtek_events').insert({
          event_type:eventType,
          account_id:staff.employeeId,
          employee_name:directSecretaryStaffLabel(staff),
          mission_id:null,
          creature_name:null,
          mission_day:null,
          points:null,
          affection:null,
          local_date:typeof missionToday === 'function' ? missionToday() : new Date().toISOString().slice(0, 10),
          session_id:typeof missionSession === 'function' ? missionSession() : '',
          user_agent:navigator.userAgent,
          detail:{
            source:'direct_secretary_team_console',
            employee_id:staff.employeeId,
            employee_name:directSecretaryStaffLabel(staff),
            team:DIRECT_SECRETARY_TEAM,
            client_time:new Date().toISOString(),
            ...detail
          }
        });
      }catch(error){
        console.warn(`[${eventType}] Direct secretary event log failed:`, error);
      }
    }

    async function directSecretaryToggle(employeeId, action, button){
      if (!supabaseClient) return missionToast('Supabase 연결 모듈이 없습니다.');
      const staff = directSecretaryStaffById(employeeId);
      if (!staff) return missionToast('목록에 등록된 직원 ID가 아닙니다.');

      const originalText = button ? button.textContent : '';
      if (button){
        button.disabled = true;
        button.textContent = action === 'assign' ? '설정 중' : '해제 중';
      }

      try{
        const { data:profile, error:selectError } = await supabaseClient
          .from('voxtek_employee_profiles')
          .select('*')
          .eq('employee_id', staff.employeeId)
          .maybeSingle();
        if (selectError) throw selectError;

        if (action === 'assign'){
          const currentTeam = profile ? String(profile.team || '').trim() : '';
          const currentDeptKey = profile ? String(profile.department_key || '').trim() : '';
          const previousTeam = currentDeptKey === 'vox' && currentTeam && currentTeam !== DIRECT_SECRETARY_TEAM
            ? normalizeDirectSecretaryRestoreTeam(currentTeam)
            : normalizeDirectSecretaryRestoreTeam(directSecretaryReadBackup(staff.employeeId)?.previousTeam);

          directSecretarySaveBackup(staff.employeeId, {
            previousTeam,
            previousGrade:profile ? profile.grade : DEFAULT_GRADE,
            previousDepartmentKey:'vox',
            previousDepartmentName:'복스',
            previousBadgeSrc:'v2.png'
          });

          const { error:upsertError } = await supabaseClient
            .from('voxtek_employee_profiles')
            .upsert(directSecretaryProfilePayload(staff, profile || {}, DIRECT_SECRETARY_TEAM), { onConflict:'employee_id' });
          if (upsertError) throw upsertError;

          await directSecretaryRecordEvent('DIRECT_SECRETARY_TEAM_ASSIGNED', staff, {
            previous_team:previousTeam,
            current_team:DIRECT_SECRETARY_TEAM
          });
          missionToast('직속비서팀 설정 완료.');
        } else {
          const backup = directSecretaryReadBackup(staff.employeeId);
          const eventPreviousTeam = backup ? '' : await directSecretaryPreviousTeamFromEvent(staff);
          const restoreTeam = normalizeDirectSecretaryRestoreTeam(backup ? backup.previousTeam : (eventPreviousTeam || (profile ? profile.base_team || profile.team : '')));
          const { error:upsertError } = await supabaseClient
            .from('voxtek_employee_profiles')
            .upsert(directSecretaryProfilePayload(staff, profile || {}, restoreTeam), { onConflict:'employee_id' });
          if (upsertError) throw upsertError;

          directSecretaryRemoveBackup(staff.employeeId);
          await directSecretaryRecordEvent('DIRECT_SECRETARY_TEAM_RELEASED', staff, {
            restored_team:restoreTeam,
            previous_team:DIRECT_SECRETARY_TEAM
          });
          missionToast(`${restoreTeam} 복귀 완료.`);
        }

        await directSecretaryRefreshStatuses();
      }catch(error){
        console.warn('Direct secretary toggle failed:', error);
        missionToast('직속비서팀 처리 실패. 프로필 테이블 권한을 확인해줘.');
      }finally{
        if (button){
          button.textContent = originalText || (action === 'assign' ? '설정' : '해제');
        }
      }
    }

    function vocRenderAdminAffiliationRows(items){
      if (!vocPublicAnswers) return;
      const rows = items.length
        ? items.map((item) => {
            const status = String(item.status || 'pending').toLowerCase();
            const pending = status === 'pending';
            const requestId = item.id || item.request_id || '';
            return `
              <article class="voc-answer-card voc-admin-request-card">
                <span class="voc-admin-request-status ${pending ? '' : 'done'}">${escapeHtml(vocRequestStatusLabel(status))}</span>
                <dl>
                  <dt>직원</dt>
                  <dd>${escapeHtml(item.employee_name || '-')} <span class="voc-answer-meta">${escapeHtml(item.employee_id || '')}</span></dd>
                  <dt>현재 소속</dt>
                  <dd>${escapeHtml(item.current_department || '-')}</dd>
                  <dt>희망 소속</dt>
                  <dd><strong>${escapeHtml(item.requested_department || '-')}</strong></dd>
                  <dt>사유</dt>
                  <dd>${vocFormatAnswerText(item.reason || '-')}</dd>
                  <dt>접수일</dt>
                  <dd>${escapeHtml(item.created_at ? formatDate(item.created_at) : '-')}</dd>
                </dl>
                ${requestId && status !== 'rejected' ? `
                  <div class="voc-admin-request-actions">
                    <button class="voc-approve-request" type="button" data-approve-affiliation="${escapeHtml(String(requestId))}">${pending ? '승인' : '팀 재배정'}</button>
                  </div>
                ` : `<div class="voc-answer-meta">${item.handled_at ? `처리일: ${escapeHtml(formatDate(item.handled_at))}` : '처리된 요청입니다.'}</div>`}
              </article>
            `;
          }).join('')
        : `<div class="voc-answer-empty">대기 중인 소속 변경 요청이 없습니다.</div>`;

      vocPublicAnswers.innerHTML = `
        <section class="voc-answer-column voc-answer-admin">
          <div class="voc-answer-title">
            <strong>소속 변경 요청</strong>
            <span>ADMIN HR</span>
          </div>
          <div class="voc-answer-list">${directSecretaryPanelHtml()}${rows}</div>
        </section>
      `;
      vocBindAffiliationApprovalButtons();
      directSecretaryBindButtons();
    }

    async function vocFetchAdminAffiliationRows(){
      if (!supabaseClient) throw new Error('Supabase 연결 모듈을 찾지 못했습니다.');
      const { data, error } = await supabaseClient
        .from('voxtek_affiliation_requests')
        .select('id, created_at, status, employee_id, employee_name, current_department, requested_department, requested_department_key, reason, admin_note, handled_at')
        .order('created_at', { ascending:false })
        .limit(80);
      if (error) throw error;
      return data || [];
    }

    async function vocLoadAdminAffiliationRequests(){
      vocRenderAdminAffiliationLoading();
      try{
        const items = await vocFetchAdminAffiliationRows();
        directSecretaryLastAffiliationItems = items;
        if (vocPublicDesc) vocPublicDesc.textContent = '소속 변경 요청과 직속비서팀 설정/해제를 처리합니다. 직속비서팀은 복스 소속에서만 적용됩니다.';
        vocRenderAdminAffiliationRows(items);
      }catch(error){
        console.warn('Admin affiliation requests load failed:', error);
        const message = error && error.message ? error.message : '알 수 없는 오류';
        if (vocPublicTitle) vocPublicTitle.textContent = '소속 변경 요청';
        if (vocPublicDesc) vocPublicDesc.textContent = '소속 변경 요청 조회에 실패했습니다. 승인 패치 SQL 실행 여부를 확인하십시오.';
        if (vocPublicAnswers){
          vocPublicAnswers.innerHTML = `
            <section class="voc-answer-column voc-answer-admin">
              <div class="voc-answer-title">
                <strong>조회 실패</strong>
                <span>ADMIN HR</span>
              </div>
              <div class="voc-answer-list">
                <div class="voc-answer-empty">소속 변경 요청을 불러오지 못했습니다.<br><br>오류: ${escapeHtml(message)}</div>
              </div>
            </section>
          `;
        }
      }
    }

    function vocBindAffiliationApprovalButtons(){
      if (!vocPublicAnswers) return;
      vocPublicAnswers.querySelectorAll('[data-approve-affiliation]').forEach((button) => {
        button.addEventListener('click', () => vocApproveAffiliationRequest(button.dataset.approveAffiliation, button));
      });
    }

    async function vocApproveAffiliationRequest(requestId, button){
      if (!requestId || !supabaseClient) return;
      const originalText = button ? button.textContent : '';
      if (button){
        button.disabled = true;
        button.textContent = '처리 중';
      }
      try{
        const { data, error } = await supabaseClient.rpc('approve_voxtek_affiliation_request', {
          p_request_id:Number(requestId),
          p_admin_note:'관리자 승인'
        });
        if (error) throw error;
        missionToast('소속 변경 적용 완료.');
        await vocLoadAdminAffiliationRequests();
      }catch(error){
        console.warn('Approve affiliation RPC failed:', error);
        try{
          await vocApproveAffiliationRequestDirect(requestId);
          missionToast('소속 변경 적용 완료.');
          await vocLoadAdminAffiliationRequests();
        }catch(fallbackError){
          console.warn('Approve affiliation direct fallback failed:', fallbackError);
          if (button){
            button.disabled = false;
            button.textContent = originalText || '승인';
          }
          missionToast('승인 실패. 승인 패치 SQL 실행 여부를 확인해줘.');
        }
      }
    }

    async function vocApproveAffiliationRequestDirect(requestId){
      const { data:request, error:requestError } = await supabaseClient
        .from('voxtek_affiliation_requests')
        .select('*')
        .eq('id', Number(requestId))
        .single();
      if (requestError) throw requestError;
      if (!request) throw new Error('요청을 찾지 못했습니다.');
      const dept = departmentDefaultsForApproval(request.requested_department_key, request.requested_department);
      const now = new Date().toISOString();
      const { error:profileError } = await supabaseClient
        .from('voxtek_employee_profiles')
        .upsert({
          employee_id:request.employee_id,
          display_name:request.employee_name || request.employee_id,
          department_key:dept.key,
          department_name:dept.name,
          badge_src:dept.badge,
          team:dept.team,
          grade:dept.grade,
          updated_at:now
        }, { onConflict:'employee_id' });
      if (profileError) throw profileError;
      const { error:updateError } = await supabaseClient
        .from('voxtek_affiliation_requests')
        .update({ status:'approved', admin_note:'관리자 승인', handled_at:now })
        .eq('id', Number(requestId));
      if (updateError) throw updateError;
    }

    function vocSetAdminAffiliationOpen(open){
      if (!vocPublicBoard) return;
      vocPublicActiveLane = open ? 'admin-affiliation' : '';

      if (open){
        vocLoadAdminAffiliationRequests();
      }

      vocPublicBoard.classList.toggle('is-open', !!open);
      vocPublicBoard.setAttribute('aria-hidden', open ? 'false' : 'true');
      vocSetPublicButtons(false, '');
      vocSetAdminInboxButton(false);
      vocSetAdminAffiliationButton(open);

      if (open){
        requestAnimationFrame(() => {
          vocPublicBoard.scrollIntoView({ block:'nearest', behavior:'smooth' });
        });
      } else {
        vocScrollToBottom(true);
      }
    }

    function vocSetAdminInboxOpen(open){
      if (!vocPublicBoard) return;
      vocPublicActiveLane = open ? 'admin-inquiries' : '';

      if (open){
        vocLoadAdminVocSubmissions();
      }

      vocPublicBoard.classList.toggle('is-open', !!open);
      vocPublicBoard.setAttribute('aria-hidden', open ? 'false' : 'true');
      vocSetPublicButtons(false, '');
      vocSetAdminAffiliationButton(false);
      vocSetAdminInboxButton(open);

      if (open){
        requestAnimationFrame(() => {
          vocPublicBoard.scrollIntoView({ block:'nearest', behavior:'smooth' });
        });
      } else {
        vocScrollToBottom(true);
      }
    }

    function vocBindPublicBoard(){
      if (!vocPublicBoard) return;
      vocPublicButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const laneKey = button.dataset.vocLane || 'valentino';
          const isSameOpen = vocPublicBoard.classList.contains('is-open') && vocPublicActiveLane === laneKey;
          vocSetPublicBoardOpen(!isSameOpen, laneKey);
        });
      });
      if (vocAdminInboxToggle){
        vocAdminInboxToggle.addEventListener('click', () => {
          const isSameOpen = vocPublicBoard.classList.contains('is-open') && vocPublicActiveLane === 'admin-inquiries';
          vocSetAdminInboxOpen(!isSameOpen);
        });
      }
      if (vocAdminAffiliationToggle){
        vocAdminAffiliationToggle.addEventListener('click', () => {
          const isSameOpen = vocPublicBoard.classList.contains('is-open') && vocPublicActiveLane === 'admin-affiliation';
          vocSetAdminAffiliationOpen(!isSameOpen);
        });
      }
      if (vocPublicClose){
        vocPublicClose.addEventListener('click', () => {
          if (vocPublicActiveLane === 'admin-affiliation') vocSetAdminAffiliationOpen(false);
          else if (vocPublicActiveLane === 'admin-inquiries') vocSetAdminInboxOpen(false);
          else vocSetPublicBoardOpen(false);
        });
      }
    }

    function vocClearActions(){
      if (vocActions) vocActions.innerHTML = '';
    }

    function vocAppendBubble(side, html, name = ''){
      if (!vocRoom) return null;
      const isLeft = side === 'left';
      const row = document.createElement('div');
      row.className = 'voc-row ' + (isLeft ? 'left' : 'right');
      if (isLeft){
        row.innerHTML = `
          <div class="voc-avatar">
            <img src="icon_5.png" alt="VOC" onerror="assetFail(this)" loading="lazy" decoding="async">
            <div class="fallback">VOC</div>
          </div>
          <div class="voc-stack">
            <div class="voc-name">${escapeHtml(name || 'VOXTEK VOC')}</div>
            <div class="voc-bubble left">${html}</div>
          </div>
        `;
      } else {
        row.innerHTML = `
          <div class="voc-stack">
            <div class="voc-bubble right">${html}</div>
          </div>
        `;
      }
      vocRoom.appendChild(row);
      vocScroll();
      return row;
    }

    function vocAddChoice(label, handler, primary = false){
      if (!vocActions) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'voc-choice' + (primary ? ' primary' : '');
      btn.innerHTML = label;
      btn.addEventListener('click', handler);
      vocActions.appendChild(btn);
      vocScrollToBottom(true);
    }

    function vocSetStatus(text){
      if (vocStatus) vocStatus.textContent = text;
    }

    function vocBeginAdmin(employee){
      const profile = getAdminProfile(employee.adminKey);
      if (!profile) return;
      vocSetLauncherMode(true);
      vocFlowState = 'admin';
      vocRoom.innerHTML = `<div class="voc-date">${missionFormatDateKey(missionToday())}</div>`;
      vocSetAdminInboxOpen(false);
      vocSetAdminAffiliationOpen(false);
      vocClearActions();
      vocSetStatus(profile.line);
      vocScrollToBottom(true);
      setTimeout(() => {
        vocAppendBubble('left', `안녕하십니까, ${escapeHtml(profile.name)} 사장님.<br>행복한 근무 환경을 만들기 위해 최소한의 노력을 다하는 복스테크 사내 VOC 센터입니다. 시키실 일이 있다면 말씀 주시면 최우선 처리하겠습니다.`);
        vocShowAdminChoices(profile);
        vocScrollToBottom(true);
      }, 220);
    }

    function vocShowAdminChoices(profile){
      vocClearActions();
      const others = Object.values(ADMIN_PROFILES).filter(item => item.key !== profile.key);
      others.forEach((target) => {
        vocAddChoice(`${escapeHtml(target.name)} 불러줘.`, () => vocAdminCallExecutive(profile, target));
      });
      vocAddChoice('시킬 일이 있어.', () => vocAdminTask(profile), true);
      vocAddChoice('문의 종료하기', () => vocAdminClose(profile));
      vocScrollToBottom(true);
    }

    function vocAdminClose(profile){
      vocClearActions();
      vocSetStatus('CLOSED');
      vocAppendBubble('right', '문의 종료하기');
      setTimeout(() => {
        vocAppendBubble('left', `${escapeHtml(profile.name)} 사장님, 관리자 VOC 회선을 종료하겠습니다.<br>필요하시면 언제든 다시 호출해 주십시오.`);
        vocClearActions();
        vocAddChoice('다시 호출하기', () => vocBegin(), true);
        vocScrollToBottom(true);
      }, 300);
    }

    function vocAdminCallExecutive(profile, target){
      vocClearActions();
      vocAppendBubble('right', `${escapeHtml(target.name)} 불러줘.`);
      setTimeout(() => {
        vocAppendBubble('left', '네, 바로 전달 드리겠습니다. 추가로 시키실 일이 있을까요?');
        vocShowAdminCommandInput(profile, { type:'call', target:target.key, targetName:target.name });
      }, 300);
    }

    function vocAdminTask(profile){
      vocClearActions();
      vocAppendBubble('right', '시킬 일이 있어.');
      setTimeout(() => {
        vocAppendBubble('left', '네, 말씀 주시면 진행하겠습니다.');
        vocShowAdminCommandInput(profile, { type:'task' });
      }, 300);
    }

    function vocShowAdminCommandInput(profile, meta = {}){
      vocClearActions();
      const wrap = document.createElement('div');
      wrap.className = 'voc-input-wrap active';
      wrap.innerHTML = `
        <textarea id="vocAdminCommandText" class="voc-input" maxlength="700" placeholder="지시 내용을 입력하세요."></textarea>
        <button id="vocAdminCommandSend" class="voc-send" type="button">전송</button>
        <div class="voc-mini-note">※ 관리자 지시는 내부 회선 기록으로 분류됩니다.</div>
      `;
      vocActions.appendChild(wrap);
      const textarea = document.getElementById('vocAdminCommandText');
      const send = document.getElementById('vocAdminCommandSend');
      if (textarea) textarea.focus();
      if (send){
        send.addEventListener('click', () => {
          const text = textarea ? textarea.value.trim() : '';
          if (!text){
            missionToast('내용이 비어 있어.');
            return;
          }
          vocClearActions();
          vocAppendBubble('right', escapeHtml(text).replace(/\n/g, '<br>'));
          saveAdminVocCommand(profile, text, meta);
          setTimeout(() => {
            vocAppendBubble('left', '확인했습니다. 오늘도 복스테크를 위해 몸 바쳐 일하는 센터가 되겠습니다.');
            vocShowAdminChoices(profile);
            vocScrollToBottom(true);
          }, 300);
        });
      }
      vocScrollToBottom(true);
    }

    function saveAdminVocCommand(profile, text, meta = {}){
      const row = { at:new Date().toISOString(), admin:profile.name, handle:profile.handle, text, meta };
      try{
        const key = `voxtek_admin_voc_commands_${profile.key}_v1`;
        const logs = JSON.parse(localStorage.getItem(key) || '[]');
        logs.push(row);
        localStorage.setItem(key, JSON.stringify(logs.slice(-100)));
      }catch(error){
        console.warn('Admin VOC command local log failed:', error);
      }
      if (supabaseClient){
        supabaseClient.from('voxtek_events').insert({
          event_type:'VOC_SUBMITTED',
          account_id:`ADMIN-${profile.key.toUpperCase()}`,
          employee_name:profile.name,
          local_date:missionToday(),
          session_id:missionSession(),
          user_agent:navigator.userAgent,
          detail:{
            source:'admin_voc_center',
            admin_key:profile.key,
            admin_name:profile.name,
            handle:profile.handle,
            department:`관리자 · ${profile.name}`,
            department_line:profile.line,
            inquiry_type:meta.type || 'task',
            target:meta.target || '',
            target_name:meta.targetName || '',
            message:text,
            text,
            client_time:row.at
          }
        }).then(({ error }) => { if (error) console.warn('Admin VOC command log failed:', error); });
      }
      missionToast('관리자 지시 전송 완료.');
    }

    function vocShowAdminNoteInput(profile){
      vocShowAdminCommandInput(profile, { type:'note' });
    }

    function saveAdminVocNote(profile, text){
      saveAdminVocCommand(profile, text, { type:'note' });
    }

    function vocBegin(){
      const employee = getActiveEmployee();
      if (!employee || !vocRoom || !vocActions) return;
      if (isAdminEmployee(employee)){
        vocBeginAdmin(employee);
        return;
      }
      vocSetLauncherMode(false);
      const dept = getDepartmentInfo(employee);
      vocFlowState = 'intro';
      vocRoom.innerHTML = `<div class="voc-date">${missionFormatDateKey(missionToday())}</div>`;
      vocRenderPublicAnswers('valentino');
      vocSetPublicBoardOpen(false);
      vocClearActions();
      vocSetStatus('CONNECTING');
      vocScrollToBottom(true);
      setTimeout(() => {
        vocAppendBubble('left', '안녕하십니까. 행복한 근무 환경을 만들기 위해 최소한의 노력을 다하는 복스테크 사내 VOC 센터입니다.<br>성함과 소속을 말씀해 주시면 해당 소속 대표 회선으로 문의를 분류하겠습니다.');
        vocSetStatus(dept.line);
        vocClearActions();
        vocAddChoice(`안녕하세요. 저는 ${escapeHtml(dept.name)} 님 직속 ${escapeHtml(employee.name)}입니다.`, () => vocConfirmIdentity(employee, dept), true);
        vocScrollToBottom(true);
      }, 220);
    }

    function vocConfirmIdentity(employee, dept){
      vocClearActions();
      vocAppendBubble('right', `안녕하세요. 저는 ${escapeHtml(dept.name)} 님 직속 ${escapeHtml(employee.name)}입니다.`);
      vocSetStatus('INQUIRY');
      setTimeout(() => {
        vocAppendBubble('left', `${escapeHtml(employee.name)} 님, 확인되었습니다.<br>현재 소속은 ${escapeHtml(dept.name)} 님 직속으로 분류됩니다. 어떠한 일로 문의를 주셨습니까?`);
        vocShowInquiryChoices(employee, dept);
        vocScrollToBottom(true);
      }, 360);
    }

    function vocShowInquiryChoices(employee, dept){
      vocClearActions();
      vocAddChoice('하... 그냥 너무 힘들어요. 혹시 퇴사하면 어떻게 되나요?', () => vocAnswerPreset('quit', employee, dept));
      vocAddChoice('소속을 바꾸고 싶은데 방법이 없을까요?', () => vocAnswerPreset('change', employee, dept));
      vocAddChoice('불편사항을 접수하고 싶은데 말씀드려도 될까요?', () => vocAnswerPreset('complaint', employee, dept));
      vocScrollToBottom(true);
    }

    function vocAnswerPreset(type, employee, dept){
      const userTexts = {
        quit:'하... 그냥 너무 힘들어요. 혹시 퇴사하면 어떻게 되나요?',
        change:'소속을 바꾸고 싶은데 방법이 없을까요?',
        complaint:'불편사항을 접수하고 싶은데 말씀드려도 될까요?'
      };
      vocClearActions();
      vocAppendBubble('right', escapeHtml(userTexts[type]));
      if (type === 'quit'){
        setTimeout(() => {
          vocAppendBubble('left', '확인했습니다. 퇴사 시 현재 사원 기록, 근속일, 임무 데이터는 영구 삭제되며 복구되지 않습니다.<br>다만 복스테크는 언제나 새 인력을 환영하므로 재입사는 가능합니다. 단, 이전 기록이 존중될 거라는 착각은 권장하지 않습니다.');
          vocShowSimpleEnd(employee, dept, type);
        }, 360);
        return;
      }
      if (type === 'change'){
        setTimeout(() => {
          vocAppendBubble('left', '소속 변경 요청을 접수하려면 희망 소속을 선택하십시오.<br>승인 전까지 현재 소속은 유지되며, 요청 내용은 인사 검토 기록으로 남습니다.');
          vocShowAffiliationChoices(employee, dept);
        }, 360);
        return;
      }
      setTimeout(() => {
        vocAppendBubble('left', '접수 가능합니다. 작성하신 내용은 담당 대표님께 전달됩니다.<br>단, 불필요한 장문, 도발, 헛소리 등으로 그분들의 기분을 자극할 경우 신변 안전은 보장하지 않습니다.');
        vocShowFeedbackInput(employee, dept);
      }, 360);
    }

    function vocShowAffiliationChoices(employee, dept){
      vocClearActions();
      const options = [
        { key:'vox', name:'복스' },
        { key:'valentino', name:'발렌티노' },
        { key:'velvette', name:'벨벳' }
      ];
      options.forEach((target) => {
        vocAddChoice(`${escapeHtml(target.name)} 소속으로 변경 요청`, () => vocAskAffiliationReason(employee, dept, target), target.name !== dept.name);
      });
      vocAddChoice('요청 취소', () => {
        vocAppendBubble('right', '요청 취소');
        vocShowSimpleEnd(employee, dept, 'change_cancelled');
      });
      vocScrollToBottom(true);
    }

    function vocAskAffiliationReason(employee, dept, target){
      vocClearActions();
      vocAppendBubble('right', `${escapeHtml(target.name)} 소속으로 변경 요청`);
      setTimeout(() => {
        vocAppendBubble('left', `${escapeHtml(target.name)} 소속으로 변경을 요청하셨습니다.<br>변경 사유를 자유롭게 입력하십시오. 불필요한 말도 기록은 됩니다.`);
        vocShowAffiliationReasonInput(employee, dept, target);
      }, 300);
    }

    function vocShowAffiliationReasonInput(employee, dept, target){
      vocClearActions();
      const wrap = document.createElement('div');
      wrap.className = 'voc-input-wrap active';
      wrap.innerHTML = `
        <textarea id="vocAffiliationReasonText" class="voc-input" maxlength="600" placeholder="소속 변경 사유를 입력하세요."></textarea>
        <button id="vocAffiliationReasonSend" class="voc-send" type="button">전송</button>
        <div class="voc-mini-note">※ 요청은 접수 기록으로 저장됩니다.</div>
      `;
      vocActions.appendChild(wrap);
      const textarea = document.getElementById('vocAffiliationReasonText');
      const send = document.getElementById('vocAffiliationReasonSend');
      if (textarea) textarea.focus();
      if (send){
        send.addEventListener('click', () => {
          const reason = textarea ? textarea.value.trim() : '';
          if (!reason){
            missionToast('변경 사유가 비어 있습니다.');
            return;
          }
          vocClearActions();
          vocAppendBubble('right', escapeHtml(reason).replace(/\n/g, '<br>'));
          vocFinish(employee, dept, {
            type:'affiliation_change_request',
            message:`희망 소속: ${target.name}\n변경 사유: ${reason}`,
            requestedDepartment:target.name,
            requestedDepartmentKey:target.key,
            currentDepartment:dept.name,
            reason
          });
        });
      }
      vocScrollToBottom(true);
    }

    function vocShowSimpleEnd(employee, dept, type){
      vocClearActions();
      vocAddChoice('도움이 되었습니다. 감사합니다.', () => {
        vocClearActions();
        vocAppendBubble('right', '도움이 되었습니다. 감사합니다.');
        vocFinish(employee, dept, { type, message:'' });
      }, true);
      vocScrollToBottom(true);
    }

    function vocShowFeedbackInput(employee, dept){
      vocClearActions();
      const wrap = document.createElement('div');
      wrap.className = 'voc-input-wrap active';
      wrap.innerHTML = `
        <textarea id="vocFeedbackText" class="voc-input" maxlength="600" placeholder="문의 및 건의사항을 입력하세요."></textarea>
        <button id="vocFeedbackSend" class="voc-send" type="button">전송</button>
        <div class="voc-mini-note">※ 입력한 내용은 복스테크 내부 기록으로 분류됩니다.</div>
      `;
      vocActions.appendChild(wrap);
      const textarea = document.getElementById('vocFeedbackText');
      const send = document.getElementById('vocFeedbackSend');
      if (textarea) textarea.focus();
      if (send){
        send.addEventListener('click', () => {
          const text = textarea ? textarea.value.trim() : '';
          if (!text){
            missionToast('내용이 비어 있어.');
            return;
          }
          vocClearActions();
          vocAppendBubble('right', escapeHtml(text).replace(/\n/g, '<br>'));
          vocFinish(employee, dept, { type:'complaint', message:text });
        });
      }
      vocScrollToBottom(true);
    }

    async function vocInsertSupabaseRow(supabaseRow){
      console.log('[VOC] insert payload:', JSON.parse(JSON.stringify(supabaseRow)));

      if (supabaseClient){
        try{
          const { error } = await supabaseClient
            .from('voxtek_events')
            .insert(supabaseRow);

          if (!error){
            console.log('[VOC] Supabase insert success.');
            return { ok:true, method:'supabase-js' };
          }

          console.warn('[VOC] supabase-js insert failed. Trying REST fallback:', error);
        }catch(error){
          console.warn('[VOC] supabase-js threw. Trying REST fallback:', error);
        }
      } else {
        console.warn('[VOC] supabaseClient is not available. Trying REST fallback.');
      }

      try{
        const response = await fetch(`${SUPABASE_URL}/rest/v1/voxtek_events`, {
          method:'POST',
          headers:{
            apikey:SUPABASE_ANON_KEY,
            Authorization:`Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type':'application/json',
            Prefer:'return=minimal'
          },
          body:JSON.stringify(supabaseRow)
        });

        const text = await response.text();
        let data = null;
        try{ data = text ? JSON.parse(text) : null; }catch(error){ data = text; }

        console.log('[VOC] REST fallback response:', response.status, data);

        if (response.ok){
          return { ok:true, method:'rest' };
        }

        return { ok:false, method:'rest', error:data, status:response.status };
      }catch(error){
        console.error('[VOC] REST fallback threw:', error);
        return { ok:false, method:'rest', error };
      }
    }

    function vocFinish(employee, dept, payload){
      vocSetStatus('COMPLETED');

      const row = {
        at:new Date().toISOString(),
        employeeName:employee ? employee.name : '',
        employeeId:employee ? (employee.employeeId || '') : '',
        department:dept ? dept.name : '',
        departmentLine:dept ? dept.line : '',
        type:payload ? payload.type : '',
        message:payload ? payload.message : '',
        requestedDepartment:payload ? (payload.requestedDepartment || '') : '',
        requestedDepartmentKey:payload ? (payload.requestedDepartmentKey || '') : '',
        currentDepartment:payload ? (payload.currentDepartment || (dept ? dept.name : '')) : (dept ? dept.name : ''),
        reason:payload ? (payload.reason || '') : ''
      };

      try{
        const key = 'voxtek_voc_logs_v1';
        const logs = JSON.parse(localStorage.getItem(key) || '[]');
        logs.push(row);
        localStorage.setItem(key, JSON.stringify(logs.slice(-100)));
      }catch(error){
        console.warn('VOC local log failed:', error);
      }

      try{
        const state = typeof missionEnsureState === 'function' ? missionEnsureState() : null;
        const mission = state && state.currentMission ? state.currentMission : null;
        // recordStructuredAffiliationRequest(row);

        const supabaseRow = {
          event_type: row.type === 'affiliation_change_request' ? 'AFFILIATION_CHANGE_REQUEST' : 'VOC_SUBMITTED',
          account_id: state ? state.accountId : (employee ? (employee.employeeId || employee.name) : ''),
          employee_name: employee ? employee.name : '',
          mission_id: mission ? mission.missionId : null,
          creature_name: mission ? mission.creatureName : null,
          mission_day: mission ? missionDay(mission) : null,
          points: mission ? mission.points : null,
          affection: mission ? mission.affection : null,
          local_date: typeof missionToday === 'function' ? missionToday() : new Date().toISOString().slice(0, 10),
          session_id: typeof missionSession === 'function' ? missionSession() : '',
          user_agent: navigator.userAgent,
          detail: {
            source: 'voc_center',
            department: row.department,
            department_line: row.departmentLine,
            inquiry_type: row.type,
            message: row.message,
            employee_id: row.employeeId,
            requested_department: row.requestedDepartment,
            requested_department_key: row.requestedDepartmentKey,
            current_department: row.currentDepartment,
            reason: row.reason,
            client_time: row.at
          }
        };

        vocInsertSupabaseRow(supabaseRow).then((result) => {
          if (result && result.ok){
            console.log('[VOC] Supabase log sent by', result.method);
            missionToast('문의 내용 전송 완료.');
          } else {
            console.warn('[VOC] Supabase log failed after all attempts:', result);
            missionToast('문의는 로컬에 기록됨. 콘솔 오류 확인 필요. 버그 제보 바람.');
          }
        });
      }catch(error){
        console.warn('VOC Supabase log failed:', error);
        missionToast('문의는 로컬에 기록됨. 데이터 베이스 전송 실패. 버그 제보 바람.');
      }

      setTimeout(() => {
        vocAppendBubble('left', '문의 및 건의 주신 내용은 더욱 더 나은 복스테크가 되기 위한 밑거름으로 쓰겠습니다. 감사합니다.');
        vocClearActions();
        vocAddChoice('채팅 종료', () => { vocClearActions(); vocSetStatus('CLOSED'); vocAppendBubble('left', '상담이 종료되었습니다. 창을 닫거나 재문의를 선택해 주세요.'); vocScrollToBottom(true); });
        vocAddChoice('재문의 하기', () => vocBegin(), true);
        vocScrollToBottom(true);
      }, 360);
    }

    function updateClock(){
      const now = new Date();
      clockChip.textContent = `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    function setSoundState(on){
      localStorage.setItem(SOUND_KEY, on ? 'on' : 'off');
      soundToggle.textContent = on ? 'SOUND ON' : 'SOUND OFF';
    }

    soundToggle.addEventListener('click', async () => {
      const isOn = localStorage.getItem(SOUND_KEY) === 'on';
      if (isOn){
        bgAudio.pause();
        bgAudio.currentTime = 0;
        setSoundState(false);
      } else {
        try{
          await bgAudio.play();
          setSoundState(true);
        } catch (e){
          setSoundState(false);
        }
      }
    });

    function restoreSound(){
      const isOn = localStorage.getItem(SOUND_KEY) === 'on';
      if (isOn){
        bgAudio.play().then(() => setSoundState(true)).catch(() => setSoundState(false));
      } else {
        setSoundState(false);
      }
    }

    function getYouTubeVideoId(url){
      try{
        const parsedUrl = new URL(url);
        if (parsedUrl.hostname.includes('youtu.be')) return parsedUrl.pathname.slice(1);
        if (parsedUrl.searchParams.get('v')) return parsedUrl.searchParams.get('v');
        if (parsedUrl.pathname.includes('/embed/')) return parsedUrl.pathname.split('/embed/')[1].split('?')[0];
        if (parsedUrl.pathname.includes('/shorts/')) return parsedUrl.pathname.split('/shorts/')[1].split('?')[0];
        return url;
      }catch(error){
        return url;
      }
    }

    function getYouTubePlaylistId(value){
      try{
        const parsedUrl = new URL(value);
        return parsedUrl.searchParams.get('list') || value;
      }catch(error){
        return value;
      }
    }

    function getYouTubeEmbedOrigin(){
      if (window.location && window.location.origin && /^https?:/i.test(window.location.origin)){
        return window.location.origin;
      }
      return 'https://vox403.github.io';
    }

    function makeYouTubeVideoEmbedUrl(url){
      const id = getYouTubeVideoId(url);
      const params = new URLSearchParams({
        autoplay:'1',
        playsinline:'1',
        rel:'0',
        enablejsapi:'1',
        origin:getYouTubeEmbedOrigin()
      });
      return `https://www.youtube.com/embed/${encodeURIComponent(id)}?${params.toString()}`;
    }

    function makeYouTubePlaylistEmbedUrl(value){
      const id = getYouTubePlaylistId(value);
      const params = new URLSearchParams({
        listType:'playlist',
        list:id,
        autoplay:'1',
        playsinline:'1',
        rel:'0',
        enablejsapi:'1',
        origin:getYouTubeEmbedOrigin()
      });
      return `https://www.youtube.com/embed?${params.toString()}`;
    }

    function resetBroadcastPlayback(showIntro = true){
      if (broadcastYoutube){
        broadcastYoutube.src = '';
        broadcastYoutube.style.display = 'none';
      }
      if (broadcastIntro) broadcastIntro.style.display = showIntro ? 'flex' : 'none';
      if (broadcastCurrentChannel) broadcastCurrentChannel.textContent = 'SIGNAL WAITING...';
    }

    function playBroadcastChannel(button){
      if (!button || !broadcastYoutube) return;
      const kind = button.dataset.kind || 'video';
      const channelName = button.dataset.name || 'BROADCAST';
      const src = kind === 'playlist'
        ? makeYouTubePlaylistEmbedUrl(button.dataset.playlist || '')
        : makeYouTubeVideoEmbedUrl(button.dataset.youtube || '');
      if (broadcastIntro) broadcastIntro.style.display = 'none';
      broadcastYoutube.style.display = 'block';
      broadcastYoutube.src = src;
      if (broadcastCurrentChannel) broadcastCurrentChannel.textContent = `NOW PLAYING :: ${channelName}`;
      const employee = getActiveEmployee();
      if (employee && !isAdminEmployee(employee)){
        sendEmployeeEvent('BROADCAST_CHANNEL_PLAYED', employee, {
          channel_name:channelName,
          channel_kind:kind,
          source:kind === 'playlist' ? (button.dataset.playlist || '') : (button.dataset.youtube || '')
        });
      }
    }

    function applyMusicVideoSource(){
      resetBroadcastPlayback(true);
    }

    broadcastChannelButtons.forEach((button) => {
      button.addEventListener('click', () => playBroadcastChannel(button));
    });

    function bringFront(win){
      if (!win) return;
      zCounter += 1;
      win.style.zIndex = zCounter;
    }

    function syncWindowLayerState(){
      const hasVisible = windows.some(win => !win.classList.contains('hidden'));
      windowLayer.classList.toggle('has-window', hasVisible);
    }

    function centerWindow(win){
      if (!win) return;
      if (window.matchMedia('(max-width: 720px)').matches){
        const body = win.querySelector('.window-body');
        if (body) body.scrollTop = 0;
        win.style.left = '';
        win.style.top = '';
        return;
      }
      const layerRect = windowLayer.getBoundingClientRect();
      const winRect = win.getBoundingClientRect();
      const isSupportWindow = win.id === 'window-support';
      const left = Math.max(12, Math.round((layerRect.width - winRect.width) / 2));
      const top = isSupportWindow
        ? Math.max(8, Math.round((layerRect.height - winRect.height) / 2))
        : Math.max(22, Math.round((layerRect.height - winRect.height) / 2) - 10);
      win.style.left = `${left}px`;
      win.style.top = `${top}px`;
    }

    function closeAllWindows(exceptId = ''){
      windows.forEach(win => {
        if (win.id !== exceptId){
          closeWindow(win.id);
        }
      });
    }

    function openApp(app){
      const win = document.getElementById(`window-${app}`);
      if (!win) return;
      closeAllWindows(win.id);
      win.classList.remove('hidden');
      syncWindowLayerState();
      centerWindow(win);
      bringFront(win);

      if (app === 'mail'){
        activeMailId = '';
        renderMailInbox('');
      }

      if (app === 'idcard'){
        const employee = getActiveEmployee();
        if (employee){
          renderIdCard(employee);
          syncEmployeeFromRemoteProfile(employee).then((syncedEmployee) => {
            if (syncedEmployee) renderIdCard(syncedEmployee);
          });
        }
      }

      if (app === 'gallery'){
        renderGallery();
      }

      if (app === 'helltalk'){
        missionRender();
      }

      if (app === 'evaluation'){
        renderEvaluation();
      }

      if (app === 'support'){
        vocBegin();
        vocScrollToBottom(true);
      }

      if (app === 'music'){
        applyMusicVideoSource();
      }

      if (app === 'internet'){
        applyThemeMode('default');
        queueInternetStabilize();
      } else if (document.body.classList.contains('alastor-mode')){
        applyThemeMode('default');
      }
    }

    function closeWindow(id){
      const win = document.getElementById(id);
      if (!win) return;
      win.classList.add('hidden');
      syncWindowLayerState();
      if (id === 'window-internet'){
        applyThemeMode('default');
      }
      if (id === 'window-music'){
        if (musicVideo) musicVideo.pause();
        resetBroadcastPlayback(true);
      }
    }

    desktopIcons.forEach(btn => {
      btn.addEventListener('click', () => openApp(btn.dataset.app));
    });

    document.querySelectorAll('.window').forEach(win => {
      win.addEventListener('mousedown', () => bringFront(win));
    });

    document.querySelectorAll('.window-close').forEach(btn => {
      btn.addEventListener('click', () => closeWindow(btn.dataset.close));
    });

    windowLayer.addEventListener('click', (e) => {
      if (!window.matchMedia('(max-width: 720px)').matches) return;
      if (e.target !== windowLayer) return;
      closeAllWindows();
      syncWindowLayerState();
      applyThemeMode('default');
    });

    function applyThemeMode(mode){
      if (mode === 'alastor'){
        document.body.classList.add('alastor-mode');
      } else {
        document.body.classList.remove('alastor-mode');
      }
    }

    function normalizeQuery(value){
      return value.toLowerCase().replace(/\s+/g,'').replace(/[^a-z0-9가-힣]/g,'');
    }

    function findWikiEntry(query){
      const normalized = normalizeQuery(query);
      if (!normalized) return null;
      return Object.values(wikiData).find(item => item.aliases.some(alias => normalized.includes(normalizeQuery(alias))));
    }

    function buildProfileGrid(profile){
      return Object.entries(profile).map(([key, value]) => `
        <dt>${escapeHtml(key)}</dt>
        <dd>${escapeHtml(value)}</dd>
      `).join('');
    }

    function stabilizeInternetWindow(){
      if (!internetWindow || internetWindow.classList.contains('hidden')) return;
      if (internetWindowBody) internetWindowBody.scrollTop = 0;
      centerWindow(internetWindow);
    }

    function queueInternetStabilize(){
      stabilizeInternetWindow();
      requestAnimationFrame(stabilizeInternetWindow);
      setTimeout(stabilizeInternetWindow, 80);
      setTimeout(stabilizeInternetWindow, 220);
    }

    function bindInternetAssetStabilizers(){
      if (!searchResult) return;
      searchResult.querySelectorAll('img').forEach((img) => {
        img.addEventListener('load', stabilizeInternetWindow, { once:true });
        img.addEventListener('error', stabilizeInternetWindow, { once:true });
      });
    }

    function buildWiki(entry){
      searchResult.innerHTML = `
        <div class="wiki">
          <aside class="wiki-left">
            <div class="wiki-image">
              <img src="${entry.image}" alt="${escapeHtml(entry.ko)} 이미지" onerror="assetFail(this)" loading="lazy" decoding="async">
              <div class="asset-fallback">${escapeHtml(entry.image)}</div>
            </div>
            <div>
              <div class="name-ko">${escapeHtml(entry.ko)}</div>
              <div class="name-en">${escapeHtml(entry.en)}</div>
            </div>
          </aside>

          <div class="wiki-right">
            <section class="wiki-right-top">
              <dl class="profile-grid">
                ${buildProfileGrid(entry.profile)}
              </dl>
            </section>

            <section class="wiki-right-bottom">
              ${entry.description}
            </section>
          </div>
        </div>
      `;
      applyThemeMode(entry.theme === 'alastor' ? 'alastor' : 'default');
      bindInternetAssetStabilizers();
      queueInternetStabilize();
    }

    function runSearch(){
      const value = searchInput.value.trim();
      const entry = findWikiEntry(value);
      if (!value){
        searchResult.innerHTML = `
          <div class="search-empty">
            <strong>검색어가 비어 있습니다.</strong><br>
            적어도 이름 하나는 입력해. 그래야 보여줄 만한 자료를 꺼내오지.
          </div>
        `;
        applyThemeMode('default');
        queueInternetStabilize();
        return;
      }

      if (!entry){
        searchResult.innerHTML = `
          <div class="search-empty">
            <strong>검색 결과 없음</strong><br>
            입력한 키워드와 일치하는 데이터가 없습니다.<br>
            추천 검색어: 복스, 발렌티노, 벨벳, 알래스터, 엔젤 더스트, 샬럿 모닝스타, vees
            <div class="search-note">※ 버그 발견 시 제보 바랍니다.</div>
          </div>
        `;
        applyThemeMode('default');
        queueInternetStabilize();
        return;
      }

      buildWiki(entry);
    }

    searchBtn.addEventListener('click', runSearch);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') runSearch();
    });
    document.querySelectorAll('.tag').forEach(tag => {
      tag.addEventListener('click', () => {
        searchInput.value = tag.dataset.query;
        runSearch();
      });
    });

    function renderGallery(){
      const item = galleryItems[currentGallery];
      galleryImage.style.display = 'block';
      galleryFallback.style.display = 'none';
      galleryImage.src = item.src;
      galleryImage.alt = `VEES 공식 일러스트 ${currentGallery + 1}`;
      galleryFallback.textContent = item.label;
      galleryImage.onerror = function(){
        galleryImage.style.display = 'none';
        galleryFallback.style.display = 'flex';
      };
      galleryIndex.textContent = `${pad2(currentGallery + 1)} / ${pad2(galleryItems.length)}`;
    }

    galleryPrev.addEventListener('click', () => {
      currentGallery = (currentGallery - 1 + galleryItems.length) % galleryItems.length;
      renderGallery();
    });

    galleryNext.addEventListener('click', () => {
      currentGallery = (currentGallery + 1) % galleryItems.length;
      renderGallery();
    });

    function renderIdCard(employee){
      if (!employee) return;
      const card = document.querySelector('.id-card');
      const rowLabels = Array.from(document.querySelectorAll('.id-row dt'));
      const admin = isAdminEmployee(employee);
      if (card) card.classList.toggle('admin-id-card', admin);

      if (admin){
        const profile = getAdminProfile(employee.adminKey);
        const days = calculateDayCount(profile.joinedAt);
        const labels = ['접속 권한', '대표명', '기준일', '근속', '권한', '역할'];
        rowLabels.forEach((label, index) => { if (labels[index]) label.textContent = labels[index]; });
        cardGreeting.textContent = `${profile.greeting} 승인`;
        cardName.textContent = profile.name;
        if (editNameBtn) editNameBtn.classList.add('hidden');
        cardJoinDate.textContent = formatDate(profile.joinedAt);
        cardDayCount.textContent = `누적 ${pad2(days)}일`;
        cardEmployment.textContent = profile.authority;
        cardPosition.textContent = profile.position;
        cardBadgeImage.style.display = 'block';
        cardBadgeFallback.style.display = 'none';
        cardBadgeImage.src = profile.badge.src;
        cardBadgeImage.alt = `${profile.name} 관리자 카드`;
        cardBadgeFallback.textContent = profile.badge.label;
        cardBadgeImage.onerror = function(){
          cardBadgeImage.style.display = 'none';
          cardBadgeFallback.style.display = 'flex';
        };
        return;
      }

      const normalized = normalizeEmployeeRecord({ ...employee, role:{ ...(employee.role || {}) }, badge:{ ...(employee.badge || {}) } });
      if (!normalized) return;
      const role = normalizeRole(normalized.role, normalized.badge);
      const days = calculateDayCount(normalized.joinedAt);
      const labels = ['환영 문구', '이름', '입사일', '근속', '팀', '직급'];
      rowLabels.forEach((label, index) => { if (labels[index]) label.textContent = labels[index]; });
      cardGreeting.textContent = `${normalized.name}님 환영합니다.`;
      cardName.textContent = normalized.name;
      if (editNameBtn) editNameBtn.classList.remove('hidden');
      cardJoinDate.textContent = formatDate(normalized.joinedAt);
      cardDayCount.textContent = `입사 ${pad2(days)}일`;
      cardEmployment.textContent = role.team || role.employment || '-';
      cardPosition.textContent = role.grade || role.position || '-';
      cardBadgeImage.style.display = 'block';
      cardBadgeFallback.style.display = 'none';
      cardBadgeImage.src = normalized.badge.src;
      cardBadgeImage.alt = `${normalized.badge.label} 사원증 마크`;
      cardBadgeFallback.textContent = normalized.badge.label;
      cardBadgeImage.onerror = function(){
        cardBadgeImage.style.display = 'none';
        cardBadgeFallback.style.display = 'flex';
      };
    }

    function makeDraggable(win){
      const handle = win.querySelector('[data-drag-handle]');
      if (!handle) return;

      let dragging = false;
      let startX = 0, startY = 0, startLeft = 0, startTop = 0;

      const isMobileLayout = () => window.matchMedia('(max-width: 720px)').matches;
      handle.addEventListener('mousedown', (e) => {
        if (isMobileLayout()) return;
        if (e.target.closest('button')) return;
        dragging = true;
        handle.style.cursor = 'grabbing';
        bringFront(win);
        startX = e.clientX;
        startY = e.clientY;
        startLeft = win.offsetLeft;
        startTop = win.offsetTop;
        document.body.style.userSelect = 'none';
      });

      window.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const maxLeft = Math.max(0, windowLayer.clientWidth - win.offsetWidth);
        const maxTop = Math.max(0, windowLayer.clientHeight - win.offsetHeight);
        const nextLeft = Math.min(maxLeft, Math.max(0, startLeft + dx));
        const nextTop = Math.min(maxTop, Math.max(0, startTop + dy));
        win.style.left = `${nextLeft}px`;
        win.style.top = `${nextTop}px`;
      });

      window.addEventListener('mouseup', () => {
        dragging = false;
        handle.style.cursor = '';
        document.body.style.userSelect = '';
      });
    }


    function makeFloatingPopupDraggable(popup, handle, boundsEl){
      if (!popup || !handle || !boundsEl) return;

      let dragging = false;
      let pointerId = null;
      let startX = 0;
      let startY = 0;
      let startLeft = 0;
      let startTop = 0;

      handle.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button')) return;
        if (introScreen.classList.contains('hidden')) return;
        dragging = true;
        pointerId = e.pointerId;
        handle.setPointerCapture(pointerId);
        startX = e.clientX;
        startY = e.clientY;
        startLeft = introPopup.offsetLeft;
        startTop = introPopup.offsetTop;
        handle.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
      });

      handle.addEventListener('pointermove', (e) => {
        if (!dragging || e.pointerId !== pointerId) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const maxLeft = Math.max(0, boundsEl.clientWidth - popup.offsetWidth);
        const maxTop = Math.max(0, boundsEl.clientHeight - popup.offsetHeight);
        const nextLeft = Math.min(maxLeft, Math.max(0, startLeft + dx));
        const nextTop = Math.min(maxTop, Math.max(0, startTop + dy));
        popup.style.left = `${nextLeft}px`;
        popup.style.top = `${nextTop}px`;
      });

      function stopDrag(e){
        if (!dragging || e.pointerId !== pointerId) return;
        dragging = false;
        handle.style.cursor = '';
        document.body.style.userSelect = '';
        try{
          handle.releasePointerCapture(pointerId);
        } catch (err) {}
        pointerId = null;
      }

      handle.addEventListener('pointerup', stopDrag);
      handle.addEventListener('pointercancel', stopDrag);
    }

    makeFloatingPopupDraggable(introPopup, document.getElementById('introDragHandle'), introScreen);

    windows.forEach(makeDraggable);

    window.addEventListener('resize', () => {
      const visibleWindow = windows.find(win => !win.classList.contains('hidden'));
      syncWindowLayerState();
      if (!introScreen.classList.contains('hidden')){
        centerIntroPopup();
      }
      if (visibleWindow){
        centerWindow(visibleWindow);
      }
    });

    function initialize(){
      updateLoginState();
      missionBindEvents();
      vocBindPublicBoard();
      restoreSound();

      syncWindowLayerState();
      const saved = getStoredEmployee();
      if (saved){
        employeeNameInput.focus();
      } else {
        employeeNameInput.focus();
      }
    }

    initialize();
