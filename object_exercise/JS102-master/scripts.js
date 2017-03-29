//Use this file to implement Part One of your project

/*
An object to hold our data model...

Create a variable, name it animal, and assign it an object literal.
With Dot Notation…

Add a property called username and assign it a value.
Ensure that your username property exists in animal by inspecting it in the console.
With Bracket Notation…

Add a property called tagline and give it a value.
Check that your property exists in the animal object by inspecting it in the console.
Create a variable called noises and assign it an empty array []
Add the noises array to your object.
Inspect your handiwork! Your object should look something like this:
*/
var animal = {};

animal.username = 'test';
console.log(animal.username);

animal['tagline'] = 'test2';
console.log(animal['tagline']);

var noises = [];
animal.noises = noises;
console.log(animal);

/*
Loop through the properties of your animal object.
Count everytime it loops to keep track of the number of properties on your object.
Write an if/else statement in your loop:
If the key is username, console.log('Hi my name is ' + ___) //fill in with object's username value.
If the key is tagline, console.log('I like to say ' + ___) //fill in with object's tagline value.
*/
var i = 0;
for(var key in animal){
	i++;
	if(key==='username') console.log('Hi my name is '+animal[key]);
	if(key==='tagline') console.log('Hi my name is '+animal[key]);
}

//Functions Exercise

// Create a variable called noiseArray and assign it to an array literal. Place at least one element in the array.
var noiseArray =['arrTest'];

//Add a noise to the beginning of the noiseArray.
var help = ['a'];
//noiseArray.unshift('a');
noiseArray=help.concat(noiseArray);

//Add another noise to the end of the noiseArray.
noiseArray.push('z');

//Using Bracket Notation…add another noise to the end.
noiseArray[noiseArray.length] = 'z';

console.log(noiseArray);
console.log(noiseArray.length);

animal.noises=noiseArray;
console.log(animal);

//Using any method you prefer, add your animal from the Object Exercises to the animals array.
var animals = [];
animals.push(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };

//Add quackers to the animals array using a different method than before.
animals[animals.length] = quackers;

//Inspect your animals array to ensure you have two objects inside.
console.log(animals);

//Create two more animal objects and add them to your animals array. They should have these properties and your choice of values
var quackers2 = { username: 'abc', tagline: 'def!', noises: ['ghi', 'jkl'] };
var quackers3 = { username: 'mno', tagline: 'pqr!', noises: ['stu', 'vwx'] };

animals.push(quackers2, quackers3);

console.log(animals);
//Check the length property of your array. It should give you 4.
console.log(animals.length);



//Functions Exercise

var AnimalTestUser = function(username){
	if(arguments.length > 1){
		var otherArgs = [];
		for(var i = 1; i < arguments.length; i++){
			otherArgs.push(arguments[i]);
		}
	}

	return {
		'username': username,
		'otherArgs': otherArgs
	};
}

var AnimalCreator = function(username, species, tagline, noises){
	return {
		'username': username,
		'species': species,
		'noises': noises,
		'tagline': tagline,
		'friends': []
	};
}

var addFriend = function(animal, friend){
	animal['friends'].push(friend);
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);

var cow = AnimalCreator('ad', 'sheerep', 'eregdfg!', ['dfg', 'ergerdf', 'sfdgsfd']);
console.log(cow);

var lama = AnimalCreator('a1233d', '123', '234324!', ['234', '2545', '23423']);
console.log(lama);

addFriend(sheep, cow);
addFriend(sheep, cow);

var myFarm =[sheep, cow, lama];

