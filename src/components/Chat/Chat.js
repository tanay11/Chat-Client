import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './chat.css'
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

let socket;

export const Chat = ({location}) =>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([])
    const serverEndpoint = "localhost:5000";

    useEffect(() => {
        const {room, name} = queryString.parse(location.search);
        console.log("name0",name,room,queryString.parse(location.search))
        setName(name);
        setRoom(room);
        socket = io(serverEndpoint);
        socket.emit('join',//event
                    { name, room },//payload
                    (error) => {
                        if(error) {
                            alert(error);
                        }
                        });
        return () => {
            socket.emit("disconnect");
        }
    },[serverEndpoint,location.search])

    useEffect(() => {
        socket.on('message',(message) => {
            setMessages([...messages,message])
        })    
        
    },[messages])

    const sendMessage = (event) =>{
        event.preventDefault();
        if(message){   //from set state
            socket.emit('sendMessage', message ,() => setMessage(''))
        }
    }

    console.log("message",messages,message)

    return(
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}