// Phaser 3 예시: Tiled 맵 불러오기
// 파일 위치 예시:
// /game/assets/maps/voxtek_lobby.json
// /game/assets/tilesets/voxtek_office_tiles.png

function preload() {
  this.load.image('voxtek_office_tiles', './assets/tilesets/voxtek_office_tiles.png');
  this.load.tilemapTiledJSON('voxtek_lobby', './assets/maps/voxtek_lobby.json');
}

function create() {
  const map = this.make.tilemap({ key: 'voxtek_lobby' });
  const tileset = map.addTilesetImage('voxtek_office_tiles', 'voxtek_office_tiles');

  const floorLayer = map.createLayer('Floor', tileset, 0, 0);
  const wallLayer = map.createLayer('Wall', tileset, 0, 0);
  const furnitureLayer = map.createLayer('Furniture', tileset, 0, 0);
  const decorLayer = map.createLayer('Decor', tileset, 0, 0);
  const collisionLayer = map.createLayer('Collision', tileset, 0, 0);

  collisionLayer.setCollisionByExclusion([-1]);
  collisionLayer.setVisible(false);

  const objects = map.getObjectLayer('Objects');
  const playerSpawn = objects.objects.find(obj => obj.name === 'player_spawn');
  const voxSpawn = objects.objects.find(obj => obj.name === 'npc_vox');

  // player = this.physics.add.sprite(playerSpawn.x, playerSpawn.y, 'player');
  // vox = this.add.sprite(voxSpawn.x, voxSpawn.y, 'vox');

  // this.physics.add.collider(player, collisionLayer);
}
