import React, { Component } from 'react';
import './App.css';
import BasicExample from './Router';
import Features from './Features';
import { Navbar, Pricing, SubMenuCategories } from './Navbar';
import { Dashboard } from './Dashboard';
import { Footer } from './Footer';

import {
  BrowserRouter as Router,
  Route, NavLink,
  Link, Switch
} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="Container container-fluid">
      <main className="Container">
        <Navbar />

        <div className="container">
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/features" component={Features}/>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/categories" component={SubMenuCategories}/>

        </div>

        <hr />

        <p className="App-intro">
          React router basic example :
        </p>
        <BasicExample />




      </main>
      <Footer />
      </div>

    );
  }
}

export default App;
