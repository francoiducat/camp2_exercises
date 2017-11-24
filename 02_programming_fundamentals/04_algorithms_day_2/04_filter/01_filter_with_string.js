// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]



const myArray = [1, 2, 3, 4, 5];
const str = "";

function filter(myArray, str) {
  // Your code here
  const newArray = [];

  for(let i=0;i<myArray.length;i++){
    //
    if(str === "even"){
      if(myArray[i]%2===0){
        //console.log("even");
        newArray.push(myArray[i]);
      }
      else {
      //  console.log("odd");
      }
    }

    else if(str === "odd"){
      //
      if(myArray[i]%2===0){
      //  console.log("even");
      }
      else {
      //  console.log("odd");
        newArray.push(myArray[i]);
      }
    }
  }

  return newArray;
}

const output = filter(myArray, "even");
console.log(output);
const output2 = filter(myArray, "odd");
console.log(output2);

// do not remove this line, it is for tests
module.exports = filter;
