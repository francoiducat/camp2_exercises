const request = require("request");

// Replace string with correct credentials
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_PASSWORD;
const url = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");


function watson(text, callback) {

  const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
  request({
    url: uri,
    headers: {
      "Authorization": auth
    }
  }, function(error, response, body) {
    const content = JSON.parse(body).emotion.document.emotion.joy*100;
    callback(text + " : " +content);
  });
}

module.exports = watson;
