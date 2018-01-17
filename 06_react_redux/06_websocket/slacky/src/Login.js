import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleUserName(this.state.value);
  };

  render() {
    return (
      <div className="mt-4">
        <p>Please login to chat</p>
        <form className="login" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button type="submit" className="btn btn-success">Log in</button>
        </form>
      </div>
    );
  }

}

export default Login;
