import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Chat from './Chat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isLoggedIn: false,
      newMessage:"",
      messages: [{content:"Example Message 1"},
                 {content:"Example Message 2"}
                ]};
  }

  displayChat = () => {
    if(!this.state.isLoggedIn) {
      return(
        <Login login={this.state.user} onSubmit={this.onSubmit} handleOnChange={this.handleOnChange} />
      );
    } else {
      return(
        <Chat
          login={this.state.user}
          handleNewMessage={this.handleNewMessage}
          addMessage={this.addMessage}
          displayMessages={this.displayMessages} />);
    }
  }

  handleNewMessage = event => {
    this.setState({newMessage: event.target.value});
  }

  addMessage = event => {
    event.preventDefault();
    const tableau = this.state.messages.slice();
    tableau.push({content : this.state.newMessage});
    this.setState({messages: tableau});
  }

  displayMessages = () => {
    const displayedMessages = this.state.messages.slice();
    const latestMessage = displayedMessages.reverse();
    return(
      latestMessage.map( message => {
        return(<tr key={message.content}><td className="col">{message.content}</td></tr>);
      }));
  }

  handleOnChange = event => {
    this.setState({user: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({isLoggedIn: true})
  }

  displayUsers = () => {

  }

  componentDidMount() {
    // We open a connection from the client, related to the server
    const ws = new WebSocket("ws://localhost:4000");
    const nbUsersElem = document.getElementById("nbUsers");

    // What to do when we receive a message?
    ws.onmessage = (event) => {
      console.log("Message: " + event.data + " clients connected");
      nbUsersElem.innerHTML = event.data;
    };

    ws.onopen = (event) => {
      const user = this.state.user;
      ws.send(user);
    };

    // Alert the server that the client is gone
    window.addEventListener("beforeunload", () => ws.send("CLOSE"));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title mt-5">SLACKY</h1>
        </header>
        <p>There is <span id="nbUsers">0</span> users connected.</p>

        {this.displayChat()}
      </div>
    );
  }
}

export default App;
