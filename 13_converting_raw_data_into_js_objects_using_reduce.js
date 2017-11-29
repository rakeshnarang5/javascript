// old style
// import not working
// will figure that out
var fs = require('fs');

var output = fs.readFileSync('./data/data.txt', 'utf8')
    .trim() // removes any white
    .split('\r\n') // output split to array with 
    .map(line => line.split("\t")) // splits each line on the tab character; result in array of arrays
    .reduce((customers, line) => {
        var userObject = {
            name: line[1],
            price: line[2],
            quantity: line[3]
        }
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push(userObject)
        return customers
    }, {});

console.log('output', JSON.stringify(output, null, 2)); // 2 is for space indentation