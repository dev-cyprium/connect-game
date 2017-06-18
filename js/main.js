/*
	Game instance, class containing the game
*/
var Game = function() {
}

Game.prototype = (function() {
	var game;
	var gameOptions = {
		width: 800,
		height: 600
	}
	
	var _preload = function() {
		
	}
	
	var _create = function() {
		
	}
	
	var _update = function() {
		
	}
	
	return {
		constructor: Game,
		init: function( canvas ) {
			game = new Phaser.Game(gameOptions.width, gameOptions.height, Phaser.AUTO, '', {
				preload: _preload,
				create: _create,
				update: _update
			});
		}
	}
})();