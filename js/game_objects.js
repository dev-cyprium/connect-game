var Grid = function() {
	this.rect = new Phaser.Rectangle(10, 10, 100, 100);
}
Grid.prototype.update = function() {
	
}
Grid.prototype.render = function(game) {
	game.debug.geom(this.rect, '#ff05ff');
}

var BlankTile = function(x, y, scene) {
	this.x = x;
	this.y = y;
	this.scene = scene;
	
	this.width  = BlankTile.SIZE;
	this.height = BlankTile.SIZE;
	this.color  = 0xFF00FF;
}
BlankTile.render = function(gl) {
}
BlankTile.SIZE = 50;