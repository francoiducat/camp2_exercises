import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const OPENWEATHER_APIKEY = process.env.REACT_APP_OPENWEATHER_APIKEY;
const fetch = require("node-fetch");


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp : "Loading...",
      cityName : "Lille"};
  }

  weatherByCityName(city) {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${OPENWEATHER_APIKEY}`)
        .then(response => response.json())
        .then(forecast => forecast.main.temp)
        .catch(error => console.log(error));
  }

  componentDidMount() {
    this.weatherByCityName(this.state.cityName)
          .then(temperature => this.setState({temp : temperature}))
          .catch(e => console.log(e));
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Open Weather API Call</h1>
        </header>
          <p>Temperature in { this.state.cityName } is {this.state.temp} °C</p>
      </div>
    );
  }
}

export default App;
