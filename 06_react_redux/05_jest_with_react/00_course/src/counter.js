import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    const startValue = this.props.startValue || 0;
    this.state = { counter: startValue };

    this.increment = this.increment.bind(this);
  }

  decrement = () => {
    this.setState({counter: this.state.counter - 1 });
  }

  increment() {
    this.setState({ counter: this.state.counter + 1});
  }

  render() {
    return (
      <div className="App">
        <h1>My awesome counter</h1>
        <button onClick={this.decrement}>-</button>
        <span id="counter">{this.state.counter}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
