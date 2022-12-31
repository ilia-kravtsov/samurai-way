import React from 'react'
import messagesStyle from './Messages.module.css'
import Message from "./Message/Message";
import MessageItem from "./MessageItem/MessageItem";

type MessagesType = {
    messagesItemData: Array<{id: number, name: string}>;
    messageData: Array<{id: number, message: string}>;
}

const Messages = (props: MessagesType) => {

    let messagesItemDataElements = props.messagesItemData.map( companion => <MessageItem id={companion.id} name={companion.name}/>);
    let messageDataElements = props.messageData.map( dialogContent => <Message message={dialogContent.message}/>)

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
