/*******************************************************/
// Sparkly treats
/// Written by gauri
//// 2/03/26
/*******************************************************/
	


/*******************************************************/
// setup()
/*******************************************************/
function preload() {
	UniFacingLeftImg  = loadImage('../assets/images/unicorn.png');
	UniFacingRightImg  = loadImage('../assets/images/unicorn_2.png');
}

function setup() {
	console.log("setup: ");
    cnv = new Canvas (windowWidth, windowHeight);

	// Creating Uni1Sprite and linking the image
    Uni1Sprite = new Sprite(500, 500, 100, 'd');
	Uni1Sprite.bounciness = 1;
	Uni1Sprite.friction   = 0;
	Uni1Sprite.img = UniFacingLeftImg;
	Uni1Sprite.scale = 0.2;

	//Creating the ground and adding colour
	ground = new Sprite(windowWidth, 900, 5000, 270, 'static');
	ground.color = '#fcb9ca';
}


	/*
	ball_2 = new Sprite(100, 300, 50, 'd');
	ball_2.bounciness = 1;
	ball_2.friction   = 0;
	ball_2.image = (imgUnicorn2);
	imgUni2.resize(100, 100);




/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#ffecf2');
	
	if (kb.pressing ('right')) {
		// Set sprite's velocity to the right
		console.log("wheeeee")
			Uni1Sprite.vel.x = +20;
			Uni1Sprite.img = UniFacingRightImg
	}

	else if (kb.pressing('left')) {
    // Set sprite's velocity to the left
			Uni1Sprite.vel.x = -20;
			Uni1Sprite.img = UniFacingLeftImg
	}


	else if (kb.released('left')) {
		// Set sprite's velocity to zero
		Uni1Sprite.vel.x = 0;

	}

	else if (kb.released('right')) {
		// Set sprite's velocity to zero
		Uni1Sprite.vel.x = 0;

	}
}

/*******************************************************/
//  END OF GAME
/*******************************************************/