import React from 'react'
import messagesStyle from './Messages.module.css'
import {NavLink} from 'react-router-dom';
import navbarStyle from "../Navbars/Navbar.module.css";

type MessageItemType = {
    name: string;
    id: number;
}

const MessageItem = (props: MessageItemType) => {
    let path = '/messages/' + props.id;

    return (
        <div className={messagesStyle.messageName}>
            <NavLink to={path} activeClassName={messagesStyle.active}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={messagesStyle.message}>{props.message}</div>
    )

}


const Messages = () => {

    const messagesItemData = [
        {id: 1, name: 'ilia'},
        {id: 2, name: 'oleg'},
        {id: 3, name: 'ivan'},
        {id: 4, name: 'anna'},
        {id: 5, name: 'ilai'},
        {id: 6, name: 'petr'},
    ];

    const message = [
        {id: 1, message: 'push me'},
        {id: 2, message: 'and then just touch me'},
        {id: 3, message: 'till i can get my'},
        {id: 4, message: 'satisfaction!'},
        {id: 5, message: 'how are you doing?'},
        {id: 6, message: 'whatsss up?'},
    ];

    return (
        <div className={messagesStyle.messages}>
            <div className={messagesStyle.messagesItems}>
                <MessageItem name={messagesItemData[0].name} id={messagesItemData[0].id}/>
                <MessageItem name={messagesItemData[1].name} id={messagesItemData[1].id}/>
                <MessageItem name={messagesItemData[2].name} id={messagesItemData[2].id}/>
                <MessageItem name={messagesItemData[3].name} id={messagesItemData[3].id}/>
                <MessageItem name={messagesItemData[4].name} id={messagesItemData[4].id}/>
                <MessageItem name={messagesItemData[5].name} id={messagesItemData[5].id}/>
            </div>
            <div className={messagesStyle.messagesContent}>
                <Message message={message[0].message}/>
                <Message message={message[1].message}/>
                <Message message={message[2].message}/>
                <Message message={message[3].message}/>
                <Message message={message[4].message}/>
                <Message message={message[5].message}/>
            </div>
        </div>
    )
}

export default Messages
