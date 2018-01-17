const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const server = require("http").createServer();
const app = express();

// Variable to store messages for the time of the session
const messages = [];

// Launches the wss
const wss = new WebSocket.Server({ server: server});

wss.on("connection", function connect(ws, req) {
  ws.on("message", function incoming(data) {
    const message = JSON.parse(data);
    console.log(message);
    switch (message.type) {
    case "LOGIN":
      wss.clients.forEach(client => {
        if(client.readyState === WebSocket.OPEN){
          client.send(JSON.stringify({ type: "MESSAGES", data: messages}));
        }
      });
      return;
    case "NEW_MESSAGE":
      messages.push({ userName: message.userName, message: message.message});
      console.log(messages);
      wss.clients.forEach( client => {
        if(client.readyState === WebSocket.OPEN){
          client.send(JSON.stringify({ type: "MESSAGES", data: messages }));
        }
      });
      return;
    }
  });
  ws.on("error", console.warn);
});




server.on("request", app);
server.listen(8080, function listening() {
  console.log("Listening on ", server.address().port);
});
