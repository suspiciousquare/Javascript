var fs = require('fs');

var data_one = fs.readFileSync('demo_one.txt');
console.log(data_one);

var data_two = fs.readFileSync('demo_two.txt');