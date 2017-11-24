/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fizzBuzz(list) {

  const myArray = [];

  for (let i = 0; i < list.length; i++) {

    if (list[i] % 15 === 0) {
      myArray.push("FizzBuzz");
    }  else if(list[i] % 5 === 0){
      myArray.push("Buzz");}
    else if(list[i] % 3 === 0){myArray.push("Fizz");}
    else {
      myArray.push(list[i]);
    }
  }
  return myArray;
}

//
// let number;
//
// let result = number % 3;
// let divisibleBy3;
//
// if (result === 0){
//   divisibleBy3 = true;
//   return divisibleBy3;
// }












//
//
//
// function fizzBuzz(list) {
//   let element;
//   function func(element){return element;}
//   const newArray = list.forEach(func);
//   console.log(newArray);
// }


module.exports = fizzBuzz;
