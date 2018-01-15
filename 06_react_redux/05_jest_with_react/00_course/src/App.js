import React, { Component } from 'react';
import logo from './logo.svg';
import Link from './Link';
import CheckboxWithLabel from './CheckboxWithLabel';
import './App.css';

const hyperlink = "https://www.facebok.com"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CheckboxWithLabel labelOn={"labelOn"} labelOff={"labelOff"}/>
        <br/><br/>
        <Link page={ hyperlink }><br /> <br />  { hyperlink }</Link>
      </div>
    );
  }
}

export default App;
