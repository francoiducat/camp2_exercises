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


const stars = [" "," "," ","*"];

console.log(stars.join(""));

for(let i=1;i<=3;i++){
  stars[3-i] = "*";
  stars.push("*");
  console.log(stars.join(""));
}
