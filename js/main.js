/*
	Game instance, class containing the game
*/
var Game = function() {
}

Game.prototype = (function() {
	var timeAtLastFrame = new Date().getTime();
	var idealTimePerFrame = 1000 / 30;
	var leftover = 0.0;
	var sceneManager = new SceneManager();
	var gl;
	
	var initiateWebGL = function(canvas) {
		gl = null;
		gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
			
		if (!gl) {
			alert('Unable to initialize WebGL. Your browser may not support it');
		}
			
		return gl;
	}
	
	/*
		Game loop which renders and updates the game
	*/
	var tick = function(gl) {
		var timeAtThisFrame = new Date().getTime();
		var timeSinceLastDoLogic = (timeAtThisFrame - timeAtLastFrame) + leftover;
		var catchUpFrameCount = Math.floor(timeSinceLastDoLogic / idealTimePerFrame);
		
		var active_scene = sceneManager.activeScene();
		// TODO: dispatch events
		
		for(var i=0; i < catchUpFrameCount; i++) {
			active_scene.update();
		}
		
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		active_scene.render(gl);
		
		
		leftover = timeSinceLastDoLogic - (catchUpFrameCount * idealTimePerFrame);
		timeAtLastFrame = timeAtThisFrame;
	}
	
	return {
		constructor: Game,
		init: function( canvas ) {
			gl = initiateWebGL(canvas);
		},
		run: function() {
			setInterval( function() { tick(gl) }, idealTimePerFrame);
		}
	}
})();