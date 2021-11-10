import React from 'react'
// import './Message.module.scss'
// import style from './Message.module.scss'

type messageData = {
    avatar: any,
    name: string,
    message: string,
    time: string,
}

function Message(props: messageData) {
    return (
        <div>
            <img src={props.avatar} alt="img" />
            <div className='message__lower-triangle'></div>
            <div className='message__block'>
                <p>{props.name}</p>
                <p>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
