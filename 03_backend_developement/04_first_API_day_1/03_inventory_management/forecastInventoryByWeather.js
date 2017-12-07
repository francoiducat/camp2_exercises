const request = require("request");

const OPENWEATHER_APIKEY = process.env.OPENWEATHER_APIKEY;
const GOOGLEPLACES_APIKEY = process.env.GOOGLEPLACES_APIKEY;



const stores = [
  "Decat Bordeaux Ste Catherine (Decathlon), 130 Rue Sainte-Catherine, 33000 Bordeaux",
  "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille",
  "Decathlon Strasbourg Geispolsheim, 5 Rue du Fort, 67118 Geispolsheim",
  "Decathlon Wagram Paris, 26 Avenue de Wagram, 75008 Paris",
  "Decathlon Lorient, Rue Colonel le Barillec, 56100 Lorient",
  "Decathlon, 4 Boulevard de Mons, 59650 Villeneuve-d'Ascq"
];




function forecastInventoryByWeather(store){
  return request(
    {
      url:`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${store}&key=${GOOGLEPLACES_APIKEY}`,
      method:"GET"
    }, (error,response,result) => {
      if(error){
        console.log(error);
      }

      const json = JSON.parse(result);
      //console.log(json);
      const results = json.results;
      console.log(results[0].geometry.location);
    }
  );

}

forecastInventoryByWeather("Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille");





//curl "https://maps.googleapis.com/maps/api/place/textsearch/json?query=130+Rue+Sainte-Catherine,33000+Bordeaux&key=AIzaSyBgsf7t-ymYwQ-j4MHEj56LWu7NSaqLaGI"
