import express from 'express';
import chalk from 'chalk';
import { createServer } from "http";
import { Server } from "socket.io";
import cors from 'cors';

const app = express();
const httpServer = createServer(app);

app.use(cors());

const socketIO = new Server(httpServer, {
    cors: {
        origin: true
    }
});

let users = [];

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
  });

  //Handles typing response 
  socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data));

  //Handles idle event
  socket.on('notTyping', (data) => {
    socket.broadcast.emit('typingResponse', data);
  });
  
  //Listens when a new user joins the server
  socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);

    console.log(users);

    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});

httpServer.listen(4000, () => {
    console.log(chalk.green(`🦊 Dexter is LIVE on http://127.0.0.1:4000`));
});