const { sum } = require('./app/calc');
const { concat } = require('./app/concat');
const { read }  = require('./app/index');


read("./app/data.json").then(data=> {
    console.log(`The result of the sum is ${sum(data)}`);
    console.log(`The result of the concat is ${concat(data)}`);
    console.log(`The result of the sum is ${sum(concat(data))}`);
});

// console.log("Hello world")
