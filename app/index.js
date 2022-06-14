const _ = require("lodash");

// SYNC FUNCTION
// function read(path) {
//   try {
//     const data = fs.readFileSync("app/data.json", { encoding: "utf8" });
//     return JSON.parse(data);
//   } catch (err) {
//     return [];
//   }
// }

// ASYNC FUNCTION
const fs = require('fs/promises');

async function read() {
  try {
    const data = await fs.readFile('app/data.json', { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (err) {
    console.log("Unable to reade the file");
    return [];
  }
}



module.exports.read = read