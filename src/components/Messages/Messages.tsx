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

    let messagesItemData = [
        {id: 1, name: 'ilia'},
        {id: 2, name: 'oleg'},
        {id: 3, name: 'ivan'},
        {id: 4, name: 'anna'},
        {id: 5, name: 'ilai'},
        {id: 6, name: 'petr'},
    ];

    let messageData = [
        {id: 1, message: 'push me'},
        {id: 2, message: 'and then just touch me'},
        {id: 3, message: 'till i can get my'},
        {id: 4, message: 'satisfaction!'},
        {id: 5, message: 'how are you doing?'},
        {id: 6, message: 'whatsss up?'},
    ];

    let messagesItemDataElements = messagesItemData.map( companion => <MessageItem id={companion.id} name={companion.name}/>);
    let messageDataElements = messageData.map( dialogContent => <Message message={dialogContent.message}/>)

    return (
        <div className={messagesStyle.messages}>
            <div className={messagesStyle.messagesItems}>
                {messagesItemDataElements}
            </div>
            <div className={messagesStyle.messagesContent}>
                {messageDataElements}
            </div>
        </div>
    )
}

export default Messages
