var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
})

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block"; 
	}
	h1.style.backgroundColor = "steelblue";
})

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new color from the array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change the colors from the squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedcolor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//Loop through all squares
	for(var i = 0; i < squares.length; i++){
		//Change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array 
	arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//Pick a "red" from 0-255
	r = Math.floor(Math.random() * 256); 
	//Pick a "green" from 0-255 
	g = Math.floor(Math.random() * 256); 
	//Pick a "blue" from 0-255 
	b = Math.floor(Math.random() * 256); 
	// "rgb(r, g, b)"
	return "rgb(" + r +", " + g + ", " + b + ")";
}