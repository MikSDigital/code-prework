(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ['Gabby', 'Bella', 'Orion', 'Brooke', 'Manny'];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log("I have " + names.length + " grandkids!");

    // TODO: Create log statements that will print each of the names array elements individually.

    //-----1st Try (Hardcode call through the array)-------

    console.log('My grandkids names are ' + names[0],', ' + names[1], ', ' + names[2], ', ' + names[3] + '.');
    console.log(names[0] + ' is 15.');
    console.log(names[1] + ' is 13.');
    console.log(names[2] + ' is 11.');
    console.log(names[3] + ' is 9.');

    //-----2nd Try (For Loop Iteration through the array)------

    for (var i = 0; i < names.length; i++) {

    	console.log("T%che names at index " + i + ' is: ' + names[i], "color:red");

    }

    names.forEach(function (element, index, array) {

	console.log("%cThe names at index " + index + ' is: ' + element, "color:blue");

	});
})();
