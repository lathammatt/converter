// var userTemp = null;
// var newCelc = null;
// var newFahr = null;



function toCelsius() {	
	var userTemp = document.getElementByClass("weather").value;
	// var newCelc = (userTemp-32)/1.8;
	return (userTemp-32)/1.8
}

function toFahrenheit () {
	var userTemp = document.getElementByClass("weather").value;
	// var newFahr = (userTemp*1.8)+32;
	// console.log(((temp*1.8)+32), " Fahrenheit");
	return (userTemp*1.8)+32;}

// Get a reference to the button element in the DOM

var answer = document.getElementById("result")
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  	console.log("event", clickEvent);
	if (document.getElementById("r1").checked === true){
		var newCelc = toCelsius();
		answer.innerHTML = "The temperature in Celsius is ${newCelc}";
		if (newCelc > 32){
			answer.setAttribute("class",red);
			}
		else if (newCelc < 0){
			answer.setAttribute("class",blue);
			}
		else {answer.setAttribute("class",green);
			}
		}
	else 
		{var newFahr = toFahrenheit();
		answer.innerHTML = "The temperature in Fahrenheit is ${newFahr}";
		if (newFahr > 90){
			answer.setAttribute("class",red);
			}
		else if (newFahr < 32){
			answer.setAttribute("class",blue);
			}
		else {answer.setAttribute("class",green);
				}
			};
		};


// Assign a function to be executed when the button is clicked
var button = document.getElementById("converter");

button.addEventListener("click", determineConverter);

