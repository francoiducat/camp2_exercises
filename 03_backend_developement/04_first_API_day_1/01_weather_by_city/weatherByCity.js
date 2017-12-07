// Code the function weatherByCityName getting a city as input and return the temperature from
// Open Weather such as:
//
// weatherByCity("Bogota")
// > 17°C


const request = require("request");

const OPENWEATHER_APIKEY = process.env.OPENWEATHER_APIKEY;

function weatherByCity(city) {

  return request({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${OPENWEATHER_APIKEY}`,
    method: "GET"

  }, (error, response, result) => {
    if(error) {console.log(error);}

    const json = JSON.parse(result);
    const temp = json.main.temp;
    //console.log(temp);
    return `${temp} °C`;
  });
}

//weatherByCity("London");


module.exports = weatherByCity;
