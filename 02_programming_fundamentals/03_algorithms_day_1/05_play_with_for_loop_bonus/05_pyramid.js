// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

/*
for(let j=1;j<=7;j=j+2){
  let result = "";
  for(let i=0;i<j;i++){
    result += "*";
  }
  console.log(result);
}

*/




const myLineOfStars = [" ", " ", " ","*"];
console.log(myLineOfStars.join(""));

for(let i=1;i<=3;i++){
  myLineOfStars[3-i] = "*";
  myLineOfStars.push("*");
  console.log(myLineOfStars.join(""));
}
