kaboom({
	global: true, 
	fullscreen: true,
	scale: 1,
	debug: true,
	clearColor: [0, 0, 0, 1],
});


loadSprite("diamond", "assets/diamond.png");
// loadSprite('lady', 'assets/lady.png');
// loadSprite('lady', 'assets/cupcake.png');
// loadSprite('lady', 'assets/cactus.png');

// const diamond = sprite("diamond", {
// 	pos: vec2(80, 80),
// 	body: true,
// });

addRect(width(), 20, {
	pos: vec2(0, height() - 40),
	solid: true,
});


scene('game', () => {
	const maps = [
		[
			'                                   ',
			'                                   ',
			'                                   ',
			'                                   ',
			'             $                     ',
			'                                   ',
			'                                   ',
			'                                   ',
		],
	]
	const levelCfg = {
		width: 20,
		height: 20,
		'$': [sprite('diamond'), solid()],
	}

	


})