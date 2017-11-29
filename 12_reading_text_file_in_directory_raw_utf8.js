// old style
// import not working
// will figure that out
var fs = require('fs');

var output = fs.readFileSync('./data/data.txt', 'utf8');

console.log('output', output);