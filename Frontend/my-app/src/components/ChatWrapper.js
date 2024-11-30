
import {toast} from "react-toastify";
import {socket} from "./MySocketio"
import {useEffect, useState} from "react";
import ChatMessageList from "./ChatMessageList";
import ChatMessageForm from "./ChatMessageForm";
export  default function ChatWrapper() {

      //Сообщение
    const [messages, setMessages] = useState([]);


    //Один раз подключается и будет второй раз присоединятся
    useEffect(() => {
        socket.on('new_message', (data) => {

            setMessages(prevMessage=>[...prevMessage,data]);
        })
    })


    return(
        <>
            <h1>Chat</h1>
            <ChatMessageList messages={messages}/>
            <hr/>
            <ChatMessageForm/>
        </>
    )
}