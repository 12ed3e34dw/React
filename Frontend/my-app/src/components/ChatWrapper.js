
import {toast} from "react-toastify";
import {socket} from "./MySocketio"
export  default function ChatWrapper() {

const onConnect = ()=>{
    toast.info('connect')
}

const onDisconnect = ()=>{
    toast.error('disconnect')
}

socket.on('connect', onConnect);
socket.on('disconnect', onDisconnect);

    return(
        <>
        <h1>Chat</h1>
        </>
    )
}