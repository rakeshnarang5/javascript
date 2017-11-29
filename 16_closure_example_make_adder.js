var makeAdder = function(x) {
	return function(y) {
		return x + y
	}
}

var adder5 = makeAdder(5);
var adder10 = makeAdder(10);

console.log(adder5(2));
console.log(adder10(2));