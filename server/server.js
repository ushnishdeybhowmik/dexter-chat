import express from 'express';
import chalk from 'chalk';
import { createServer } from "http";
import { Server } from "socket.io";
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const httpServer = createServer(app);

const PORT = process.env.PORT || 4000;
const URI = process.env.DBURL;

app.use(cors());

const socketIO = new Server(httpServer, {
    cors: {
        origin: true
    }
});


mongoose.connect(URI, {
    useNewUrlParser : true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

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

db.once('open', () => {
  httpServer.listen(PORT, () => {
    console.log(chalk.green(`🦊 Dexter is LIVE`));
  });
})