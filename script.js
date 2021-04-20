var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

function generateRandomColor ()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    if(randomColor.length != 7){ // In any case, the color code is invalid
        randomColor = generateRandomColor();
    }
    return randomColor;
    // The random color will be freshly served
}
// document.body.style.backgroundColor = generateRandomColor() // -> #E1AC94

function setRandomGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ generateRandomColor() 
	+ ", " 
	+ generateRandomColor()
	+ ")";

css.textContent = body.style.background + ";";
}
	
	



color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);