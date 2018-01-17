import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">REDUX</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: "INCREMENT"})
  }
}

const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
