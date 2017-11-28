// Using stream. Write a program that generates a random number between 1 and 100 (the mystery number) and asks the user to write a number (he should try to guess the number).
//
// Here are the available answers of the program:
//
//     It's not a number: "This was not a number"
//     Out of range: "The number is between 1 and 100
//     Too low: "Too low"
//     Too high: "Too high"
//
// The program must loop until the user guesses the right number.



function randomNumber() {
  const x = Math.floor(Math.random()*100);
  return x;
}

const randomedNumber = randomNumber();

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function guess(number) {
  console.log(`your number is ${number}`);
  const numberInput = parseInt(number, 10);
  if (isNaN(numberInput)) {
    //console.log("This was not a number");
    reader.question("This was not a number\n", guess);
  } else if (numberInput < 0 || numberInput > 100) {
  //  console.log("Out of range: The number to guess is between 1 and 100");
    reader.question("The number is between 1 and 100\n", guess);
  } else if (numberInput === randomedNumber) {
    console.log("You won!");
    reader.close();
  } else if (numberInput < randomedNumber) {
    //console.log("Too low");
    reader.question("Too low\n", guess);
  } else if (numberInput > randomedNumber) {
    //console.log("Too high");
    reader.question("Too high\n", guess);
  } //else {
  //   //   console.log(`number to find is ${randomedNumber}`);
  //   //   reader.question("Try to guess the number :", guess);
  // }

}

reader.question("Try to guess the number :", guess);
