// assignment of a function to a variable
var triple = function(x) {
	return x * 3;
}
// passing around the function
var waffle = triple;
// this will return 90
waffle(30);