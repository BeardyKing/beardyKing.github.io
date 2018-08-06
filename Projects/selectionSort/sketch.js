

var data = [];
var r = 0;
var canvasSizeX = 0;

function setup() {
	createCanvas(windowWidth,300);
	canvasSizeX = windowWidth;
	background(100);
	data.length = windowWidth;
	for (let i = 0; i < data.length; i++) {
		r = random(0,120)
		data[i] = r;
	}
}

var x = 0;
var l = 0;

function draw() {
	background(100,100,100)
		for (let i = 0; i < data.length; i++) {	
			stroke(255,128,10);
			rect(i, 100, 1, data[i]);
		}
		for (let m = 0; m <  data.length ; m++) {
		if (l < data.length - x) {
			l++;
			if(data[l] > data[l + 1])
			{
				var temp = data[l + 1];
				data[l + 1] = data[l];
				data[l] = temp;
				stroke(0,0,255);
				rect(l, 100, 1, data[l]);
			}
		}
		else{
			l = -1;
			x++;
		}
	}
}
