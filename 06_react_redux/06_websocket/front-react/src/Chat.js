import React from 'react';
import './App.css';

function Chat(props) {
    console.log(props.displayMessages());
    return(
      <div className="container mb-auto mt-5">
        <p>Welcome {props.login}</p>
          <form onSubmit={props.addMessage}>
              <div className="form-group">
                <input onChange={props.handleNewMessage} required type="text" className="form-control" id="chat" placeholder="Enter your message"></input>
              </div>
              <button type="submit" className="btn btn-primary mb-5" >Send</button>
          </form>
          <div>
            <table className="table">
              <tr><th>Messages</th></tr>
              {props.displayMessages()}
            </table></div>
      </div>);
}

export default Chat
