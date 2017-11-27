// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  // Your code here
  let digits = [];
  const digitsToString = number.toString();
  //console.log(digitsToString);
  for(let i=0;i<digitsToString.length;i++){
    const x = parseInt(digitsToString.charAt(i),10);
    //console.log(digits[i]);
    digits.push(x*x);

  }
  //console.log(digits);
  return parseInt(digits.join(""),10);

}

const result = squareDigits(9876);
console.log(result);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
