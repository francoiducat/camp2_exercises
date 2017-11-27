const log = (text) => console.log(text);

// A function that takes two parameters, this first one being an object like below
// and the second one being a callback function.
const getInput = (user1, callback) => {
  // When finished, we want to call the callback function with the key param...
  callback(user1.key);
};



getInput({user: "Lorem", key: "arrow_up"}, log);
