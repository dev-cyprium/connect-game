/*
	Scene manager is used to manage the game scenes
*/
var SceneManager = function() {
	this.play = new PlayScene();
}
SceneManager.prototype.activeScene = function() {
	return this.play;
}



var PlayScene = function() {}
PlayScene.prototype.update = function() {
	
}
PlayScene.prototype.render = function() {
	
}