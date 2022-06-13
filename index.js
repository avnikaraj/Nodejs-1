const { sum } = require('./firstapp/calc');
const { concat } = require('./firstapp/concat');
const { read }  = require('./firstapp/index');
const data = read("./firstapp/data.json");

console.log("Hello world")

console.log(`The result of the sum is ${sum(data)}`);

console.log(`The result of the sum is ${sum(concat(data))}`);