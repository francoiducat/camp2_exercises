function factorialAndThenDo(number, callback) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  callback(result);
  return result; 
}
const x = factorialAndThenDo(5, function(result) {
  console.log("The result of your operation is ", result);
});

console.log(x);
