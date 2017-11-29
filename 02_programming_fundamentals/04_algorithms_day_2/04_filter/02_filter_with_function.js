// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function filter(array, fn) {
  // Your code here
  const filtered = [];
  for(let i=0;i<array.length;i++) {
    if(fn(array[i])){
      //console.log(array[i]);
      filtered.push(array[i]);
    }
  }
  return filtered;
}

function pickEvenNumbers(number){
  return number % 2 === 0;
}

const table = [1,2,3,4,5,6,7,8,8,8,9];

const output = filter(table, pickEvenNumbers);
console.log(output);

// do not remove this line, it is for tests
module.exports = filter;
