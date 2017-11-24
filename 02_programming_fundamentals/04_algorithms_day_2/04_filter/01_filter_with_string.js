// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]

function filter(myArray, str) {
  // Your code here
  for(let i=0;i<myArray.length;i++){
    //
    const newArray = [];

    if(str === "even"){
      if(myArray[i]%2===0){
        //console.log("even");
        newArray.push(myArray[i]);
      }
      else {
      //  console.log("odd");
      }
      return newArray;
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
      return newArray;
    }
  }
}

const myArray = [1, 2, 3, 4, 5];
const str = "";

// do not remove this line, it is for tests
module.exports = filter;
