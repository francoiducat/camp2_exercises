// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```




for (let i=5;i>0;i--){
  let line = "";
  for(let j=0;j<i;j++){
    line += "*";
  }
  console.log(line);
}
