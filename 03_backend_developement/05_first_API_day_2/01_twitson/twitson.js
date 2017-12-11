const fetchTweetsByAccount = require("./twitter");
const watson = require("./watson");


//twitter("Decathlon");


// function watson(tweetID, callback) {
//   fetchTweetsByAccount(tweetID, (json) => {
//     callback(json.map(tweet => tweet.text))
//   })
// }

function tweetsByAccount(text,callback) {
  fetchTweetsByAccount(text, function(elements) {
    elements.map(
      element => {
        return watson(element, function(emotion) {
          callback(emotion);
        });});
  });
}

tweetsByAccount("decathlon", console.log);
