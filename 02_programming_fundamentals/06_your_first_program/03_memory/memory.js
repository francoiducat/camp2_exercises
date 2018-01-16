//
// The memory is a game where you have turned-over cards in front of you and you must find pairs.
// You can return two cards at a time, if they are the same, they stay visible, if not, they go back to being flipped over.
//
// Instead of cards, we will be using emojis and you can start with these:
//
// const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
//
// For this progran, you will need to install packages in the exercise directory. You do that with the command npm install.
// It will allow you to use the clear() function that will clear your terminal (you need to show only the cards you found).
//


// This function will clear the terminal when called
const clear = require("cli-clear");


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
console.log(cards.join("   "));

let counter =0;
function turnOver(card){
  //console.log(`your number is ${number}`);
  let cardToTurnOver = parseInt(card, 10);
  console.log(`The card you want to turn over is card number ${cardToTurnOver}`);
  cardToTurnOver--;
  //console.log(cardToTurnOver);
  let x = cards[cardToTurnOver];
  console.log(x);
  counter++;
  if(counter ===1){
    reader.question("Turn over one card ",turnOver);
  } else {
    console.log(x);

    reader.close();
  }

}
reader.question("Turn over one card ",turnOver);
