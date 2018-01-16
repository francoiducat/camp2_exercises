import React from 'react';
import './App.css';

function Login(props) {

    return(
      <div className="container mb-auto">
      <p className="App-intro mt-3">To get started, please login.</p>
          <form onSubmit={props.onSubmit}>
              <div className="form-group">
                <label>Login</label>
                <input onChange={props.handleOnChange} type="text" className="form-control" id="login" placeholder="Enter login"></input>
              </div>
              <button type="submit" className="btn btn-primary" >Login</button>
          </form>
      </div>);
}

export default Login
