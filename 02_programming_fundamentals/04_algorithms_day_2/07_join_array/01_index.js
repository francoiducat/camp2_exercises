// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"

const anArray = ["zero", "one", "two"];

function myCallBackFunction(arrayToReduce) {

}
function joinArray(theArray, separator) {
  return theArray.reduce((accumulator, currentValue) =>  accumulator + separator + currentValue);
}

console.log(joinArray(anArray, " - "));

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
