kaboom({
	global: true, 
	fullscreen: true,
	scale: 1,
	debug: true,
	// clearColor: [0, 0, 0, 1],
});


loadSprite('diamond', '/assets/diamond.png');
loadSprite('lady', '/assets/lady.png');

const diamond = addSprite('diamond', {
	pos: vec2(80, 80),
	body: true,
});