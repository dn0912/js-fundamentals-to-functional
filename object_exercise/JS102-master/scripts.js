//Use this file to implement Part One of your project

var animal = {};

animal.username = 'test';
console.log(animal.username);

animal['tagline'] = 'test2';
console.log(animal['tagline']);

var noises = [];
animal.noises = noises;
console.log(animal);

var i = 0;
for(var key in animal){
	i++;
	if(key==='username') console.log('Hi my name is '+animal[key]);
	if(key==='tagline') console.log('Hi my name is '+animal[key]);
}