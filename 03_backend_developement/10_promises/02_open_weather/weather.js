const fetch = require("node-fetch");
const OPENWEATHER_APIKEY = process.env.OPENWEATHER_APIKEY;

// latitude = 32.661343;
// longitude = 51.680374;

// Get temperature for a given city
function weatherByCityName(city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${OPENWEATHER_APIKEY}`)
    .then(response => response.json())
    .then(forecast => forecast.main.temp)
  ;
}
//weatherByCityName("lille");

// Get temperature for specific latitude and longitude
function weatherByLatitudeAndLongitude(latitude,longitude) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${OPENWEATHER_APIKEY}`)
    .then(response => response.json())
    .then(json => json.list)
    .then(forecasts => forecasts.map( forecast => {
      return forecast.main.temp;
    }))
  ;
}
//weatherByLatitudeAndLongitude(32.661343,51.680374);

module.exports = {
  weatherByCityName:weatherByCityName,
  weatherByLatitudeAndLongitude:weatherByLatitudeAndLongitude
};
