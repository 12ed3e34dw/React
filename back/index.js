import {Server} from 'socket.io';
import {createServer} from "http";


const httpServer=createServer();
const io=
    new Server(httpServer,{
    cors:{
        origin:"*"
    }
});

io.on("connection", (socket)=>{
    console.log(`User connected: ${socket.id} `);

    socket.on('disconnect',()=>{
        console.log(`User disconnected:${socket.id}`);
    })
})

httpServer.listen(3030,()=>{
    console.log(`User listening at http://localhost:3030`);
});

