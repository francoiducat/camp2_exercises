// Create a function double which take an integer and return the double of the integer.
// Then, try to create a function called map. This function should take two parameters:
//
// - an array
// - a function
//
// this function apply the function passed as a parameter on each values of the array
//(also passed as a parameter).
//
// Finally, test map with an array of your choice and the double function.
//
// WARNING: You're not allowed to use `Array.map`!

// Your code here...
function double(number){
  return parseInt(number,10)*2;
}

function map(anArray,fn){
  const newArray = [];
  for(let i=0;i<anArray.length;i++){
    newArray.push(fn(parseInt(anArray[i],10)));
  }
  return newArray;
}

const theArray = [ 1, 2, 3, 4, 5];

const output = map(theArray, double);
console.log(output);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = { double: double, map: map };
