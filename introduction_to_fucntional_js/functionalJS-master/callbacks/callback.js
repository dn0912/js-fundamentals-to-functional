// Write a function, funcCaller, that takes a func (a function) and an arg (any data type). The function returns the func called with arg(as an argument).

var funcCaller = function(func, arg){
	return func(arg);
};

//Write a function, firstVal, that takes an array, arr, and a function, func, and calls func with the first index of the arr, the index # and the whole array.

var firstVal = function(arr, func){
	func(arr[0], arr[i], arr);
};

//Change firstVal to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object.

var firstVal = function(list, func){
	if(Array.isArray(list)){
		func(arr[0], arr[i], arr);
	} else {
		// for(var k in list){
		// 	return func(list[k], k, list);
		// }
		var propArr = Object.keys(list);
		func(list(propArr[0]), propArr[0], list)
	}
};