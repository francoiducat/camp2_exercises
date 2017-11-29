// Modify this value to test with other values
let numberOfLine = 11;
// Your code here ⬇



for(let i=0;i<numberOfLine;i++) {
  let line = "";
  for (let j = numberOfLine; j > i; j--) {
    line += j;
  }
  console.log(line);
}



//
// 54321
// 5432
// 543
// 54
// 5
