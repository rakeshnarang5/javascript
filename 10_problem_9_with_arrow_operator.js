var orders = [
    { amount: 100 },
    { amount: 200 },
    { amount: 300 },
    { amount: 400 },
    { amount: 500 },
]

// no return statement is required after the arrow operator
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmount);