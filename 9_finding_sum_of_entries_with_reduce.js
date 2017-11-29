// the array that has orders
var orders = [
    { amount: 100 },
    { amount: 200 },
    { amount: 300 },
    { amount: 400 },
    { amount: 500 },
]
// reduce method
var totalAmount = orders.reduce(function(sum, order) {
    // this new sum will be parameterized sum in further iterations
    // return statement is important
    return sum += order.amount;
}, 0); // 0 here is the initial value of sum
// logging
console.log(totalAmount);