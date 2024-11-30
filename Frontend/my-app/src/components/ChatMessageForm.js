import socket from "./MySocketio";
import {Component} from "react";

export default function ChatMessageForm() {
    const doEmitMessage=(ev)=>{
        ev.preventDefault()
        const msg=ev.target.message.value
        console.log(msg)

        socket.emit("message", msg)
        ev.target.message.value='';
    }

    return (
        <>
        <forn onSubmit={doEmitMessage}>
            <input type="text" name="message"/>
            <input type="submit" value="Отправить"/>
        </forn>
        </>
    )

}