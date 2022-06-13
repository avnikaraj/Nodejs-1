function sum(arr) {
    return arr.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  }

module.exports.sum = sum 