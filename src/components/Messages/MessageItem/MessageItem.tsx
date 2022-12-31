import React from 'react'
import {NavLink} from 'react-router-dom';
import messageItemStyle from "./MessageItemStyle.module.css";

type MessageItemType = {
    name: string;
    id: number;
}

const MessageItem = (props: MessageItemType) => {
    let path = '/messages/' + props.id;

    return (
        <div className={messageItemStyle.messageItemName}>
            <NavLink to={path} activeClassName={messageItemStyle.active}>{props.name}</NavLink>
        </div>
    )
}
export default MessageItem
