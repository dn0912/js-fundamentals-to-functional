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
	var innerFunction = function(lastname){
		console.log(firstname+ " "+lastname);
	};
	return innerFunction;
};

var firstNameFarmer = lasNameTrier('Farmer');
firstNameFarmer('Brown');

//Create a storyWriter function that returns an object with two methods. One method, addWords adds a word to your story and returns the story while the other one, erase, resets the story back to an empty string. Here is an implementation:

var storyWriter = function(){
	var story = '';
	return {
		addWords: function(string){
			story += string + ' ';
			//trim() cut the last space
			return story.trim();
		},
		erase: function(string){
			story = '';
		}
	};
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''

//Using the module pattern, design a toaster. Use your creativity here and think about what you want your users to be able to access on the outside of your toaster vs what you don't want them to be able to touch.

var Toaster = function(){
    
    return {
    	
    };
};