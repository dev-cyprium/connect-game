var Grid = function() {
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
	this.color  = '#555555';
	this.rect   = Phaser.Rectangle(this.x, this.y, this.width, this.height);
	this.active = true
	this.hoverColor  = '#aaaaaa';
	this.normalColor = '#000000';
	this.ocupied = false; 
}
BlankTile.render = function(game) {
	if(this.active) {
		this.normalColor = this.hoverColor;
	} else {
		this.normalColor = '#000000';
	}
	game.debug.geom(this.color, this.rect)
	game.debug.geom(this.rect, this.normalColor, Phaser.Rectangle(
		this.x + 2,
		this.y + 2,
		this.width - 4,
		this.height - 4
	));
}
BlankTile.SIZE = 50;