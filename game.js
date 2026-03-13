/*******************************************************/
// Sparkly treats
/// Written by gauri
//// 2/03/26
/*******************************************************/

// score and lives 
let score = 0;
let lives = 3;

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
	cnv = new Canvas(windowWidth - 10, windowHeight - 10);

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

	// candySprite
	candySprite = new Sprite(100, 100, 200,);
	world.gravity.y = 10;
	candySprite.img = candyImg;
	candySprite.scale = 0.1;

	// creating the pickle sprite 
	pickleSprite = new Sprite(300, 100, 300,);
	world.gravity.y = 10;
	pickleSprite.img = pickleImg;
	pickleSprite.scale = 0.1;
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
	candySprite.scale = 0.1;
	candySprite.friction = 0;

	lollyGroup.add(candySprite);
}

function spawnPickle() {

	let pickleSprite = new Sprite(random(50, width-50), -50, 200);

	pickleSprite.img = pickleImg;
	pickleSprite.scale = 0.1;
	pickleSprite.friction = 0;

	pickleGroup.add(pickleSprite);
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#ffecf2');
	
	// spawning every 60-120 frames
	if(frameCount % 60 === 0) {
		spawnCandy();
	}

	if(frameCount % 120 === 0) {
		spawnPickle();
	}



	if (kb.pressing('right')) {
		// Set sprite's velocity to the right
		uni1Sprite.vel.x = +20;
		uni1Sprite.img = uniFacingRightImg
	}

	else if (kb.pressing('left')) {
		// Set sprite's velocity to the left
		uni1Sprite.vel.x = -20;
		uni1Sprite.img = uniFacingLeftImg
	}


	else if (kb.released('left')) {
		// Set sprite's velocity to zero
		uni1Sprite.vel.x = 0;

	}

	else if (kb.released('right')) {
		// Set sprite's velocity to zero
		uni1Sprite.vel.x = 0;

	}

	// score + lives displaying
	textSize(30);
	fill('black');
	text('score:' + score, 50, 100);
	text('lives:' + lives, 1300, 100);


	if (lives <= 0) {
		noLoop()
		textSize (70);
		fill ('red');
		text('game over', 500, 500);
	}
}

/*******************************************************/
//  END OF GAME
/*******************************************************/