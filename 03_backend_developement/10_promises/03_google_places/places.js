// temperatureAt("Decathlon Campus"); // Displays 17 ˚C

const fetch = require("node-fetch");
const OPENWEATHER_APIKEY = process.env.OPENWEATHER_APIKEY;
const GOOGLEPLACES_APIKEY = process.env.GOOGLEPLACES_APIKEY;

//const place = "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille";

function getPlaceCoordinates(place) {
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&key=${GOOGLEPLACES_APIKEY}`)
    .then(response => response.json())
    .then(json => json.results)
    .then(place_details => place_details[0])
    .then(object => object.geometry)
    .then(coordinates => coordinates.location)
    .then(location => weatherByLatitudeAndLongitude(location.lat,location.lng))
    .then(temps => {
      temps.forEach(tempObject => {console.log("Temperature at " + place + " is " + tempObject.temperature + " at " + timestampToDate(tempObject.date));});
    })
  ;
}

getPlaceCoordinates("Decathlon Campus");

function weatherByLatitudeAndLongitude(latitude,longitude) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${OPENWEATHER_APIKEY}`)
    .then(response => response.json())
    .then(json => json.list)
    .then(forecasts => forecasts.map( forecast => {
      return {
        temperature : forecast.main.temp,
        date : forecast.dt
      };
    }));
}

function timestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


module.exports = {
  getPlaceCoordinates:getPlaceCoordinates,
  weatherByLatitudeAndLongitude:weatherByLatitudeAndLongitude
};
