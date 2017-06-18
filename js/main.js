/*
	Game instance, class containing the game
*/
var Game = function() {
}

Game.prototype = (function() {
	var timeAtLastFrame = new Date().getTime();
	var idealTimePerFrame = 1000 / 30;
	var leftover = 0.0;
	
	var initiateWebGL = function(canvas) {
		gl = null;
		gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
			
		if (!gl) {
			alert('Unable to initialize WebGL. Your browser may not support it');
		}
			
		return gl;
	}
	
	var tick = function() {
		var timeAtThisFrame = new Date().getTime();
		var timeSinceLastDoLogic = (timeAtThisFrame - timeAtLastFrame) + leftover;
		var catchUpFrameCount = Math.floor(timeSinceLastDoLogic / idealTimePerFrame);
		
		for(var i=0; i < catchUpFrameCount; i++) {
			// Do logic
		}
		
		// Render scene
		
		leftover = timeSinceLastDoLogic - (catchUpFrameCount * idealTimePerFrame);
		timeAtLastFrame = timeAtThisFrame;
	}
	
	return {
		constructor: Game,
		init: function( canvas ) {
			this.gl = initiateWebGL(canvas);
			gl.clearColor(0.0, 0.0, 0.0, 1.0)
			gl.clear(gl.COLOR_BUFFER_BIT)
		},
		run: function() {
			
			
			setInterval(tick, idealTimePerFrame)	
		}
	}
})();