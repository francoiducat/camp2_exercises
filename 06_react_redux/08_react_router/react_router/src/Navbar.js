import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, NavLink,
  Link, Switch
} from 'react-router-dom'


// const Features = () => (
//   <div>
//     <h2>Features page</h2>
//   </div>
// )

const Pricing = () => (
  <div>
    <h2>Pricing page</h2>
  </div>
)


const SubMenuCategories = ( {match} ) => (
  <div>
    <ul>
      <li><Link to={`${match.url}/category-1`}>category one</Link></li>
      <li><Link to={`${match.url}/category-2`}>category two</Link></li>
      <li><Link to={`${match.url}/category-3`}>category three</Link></li>
    </ul>
  </div>
)

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="./">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li>
            <NavLink to = "/dashboard" className="nav-link">Dashboard</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to = "/features" className="nav-link">Features</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to = "/pricing" className="nav-link">Pricing</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to = "/categories" className="nav-link">Categories</NavLink>
          </li>
        </ul>
      </div>
    </nav>
)

export { Navbar, Pricing, SubMenuCategories };
