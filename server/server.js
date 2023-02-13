import express from 'express';
import chalk from 'chalk';
import { createServer } from "http";
import { Server } from "socket.io";


const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);
io.on("connection", (socket) => {
    const user = {
        socket_id: "",
        user_name: ""
    }
    socket.on("initiate", ({socket_id, user_name}) => {
        user.socket_id = socket_id;
        user.user_name = user_name;
        console.log(chalk.cyanBright(`${user_name} (${socket_id}) has connected.`));
    });

    socket.on("disconnect", (reason) => {
        if(reason != undefined){
            console.log(`${user.user_name} disconnected with reason : ${reason}`);
        }
        else console.log(`${socket.id} disconnected.`);
    })
})


httpServer.listen(3000, () => {
    console.log(chalk.green(`🦊 Dexter is LIVE on http://127.0.0.1:3000`));
});