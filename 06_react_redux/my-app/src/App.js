import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from "underscore";


var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

console.log(_.sortBy(stooges, 'name'));


function displayRow(products) {
  return (
    products.map( product => {
    return (<tr key={ product.decathlon_id}>
      <td>{product.title}</td>
      <td>{product.price}</td>
    </tr>);
  }));
};

const toto = "totototo";
const titi = "titititi"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      asc : true,
      products: props.products
    }
  }

  sortTable = (filter) => {
    let sortedProducts = _.sortBy(this.state.products, filter)
    if(this.state.asc){
      this.setState({products: sortedProducts, asc: false})
    } else {
      this.setState({products: sortedProducts.reverse(), asc:true})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello Seb !</h1>
        </header>
        <p className="App-intro">
          Hello let's <code>write code/App.js</code> with react js !
        </p>
        <h1>Products</h1>
          <table className="table table-striped">
          <thead>
        <tr>
            <th scope="col" onClick={()=> this.sortTable("title")} >Title</th>
            <th scope="col" onClick={()=> this.sortTable("price")} >Price</th>
        </tr>
      </thead>
        <tbody>

{ displayRow(this.state.products) }

    </tbody>

    </table>
      </div>
    );
  }
}


export default App;
