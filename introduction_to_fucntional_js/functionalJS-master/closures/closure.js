//Write a function, nonsense that takes an input string. This function contains another function, blab which alerts string and is immediately called inside the function nonsense. blab should look like this inside of the nonsense function:

// In your function, nonsense, change the immediate call to a setTimeout so that the call to blab comes after 2 seconds. The blab function itself should stay the same as before.

var nonsense = function(string){
	var blab = function(){
		alert(string);
	};
	setTimeout(blab(), 2000);
	return blab;
};


//Now, instead of calling blab inside of nonsense, return blab (without invoking it). Call nonsense with some string and store the returned value (the blab function) in a variable called blabLater. Call nonsense again with a different string and store the returned value in a variable called blabAgainLater.

var blabLater = nonsense('hello');
var blabAgainLater = nonsense('hi');

//Write a function with a closure. The first function should only take one argument, someone's first name, and the inner function should take one more argument, someone's last name. The inner function should console.log both the first name and the last name.

var lasNameTrier = function(firstname){
	var fname = firstname;
	var innerFunction = function(lastname){
		var lname = lastname;
		console.log(fname+ " "+lname);
	};
	return innerFunction;
};

var firstNameFarmer = lasNameTrier('Farmer');
firstNameFarmer('Brown');