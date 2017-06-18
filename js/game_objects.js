var Grid = function(x, y, size, scene) {
	this.x = x;
	this.y = y;
	this.scene = scene;
	
	this.placers = [];
	this.tiles   = [];
	this.size    = size;
	for(var i=0; i < size; i++) {
		this.tiles[i] = [];
	}
	
	for(var x=0; x < size; x++) {
		for(var y=0; y < size; y++) {
			this.tiles[x][y] = new BlankTile(this.x + x * BlankTile.SIZE, this.y + y * BlankTile.SIZE, scene);
		}
	}
}
Grid.prototype.update = function() {
	
}
Grid.prototype.render = function(game) {
	for(var i=0; i < this.size; i++) {
		for(var j=0; j < this.size; j++ ) {
			this.tiles[i][j].render(game);
		}
	}
}

var BlankTile = function(x, y, scene) {
	this.x = x;
	this.y = y;
	this.scene = scene;
	
	this.width  = BlankTile.SIZE;
	this.height = BlankTile.SIZE;
	this.color  = '#555555';
	this.rect   = new Phaser.Rectangle(this.x, this.y, this.width, this.height);
	this.active = true
	this.hoverColor  = '#aaaaaa';
	this.normalColor = '#000000';
	this.ocupied = false; 
}
BlankTile.prototype.render = function(game) {
	if(this.active) {
		this.normalColor = this.hoverColor;
	} else {
		this.normalColor = '#000000';
	}
	game.debug.geom(this.rect, this.color);
	game.debug.geom( new Phaser.Rectangle(
		this.x + 2,
		this.y + 2,
		this.width - 4,
		this.height - 4
	), this.normalColor);
}
BlankTile.SIZE = 50;