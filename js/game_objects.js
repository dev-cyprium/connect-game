var Grid = function() {}
Grid.prototype.update = function() {
	
}
Grid.prototype.render = function(graphics) {
	
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