
var w = 800;
var h = 800;
function setup() {
	w = windowWidth
	h = windowHeight;
	createCanvas(w, h);
	background(0);
	//offset = 18;
	offsetHolder = offset;
}

var i = 1;
var j = 0;

 var offset = 137.5;
var offsetHolder;

function draw() {
	fill(255, 128, 30, 200);
	angleMode(DEGREES);
	noStroke();

	translate(w/2, h/2)
	rotate(offset);
	i += 0.1;
	
	for (let n = 0; n < 1; n++) {
		offset += offsetHolder
		ellipse(0	, i, 2, 2);
		}
}

function keyPressed()
{
	if(keyCode === 49)
	{
		offsetHolder += 5;
		console.log("added 5");
	}
}