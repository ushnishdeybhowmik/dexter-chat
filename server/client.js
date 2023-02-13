import express from 'express';
import {io} from 'socket.io-client';
const app = express();

app.use("/chat", (req, res) => {
    let name = req.query.name;
    //const name = prompt("Enter Name");
    const socket = io('http://127.0.0.1:3000');

    socket.on("connect", () => {
        console.log(`Connected to Dexter with ID : ${socket.id}`)
        socket.emit("initiate", {
            socket_id: socket.id,
            user_name: name
        });
    });

    res.send(`Hello ${name}`);

    socket.on("disconnect", (reason) => {
        if(reason != undefined){
            console.log(`${name} disconnected with reason : ${reason}`);
        }
        else console.log(`${socket.id} disconnected.`);
    })
});

app.listen(5000, () => {
    console.log("Client is ready.");
})