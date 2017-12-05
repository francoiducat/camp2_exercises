const request = require("request");


const simpleGet = (callback) => {request(
  {
    url: "https://postman-echo.com/get",
    method: "GET"
  },
  function(error, response, result) {
    //console.log("error : ", error);
    //console.log("result : ", result);
    callback(result);
  }
);};

function output(toto) {
  console.log(toto);
}

simpleGet(output);

const simpleGetWithParams = (callback) => {
  request({
    url: "https://postman-echo.com/get",
    method: "GET",
    qs:{foo:"bar", program:"camp2",people:["Frieda","Francis"]}
  },
  function(error, response, result) {
    //console.log("error : ", error);
    //console.log("result : ", result);
    callback(JSON.parse(result).args);
  }
  );
};

function outputwithParam(resultParsed){
  console.log(resultParsed);
}

simpleGetWithParams(outputwithParam);


const validateTimestamp = (callback) => {

  const date = new Date();
  const YYYY = date.getFullYear();
  const mm = date.getMonth();
  const dd = date.getDate();
  const theDate = `${YYYY}-${mm}-${dd}`;

  request({
    url: "https://postman-echo.com/time/valid?timestamp=" + theDate,
    method: "GET"
  },
  function(error, response, result) {
    //console.log("error : ", error);
    //console.log("result : ", result);
    callback(result);
  }
  );
};


module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp:validateTimestamp
};
