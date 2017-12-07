// 16 day weather forecast for a location
// Context and Objectives
//
// The goal of this exercise is to make some calls to the Open Weather API and to parse the payloads.
// Specs
//
// Code two functions:
//
//     weatherByLatitudeAndLongitude accept an input like 32.661343, 51.680374
//     weatherByZipcode accept an input like "81464", "Iran"

const request = require("request");

const OPENWEATHER_APIKEY = process.env.OPENWEATHER_APIKEY;

function weatherByLatitudeAndLongitude(lat, lon) {

  return request({
    url: `http://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&units=metrics&APPID=${OPENWEATHER_APIKEY}`,
    method: "GET"

  }, (error, response, result) => {
    if (error) {
      console.log(error);
    }
    const json = JSON.parse(result);
    //console.log(json);
    console.log(json.list.map(element => {
      const date = new Date(element.dt * 1000);
      const yyyy = date.getFullYear();
      const mm = date.getMonth();
      const dd = date.getDate();
      const goodDate = `${dd}/${mm}/${yyyy}`;
      return {
        temp: element.main.temp,
        date: goodDate,
        weather: element.weather[0].description
      };
    }));
  });
}

weatherByLatitudeAndLongitude(32.661343, 51.680374);

function weatherByZipcode(zip) {
  return request({
    url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=metrics&APPID=${OPENWEATHER_APIKEY}`,
    method: "GET"
  }, (error, response, result) => {
    if (error) {
      console.log(error);
    }
    const json = JSON.parse(result);
    console.log(json.list.map(element => {
      const date = new Date(element.dt * 1000);
      const yyyy = date.getFullYear();
      const mm = date.getMonth();
      const dd = date.getDate();
      const goodDate = `${dd}/${mm}/${yyyy}`;
      return {
        temp: element.main.temp,
        date: goodDate,
        weather: element.weather.map(element => {

          return {
            id: element.id,
            main : element.main,
            description : element.description
          };
        })
      };
    }));
  });
}



weatherByZipcode(94040);



module.exports = weatherByLatitudeAndLongitude;

//
// curl 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&APPID=87ce9a2ad1468469932168fbc44f5d12'
//
// curl 'http://api.openweathermap.org/data/2.5/weather?q=bogota&units=metric&APPID=87ce9a2ad1468469932168fbc44f5d12'
//
// curl 'http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&APPID=87ce9a2ad1468469932168fbc44f5d12'
