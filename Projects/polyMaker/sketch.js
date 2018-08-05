
var w = 400;
var h = 300;

var arr = [];
var arrLen = 10;

var showCircles = true;
var showSelection = true;

function setup() {
	createCanvas(w, h);
	arr.length = arrLen;

	for (let i = 0; i < arr.length; i++) {
		arr[i] = [];
		for (let j = 0; j < 2 ; j++) {
		arr[i][j] = null;			
		}		
	}		
}
function draw() {
	background(128)
	DrawCustomShape();
	DrawBoxCont();
}
var cont = 0;
function mouseClicked()
{
	if(cont < arrLen)
	{
		if(mouseX >= 0 && mouseX <= w && mouseY >= 0 && mouseY <= h)
		{
			console.log("mouse Clicked");
			arr[cont][0] = mouseX;
			arr[cont][1] = mouseY;
			cont++;
		}
		else{
			console.log("out of bounds");
		}
	}
	else
	{
		console.log("Max array size");
	}
}

function keyPressed()
{
	if(keyCode === 81)
	{
		showCircles = !showCircles;
		console.log("q pressed");
	}
	if(keyCode === 82)
	{
		cont = 0;
	}
	if(keyCode === 87)
	{
		showSelection = !showSelection;
	}
	
	if(keyCode === 48)
		ChangeOldPoint(0)
	if(keyCode === 49)
		ChangeOldPoint(1)
	else if(keyCode === 50)
		ChangeOldPoint(2)
	else if(keyCode === 51)
		ChangeOldPoint(3)
	else if(keyCode === 52)
		ChangeOldPoint(4)
	else if(keyCode === 53)
		ChangeOldPoint(5)
	else if(keyCode === 54)
		ChangeOldPoint(6)
	else if(keyCode === 55)
		ChangeOldPoint(7)
	else if(keyCode === 56)
		ChangeOldPoint(8)
	else if(keyCode === 57)
		ChangeOldPoint(9)
}

function ChangeOldPoint(input)
{
	if(mouseX >= 0 && mouseX <= w && mouseY >= 0 && mouseY <= h)
	{
		if(input <= cont)
		{
			arr[input][0] = mouseX;
			arr[input][1] = mouseY;
		}
		else
		{
			console.log("can't change data")
		}
	}
	else{
		console.log("out of bound");
	}
	
}

function DrawCustomShape()
{
	beginShape()
	for (let i = 0; i < cont; i++) {
		if(arr[i][0] != null)
		{
			vertex(arr[i][0], arr[i][1]);
		}
	}
	endShape(CLOSE)
	DrawEdgeCircle()
}

function DrawEdgeCircle()
{
	if(showCircles === true)
	{
		for (let i = 0; i < cont; i++) {
			fill(255,192,203,200)
			ellipse(arr[i][0], 
					arr[i][1],
					15, 15);
			fill(0);
			text(i, arr[i][0] - 3, arr[i][1] + 3);
			fill(255);
		}
	}
}
var animCount = 0;
var animBool = false;
function DrawBoxCont()
{
	if(showSelection == true)
	{
		for (let i = 0; i < arr.length; i++) {
			if(i < cont)
			{
				fill(255,192,203);
			}
			else if(i == cont)
			{
				animCount++;
				if(animCount > 20)
				{
					animBool = !animBool;
					animCount = 0;
				}
				if(animBool === true)
				{
					fill(100,255,30);

				}
				else{
					fill(100,255,30,180);

				}
			}
			else{
				fill(255,192,203,128);
			}
			rect(i * w/10, h/-1000, w/10 - 1, h/15 )
			fill(0);
			textSize(12)
			text(i,i * w/10 +(w/25) ,h/20)
			fill(255);
		}
	}
}
