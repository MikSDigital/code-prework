"use strict";

 // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.
var myNameIs = 'Manny';
function sayHello(name) {
	
	console.log("Hello, " + name);
}

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
sayHello(myNameIs);


// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.

//----------Select a random number----------------//

var random = Math.floor((Math.random()*200)+1);
console.log("%c(isOdd_1): Random number is: " + random.toString(), "color:blue");

// ------------1st Try (Per Instructore Review)----------------

function isOdd_1 (numberToTest) {
	(numberToTest % 2 === 1) ? console.log("%c(isOdd_1): Number was odd.", "color:blue") : console.log("%c(isOdd_1): Number was even.", "color:blue");
}

// ------------2nd Try (using an If Else statement-----------------
//var random = Math.floor((Math.random()*50)+1);

function isOdd_2(number) {
	

	if (number % 2 == 0)  {
		
		var result = "Even";
		console.log("(isOdd_2): The random number is " + random.toString(), result.toString());
		return true;

	}  else  {
		
		var result = "Odd";
		console.log("(isOdd_2): The random number is " + random.toString(), result.toString());
		return false;
	}
	
}	

/* -3rd Try (Refactored using random var without passing it to the function--*/

function isOdd_3() {

	var random = Math.floor((Math.random()*50)+1);

	random = (random%2 == 0) ? console.log("(isOdd_3): Oops, an Even number:" + random) : console.log("(isOdd_3): Yeah, an Odd number: " + random);
}

// ---4th Try (Refactored 2nd function (isOdd_2) to use ternary operator------

	random = Math.floor((Math.random()*300)+1);
	var result = random;
function isOdd_4(number) {
		
		(number % 2 == 1) ? console.log("%c(isOdd_4): Yeah, an Odd number:" + result,  "color:green") : console.log("%c(isOdd_4): Oops, an even number: " + result, "color:green");

}


isOdd_1(random);
isOdd_2(random);
isOdd_3()  //Used the random variable istelf, so did not pass;
isOdd_4(random);







