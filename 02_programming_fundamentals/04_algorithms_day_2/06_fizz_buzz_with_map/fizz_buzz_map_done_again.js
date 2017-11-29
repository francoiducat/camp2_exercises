/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fizzBuzz(element){
  if(element % 15 === 0){
    return "fizzBuzz";
  } else if (element % 5 === 0){
    return "Buzz";
  } else if(element % 3 === 0){
    return "Fizz";
  } else return element;
}

const x = list.map(fizzBuzz);
console.log(x);

module.exports = fizzBuzz;





//const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(fizzBuzz);

//console.log(list1);
