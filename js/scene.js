/*
	Scene manager is used to manage the game scenes
*/
var SceneManager = function() {
	this.play = new PlayScene();
}
SceneManager.prototype.activeScene = function() {
	return this.play;
}



var PlayScene = function() {
	this.gameObjects = [];
	this.grid = new Grid(400 - 125, 300 - 125, 5, this);
	this.gameObjects.push(this.grid);
	
}
PlayScene.prototype.update = function() {
	for(var i=0; i < this.gameObjects.length; i++) {
		this.gameObjects[i].update()
	}
}
PlayScene.prototype.render = function(game) {
	for(var i=0; i < this.gameObjects.length; i++) {
		this.gameObjects[i].render(game);
	}
}