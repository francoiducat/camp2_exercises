import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: "",
    };
  }

  handleChange = event => {
    this.setState({ newMessage: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state.newMessage);
    this.setState({ newMessage: ""});
  };

  render() {
    return (
      <div className="container">

        <div className="container">Logged in as {this.props.userName}</div>

        <div className="container form-container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.newMessage}
              onChange={this.handleChange}
              placeholder="Your message here"
            />
            <button className="btn btn-success" type="submit">Send</button>
          </form>
        </div>

        <div className="container messages-container">
        {this.props.messages.map( (message, index) =>
          (<div className="container message-container" key={index}>
            <div className="author float-left font-weight-bold">{message.userName}</div>
            <div className="message">{message.message}</div>
          </div>)
        )}
        </div>
      </div>
    );
  }


}

export default Chat;
