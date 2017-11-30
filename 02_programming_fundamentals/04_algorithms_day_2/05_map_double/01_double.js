// Create a function `double` which take an array of integer as parameter
//and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

// Your code here...

const myArray = [ 1, 2, 3, 4, 5];

function double(anArray) {
  const newArray = [];
  for (let i=0;i<anArray.length;i++){
    newArray.push(parseInt(anArray[i],10)*2);
  }

  return newArray;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
