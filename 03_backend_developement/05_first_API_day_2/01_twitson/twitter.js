const OAuth = require("oauth");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET, "1.0A", null, "HMAC-SHA1"
);

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

function fetchTweetsByAccount(twitterAccount, callback){

  oauth.get(url + twitterAccount,
    process.env.TWITTER_ACCESS_TOKEN,
    process.env.TWITTER_ACCESS_SECRET,
    function(error, data) {
      // Do something with data...
      if (error) {
        console.log(error);
      } else {
        const texts = JSON.parse(data).map(function(tweet) {
          return tweet.text;
        });
        callback(texts);
      }
    });
}

module.exports = fetchTweetsByAccount;
