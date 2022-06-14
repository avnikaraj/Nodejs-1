const fs = require("fs");
const _ = require("lodash");


function read(path) {
  try {
    const data = fs.readFileSync("app/data.json", { encoding: "utf8" });
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}


module.exports.read = read
