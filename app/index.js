const _ = require("lodash");


// function read(path) {
//   try {
//     const data = fs.readFileSync("app/data.json", { encoding: "utf8" });
//     return JSON.parse(data);
//   } catch (err) {
//     return [];
//   }
// }


const fs = require('fs/promises');

async function read() {
  try {
    const data = await fs.readFile('app/data.json', { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}



module.exports.read = read