import express from 'express';
import chalk from 'chalk';
import { createServer } from "http";
import { Server } from "socket.io";
import cors from 'cors';

const app = express();
const httpServer = createServer(app);

app.use(cors());

const io = new Server(httpServer, {
    cors: {
        origin: ["http://127.0.0.1:3000", "http://localhost:3000"]
    }
});
io.on("connection", (socket) => {


    socket.on('message', (data) => {
        socketIO.emit('messageResponse', data);
    });

    console.log(`${socket.id} just connected.`);
    socket.on("disconnect", () => {
        console.log(`${socket.id} disconnected.`);
    })
})


httpServer.listen(4000, () => {
    console.log(chalk.green(`🦊 Dexter is LIVE on http://127.0.0.1:4000`));
});