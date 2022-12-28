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
    return (
        <div className={messagesStyle.messages}>
            <div className={messagesStyle.messagesItems}>
                <MessageItem name='ilia' id={1}/>
                <MessageItem name='oleg' id={2}/>
                <MessageItem name='ivan' id={3}/>
                <MessageItem name='anna' id={4}/>
                <MessageItem name='artem' id={5}/>
                <MessageItem name='petr' id={6}/>
            </div>
            <div className={messagesStyle.messagesContent}>
                <Message message='hi'/>
                <Message message='how are you?'/>
                <Message message='whatsup?'/>
                <Message message='whatsup?'/>
                <Message message='whatsup?'/>
                <Message message='whatsup?'/>
            </div>
        </div>
    )
}

export default Messages
