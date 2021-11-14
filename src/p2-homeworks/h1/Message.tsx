import React from 'react'
import './Message.scss'


type messageData = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: messageData) {
    return (
        <div className="message__container">
                <img className="message__avatar" src={props.avatar} alt="img" />

            <div className="message__block">
                <div className="message__descr">
                    <p className="message__descr_name">{props.name}</p>
                    <p className="message__descr_txt">{props.message}</p>
                </div>
                <div className="message__time">
                     {props.time}   
                </div>
            </div>
        </div>
    )
}

export default Message
