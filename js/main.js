/*
	Game instance, class containing the game
*/
var Game = function() {
	this.stage = new createjs.Stage('gameCanvas');
	this.done = false;
}

Game.prototype.run = function() {
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", this.stage)
}