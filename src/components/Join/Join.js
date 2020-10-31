import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './join.css'

export const Join = () =>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">JOIN</h1>
                <div><input placeholder="name" type="text" className="joinInput" onChange={(e) => setName(e.target.value)} /></div>
                <div><input placeholder="room" type="text" className="joinInput mt-20" onChange={(e) => setRoom(e.target.value)} /></div>
                <Link to={`/chat?name=${name}&room=${room}`}>
                <button className="button mt-20" type="submit">Sign IN</button>
                </Link>
            </div>

        </div>
    )
}