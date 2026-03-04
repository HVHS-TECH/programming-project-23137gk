/*******************************************************/
// Sparkly treats
/// Written by gauri
//// 2/03/26
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
    cnv = new Canvas (windowWidth, windowHeight);
    rectangle = new Sprite(500, 400, 100, 200);
	rectangle.color = 'pink';
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('mistyrose');

		if (kb.pressing('left')) {
    // Set sprite's velocity to the left
			rectangle.vel.x = -5;
	}
	else if (kb.pressing ('right')) {
		// Set sprite's velocity to the right
			rectangle.vel.x = 5;
	}

	else if (kb.released('left')) {
		// Set sprite's velocity to zero
		rectangle.vel.x = 0;

	}

	else if (kb.released('right')) {
		// Set sprite's velocity to zero
		rectangle.vel.x = 0;

	}
}

/*******************************************************/
//  END OF GAME
/*******************************************************/