// Based on previous exercises, add a number of tries in the program.
// When the user won, display a message with the number of tries
// (Bonus: display a funny message when he success in one try).

const randomedNumber = Math.floor(Math.random()*100);

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let counter=1;

function guess(number) {
  console.log(`your number is ${number}`);
  const numberInput = parseInt(number, 10);
  if (isNaN(numberInput)) {
    counter++;
    reader.question("This was not a number\n", guess);
  } else if (numberInput < 0 || numberInput > 100) {
    counter++;

    reader.question("The number is between 1 and 100\n", guess);
  } else if (numberInput === randomedNumber) {
    if(counter === 1){
      console.log(`You are a master! You won in ${counter} try`);
    } else {
      console.log(`You won in ${counter} steps!`);
    }
    reader.close();

  } else if (numberInput < randomedNumber) {
    counter++;
    reader.question("Too low\n", guess);
  } else if (numberInput > randomedNumber) {
    counter++;
    reader.question("Too high\n", guess);
  }
}

reader.question("Try to guess the number :", guess);
