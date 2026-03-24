/*******************************************************/
// Sparkly treats
/// Written by gauri
//// 2/03/26
/*******************************************************/

// score and lives 
let score = 0;
let lives = 3;
let gameState = 'play';

/*******************************************************/
// preload()
/*******************************************************/

function preload() {
	uniFacingLeftImg = loadImage('../assets/images/unicorn.png'); // all images made by me using chat gpt
	uniFacingRightImg = loadImage('../assets/images/unicorn_2.png');
	candyImg = loadImage('../assets/images/candy.png');
	pickleImg = loadImage('../assets/images/pickle.png');

}

/*******************************************************/
// setup()
/*******************************************************/

function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	// Uni1Sprite 
	uni1Sprite = new Sprite(700, 700, 500, 'k');
	uni1Sprite.friction = 0;
	uni1Sprite.img = uniFacingLeftImg;
	uni1Sprite.scale = 0.2;

	// ground 
	ground = new Sprite(windowWidth, 900, 5000, 270, 'static');
	ground.color = '#fcb9ca';

	// groups
	lollyGroup = new Group();
	pickleGroup = new Group();

	// candy collisons
	lollyGroup.collides(uni1Sprite, collectCandy);
	lollyGroup.collides(ground, removeCandy);

	// pickle collisons
	pickleGroup.collides(uni1Sprite, hitPickle);
	pickleGroup.collides(ground, removePickle);

}


/*******************************************************/
// collision functions
/*******************************************************/

function collectCandy(candySprite, uni1Sprite) {
	candySprite.remove();
	score = score + 1;
}

function removeCandy(candySprite, ground) {
	candySprite.remove();
}

function hitPickle(pickleSprite, uni1Sprite) {
	pickleSprite.remove();
	lives = lives - 1;
}

function removePickle(pickleSprite, ground) {
	pickleSprite.remove();
}

/*******************************************************/
// spawning candy and pickles
/*******************************************************/


function spawnCandy() {
	let candySprite = new Sprite(random(50, width-50), -50, 200);
	candySprite.img = candyImg;
	world.gravity.y = 10;
	candySprite.scale = 0.1;
	candySprite.friction = 0;
	lollyGroup.add(candySprite);
}

function spawnPickle() {
	let pickleSprite = new Sprite(random(50, width-50), -50, 200);
	pickleSprite.img = pickleImg;
	world.gravity.y = 10;
	pickleSprite.scale = 0.1;
	pickleSprite.friction = 0;
	pickleGroup.add(pickleSprite);
}



/*******************************************************/
// draw()
/*******************************************************/

function draw() {
background('#ffecf2');
	if (gameState === "play") {
		// spawning
		if(frameCount % 70 === 0) spawnCandy();
		if(frameCount % 115 === 0) spawnPickle();

		// movement
		if (kb.pressing('right')) {
			uni1Sprite.vel.x = 15;
			uni1Sprite.img = uniFacingRightImg;
		}
		else if (kb.pressing('left')) {
			uni1Sprite.vel.x = -15;
			uni1Sprite.img = uniFacingLeftImg;
		}
		else {
			uni1Sprite.vel.x = 0;
		}

		
		textSize(30);
		fill('#ff68a7');
		text('score: ' + score, 50, 100);
		text('lives: ' + lives, width-150, 100);

		// game over 
		if (lives <= 0) {
			gameState = "gameOver";
			uni1Sprite.vel.x = 0;
		}

	} else if (gameState === "gameOver") {
	 	textAlign(CENTER);
		textSize(70);
		fill('#ff8f8f');
		text('GAME OVER', width/2, height/2);

		textSize(30);
		text('Press SPACE to restart', width/2, height/2 + 50);

		// restart game
		if (kb.presses('space')) {
			score = 0;
			lives = 3;

			lollyGroup.removeAll();
			pickleGroup.removeAll();

			uni1Sprite.x = width/2;
			uni1Sprite.y = 700;
			uni1Sprite.vel.x = 0;

			gameState = "play";
		}
	}
}

/*******************************************************/
//  END OF GAME
/*******************************************************/
