// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.

function range(number, endNumber) {

  if (number < endNumber) {
    const theArray = [];
    for (let i = number; i < endNumber + 1; i++) {
      theArray.push(i);
    }
    return theArray;
  } else {
    const theArray = [];
    for (let i = number; i > endNumber - 1; i--) {
      theArray.push(i);
    }
    return theArray;
  }
}






// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
