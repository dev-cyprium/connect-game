/*
	Game instance, class containing the game
	Disclaimer:
	This project is using Phaser, however,
	I disslike how it's doing things so most of the systems
	are implemented by hand and only Abstractions like Rectangle,
	rendering and game loop are used from the Phaser framework
*/
var Game = function() {
}

Game.prototype = (function() {
	var game;
	var gameOptions = {
		width: 800,
		height: 600
	}
	var sceneManager;
	
	var _preload = function() {
		
	}
	
	var _create = function() {
		// initiate scene manager
		sceneManager = new SceneManager();
	}
	
	var _render = function() {
		sceneManager.activeScene().render(game);
	}
	
	var _update = function() {
		sceneManager.activeScene().update();
	}
	
	return {
		constructor: Game,
		init: function( canvas ) {
			game = new Phaser.Game(gameOptions.width, gameOptions.height, Phaser.AUTO, 'Connect', {
				preload: _preload,
				create: _create,
				update: _update,
				render: _render
			});
		}
	}
})();