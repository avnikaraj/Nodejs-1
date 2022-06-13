const fs = require("fs");
const _ = require("lodash");
const calc = require('./calc');
const concat = require('./concat');

function read(path) {
  try {
    const data = fs.readFileSync("firstapp/data.json", { encoding: "utf8" });
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}


module.exports.read = read
