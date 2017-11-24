// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```

let mysea = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
let sea = [];

for(let j=0;j<sea.length-1;j++){
  sea.push(mysea[j]);
}

for(let i = 1;i<=9;i++){
  //
  if(i===1){
    console.log(mysea);
  }

  else if(i===2){
    sea[24] = "X";
    console.log(sea.join(""));
    sea[24] = "~";
  }

  else if(i===4){
    sea[5] = "0";
    console.log(sea.join(""));
    sea[5] = "~";
  }

  else if(i===7){
    sea[17] = "0";
    console.log(sea.join(""));
    sea[17] = "~";
  }

  else if(i===9){
    sea[6] = "X";
    console.log(sea.join(""));
    sea[6] = "~";
  }

}
