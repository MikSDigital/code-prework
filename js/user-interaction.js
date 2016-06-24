"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
// TODO: Show an alert message that welcomes the user based on their input.
function callPrompt() {
	
	var response = prompt("Please enter name?", "");
	if(response === "") {
		callPrompt("Please enter name?")
	}
	else if (response) {
		alert("Hello, " + response);
	}
	else {
		alert("Cancelled out!")
	}
		
}
callPrompt();

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

function doLike() {
	var confirmed = confirm("Do you like pizza?"); 

	if (confirmed) { 
		alert("I like pizza too!");
	}  
	else if (confirmed == false) {
		alert("What? Don't like pizza, NO WAY!");
	}
}
doLike();

