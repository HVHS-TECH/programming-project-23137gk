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
	uniFacingLeftImg = loadImage('../assets/images/unicorn.png'); // all images made by me using chat gpt
	uniFacingRightImg = loadImage('../assets/images/unicorn_2.png');
	candyImg = loadImage('../assets/images/candy.png');
	pickleImg = loadImage('../assets/images/pickle.png');

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

	pickleSprite = new Sprite(300, 100, 300,);
	world.gravity.y = 10;
	pickleSprite.img = pickleImg;
	pickleSprite.scale = 0.1;
	avoidPickle();
}


function candy() {
	lollyGroup = new Group();
		world.gravity.y = 10;
		candySprite.friction = 0;
		lollyGroup.add(candySprite);


	// if any candy in lollyGroup collides with uni1Sprite, call func2Call
	lollyGroup.collides(uni1Sprite, func2Call);


	// uni1sprite catches the candy
	function func2Call(_ssss, _uni1Sprite) {
		// Delete the candy which was hit
		_ssss.remove();
	}
	
	// if any candy in lollyGroup collides with ground, call func2Call
	lollyGroup.collides(ground, func2Call);


	// candy hits the ground
	function func2Call(_ssss, _ground) {
		// Delete the candy as it hits the ground
		_ssss.remove();
	}
}







function avoidPickle() {
	pickleGroup = new Group();
		world.gravity.y = 10;
		pickleGroup.friction = 0;
		pickleGroup.add(pickleSprite);


	// if the pickle in pickleGroup collides with uni1Sprite, call func2Call
	pickleGroup.collides(uni1Sprite, func2Call);


	// uni1sprite catches the pickly
	function func2Call(_ssss, _uni1Sprite) {
		// Delete the pickle which was hit
		_ssss.remove();
	}
	
	// if a pickle in pickleGroup collides with ground, call func2Call
	pickleGroup.collides(ground, func2Call);


	// pickle hits the ground
	function func2Call(_ssss, _ground) {
		// Delete the pickle as it hits the ground
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

	if (uni1Sprite.colliding(pickleSprite)) {
		noLoop()
		textSize (60);
		fill ('red');
		text('game over', width/2-150, height/2);
	}
}

/*******************************************************/
//  END OF GAME
/*******************************************************/