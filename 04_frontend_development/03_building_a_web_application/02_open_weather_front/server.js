const fetch = require("node-fetch");
const OPENWEATHER_APIKEY = process.env.OPENWEATHER_APIKEY;
const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use(express.static('./'));

  app.get('/:city', function(request, result) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${request.params.city}&units=metric&APPID=${OPENWEATHER_APIKEY}`)
      .then(response => response.json())
      .then(json => {
        //result.send(request.params.city);
        //console.log(json);
        const temperature = json.main.temp.toString();
        const humidity = json.main.humidity.toString();
        if (humidity > 80) {
          result.send(`
                     <!DOCTYPE html>
                     <html>
                     <head>
                     <title>weather</title>
                     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
                     <link rel="stylesheet" href="/css/styles.css">
                     <style>
                     .jumbotron {
                         margin-bottom: 0px;
                         background: url(./rain.png);
                         background-position: 90%;
                         background-size: contain;
                         background-repeat: no-repeat;
                         color: #333;
                     }
                     </style>
                     </head>
                     <body>
                       <div class="container-fluid">
                       <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">Température à ${request.params.city} : ${temperature} °C</h1>
      <p class="lead">Humidity : ${humidity} %.</p>

      <form class="form-inline">
        <input class="search form-control mr-sm-2" type="search" placeholder="Ville" aria-label="Ville">
        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
      </form>

    </div>
  </div>
                       </div>

                     </body>
                     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
                     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
                     <script>
                     const searchInput = document.querySelector(".search");
                     searchInput.addEventListener("keypress", function(event) {
                       if(event.charCode == 13)
                       {
                          console.log(searchInput.value);
                          window.location.href = 'http://localhost:3000/' + searchInput.value;
                       }
                     })
                     ;


                     </script>
                     </html>
                   `);
        } else {
          result.send(`
            <!DOCTYPE html>
            <html>
            <head>
            <title>weather</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
            <link rel="stylesheet" href="style.scss">
            <style>
            .jumbotron {
                margin-bottom: 0px;
                background: url(./sun.png);
                background-position: 90%;
                background-size: contain;
                background-repeat: no-repeat;
                color: #333;
            }
            </style>
            </head>
            <body>
            <div class="container-fluid">
            <div class="jumbotron jumbotron-fluid">
    <div class="container">
    <h1 class="display-3">Température à ${request.params.city} : ${temperature} °C</h1>
    <p class="lead">Humidity : ${humidity} %.</p>
    </div>
    </div>

            </div>

            </body>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
            <script src="server.js"></script>
            </html>
                           `);
        }
      });
  });


app.listen(port, function() {
  console.log("Server listening on port : " + port);
});


// curl "http://api.openweathermap.org/data/2.5/weather?q=Lille&units=metric&APPID=87ce9a2ad1468469932168fbc44f5d12"


// <!DOCTYPE html>
// <head><title>Weather at ${request.params.city}</title></head>
// <body>
//
// Température à ${request.params.city} : ${temperature}<br />
// Humidity : ${humidity}<br />
// Bad weather<br />
// <img src="./rain.png" />
// </body>
