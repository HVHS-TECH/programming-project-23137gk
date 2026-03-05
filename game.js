/*******************************************************/
// Sparkly treats
/// Written by gauri
//// 2/03/26
/*******************************************************/
	


/*******************************************************/
// setup()
/*******************************************************/
function preload() {
	imgUni  = loadImage('../assets/images/unicorn.png');
	imgUnicorn2  = loadImage('../assets/images/unicorn_2.png');
}


function setup() {
	console.log("setup: ");
    cnv = new Canvas (windowWidth, windowHeight);
	wallBot = new Sprite(windowWidth, 900, 5000, 100, 'k');
	wallBot.color = 'darkgreen';
    ball_1 = new Sprite(500, 500, 100, 'd');
	ball_1.bounciness = 1;
	ball_1.friction   = 0;
	ball_1.image = (imgUni);
	imgUni.resize(50, 50);

	ball_2 = new Sprite(100, 300, 50, 'd');
	ball_2.bounciness = 1;
	ball_2.friction   = 0;
	ball_2.image = (imgUnicorn2);
	imgUni2.resize(100, 100);

	//rectangle = new Sprite(500, 400, 100, 200);
	//rectangle.color = 'pink';
	//rectangle.rotationSpeed = 0;
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('mistyrose');

	if (kb.pressing('left')) {
    // Set sprite's velocity to the left
			ball_1.vel.x = -5;
	}

	else if (kb.pressing ('right')) {
		// Set sprite's velocity to the right
			ball_1.vel.x = 5;
	}

	else if (kb.released('left')) {
		// Set sprite's velocity to zero
		ball_1.vel.x = 0;

	}

	else if (kb.released('right')) {
		// Set sprite's velocity to zero
		ball_1.vel.x = 0;

	}
}

/*******************************************************/
//  END OF GAME
/*******************************************************/