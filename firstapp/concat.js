const _ = require('lodash')
function concat(arr) {
    return _.concat(arr, [1, 2, 3, 4,]);
  }

module.exports.concat = concat 