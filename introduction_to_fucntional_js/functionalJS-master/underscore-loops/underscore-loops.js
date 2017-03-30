//Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different if you were looping through an object?

var arr = ['hallo', 'test', 'test2'];
var obj = {
	a: 'hallo',
	b: 'test',
	c: 'test2'
}

_.each(arr, function(val, i){
	console.log(val, i);
});

_.each(obj, function(val, prop){
	console.log(val, prop);
});

//Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.

var helloArr = ['bonjour', 'hello', 'hola'];
var checkValue = function(arr, val){
	return arr.includes(val);
};

//Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.
var checkValue2 = function(arr, val){
	_.each(arr, function(val,i,arr){
		arr.includes(val);
	})
};

//Write a loop that pushes all the values in an object to an array.
var input= {two: 2, four: 4, three: 3, twelve: 12};
var arr = [];
for(var key in input){
	arr.push(input[key]);
}

//Use _.map to mimic the previous behavior.
var input= {two: 2, four: 4, three: 3, twelve: 12};
var output = _.map(input, function(val){
	return val;

//Use _.filter to return all the even numbers in an array.
var input = [9,8,7,6,5,2];
var output = _.filter(input, function(val){
	return val % 2 ==0;
});