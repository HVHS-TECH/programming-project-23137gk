/*******************************************************/
// Sparkly treats
/// Written by gauri
//// 2/03/26
/*******************************************************/



/*******************************************************/
// setup()
/*******************************************************/

// preloading the images
function preload() {
	uniFacingLeftImg = loadImage('../assets/images/unicorn.png'); // images made by me using chat gpt
	uniFacingRightImg = loadImage('../assets/images/unicorn_2.png');
	candyImg = loadImage('../assets/images/candy.png');
}

function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth - 10, windowHeight - 10);

	// Creating Uni1Sprite and linking the image
	uni1Sprite = new Sprite(700, 700, 500, 'k');
	friction = 0;
	uni1Sprite.img = uniFacingLeftImg;
	uni1Sprite.scale = 0.2;

	//Creating the ground and adding colour
	ground = new Sprite(windowWidth, 900, 5000, 270, 'static');
	ground.color = '#fcb9ca';

	// Creating the candy sprite and linking the image
	candySprite = new Sprite(100, 100, 200,);
	world.gravity.y = 10;
	candySprite.img = candyImg;
	candySprite.scale = 0.1;
	candy();
}


function candy() {
	lollyGroup = new Group();
		world.gravity.y = 10;
		candySprite.friction = 0;
		lollyGroup.add(candySprite);


	// if any candy in lollyGroup collides with uni1Sprite, call func2Call
	lollyGroup.collides(uni1Sprite, func2Call);


	function func2Call(_ssss, _uni1Sprite) {
		// Delete the candy which was hit
		_ssss.remove();
	}
	
	// if any candy in lollyGroup collides with ground, call func2Call
	lollyGroup.collides(ground, func2Call);


	function func2Call(_ssss, _ground) {
		// Delete the candy as it hits the ground
		_ssss.remove();
	}
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#ffecf2');
	
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
}

/*******************************************************/
//  END OF GAME
/*******************************************************/