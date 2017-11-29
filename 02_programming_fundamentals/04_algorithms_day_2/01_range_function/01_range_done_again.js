// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.

const number = 1;
const endNumber = 10;


function range(number, endNumber) {
  const table = [];
  if (number < endNumber) {
    for (let i = number; i <= endNumber; i++) {
      table.push(i);
    }
    return table;
  } else {
    for (let j = number; j >= endNumber; j--) {
      table.push(j);
    }
    return table;
  }
}

const output = range(number,endNumber);
console.log(output);





// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
