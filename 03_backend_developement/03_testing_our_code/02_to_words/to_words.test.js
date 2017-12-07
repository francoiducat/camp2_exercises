const toWords = require("./to_words.js");

test("sentence to be splitted in an array", () => {

  const sentence = "hello toto titi";
  const allWords = sentence.split(/[.?!, :\/]+/);

  expect(toWords.toWords("hello toto titi /")).toEqual(allWords);
});
