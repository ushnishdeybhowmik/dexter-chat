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
    // const user = {
    //     socket_id: "",
    //     user_name: ""
    // }
    // socket.on("initiate", ({socket_id, user_name}) => {
    //     user.socket_id = socket_id;
    //     user.user_name = user_name;
    //     console.log(chalk.cyanBright(`${user_name} (${socket_id}) has connected.`));
    // });

    console.log(`${socket.id} just connected.`);
    socket.on("disconnect", () => {
        console.log(`${socket.id} disconnected.`);
    })
})


httpServer.listen(4000, () => {
    console.log(chalk.green(`🦊 Dexter is LIVE on http://127.0.0.1:4000`));
});