// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"

const theArray = ["zero", "one", "two"];

function joinWithDash(string1,string2){
  return `${string1} -- ${string2}`;
}

function joinArray(anArray){
  return anArray.reduce(joinWithDash,"toto");
}




console.log(joinArray(theArray));

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;



// console.log(joinArray(anArray, " - "));

// function joinArray(theArray, separator) {
//
//   return theArray.reduce((accumulator, currentValue) =>  accumulator + separator + currentValue);
// }
