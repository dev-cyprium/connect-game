/*
	Game instance, class containing the game
*/
var Game = function() {
}

Game.prototype = (function() {
	var initiateWebGL = function(canvas) {
		gl = null;
		gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
			
		if (!gl) {
			alert('Unable to initialize WebGL. Your browser may not support it');
		}
			
		return gl;
	}
	
	return {
		constructor: Game,
		
		init: function( canvas ) {
			gl = initiateWebGL(canvas);
			gl.clearColor(0.0, 0.0, 0.0, 1.0)
			gl.clear(gl.COLOR_BUFFER_BIT)
		}
	}
})();