import React from 'react'
import dialogStyle from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string;
    id: number;
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
    <div className={dialogStyle.dialog + ' ' + dialogStyle.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={dialogStyle.message}>{props.message}</div>
    )

}

const Dialogs = () => {
    return (
        <div className={dialogStyle.dialogs}>
            <div className={dialogStyle.dialogsItems}>
                <DialogItem name='ilia' id={1}/>
                <DialogItem name='oleg' id={2}/>
                <DialogItem name='ivan' id={3}/>
                <DialogItem name='anna' id={4}/>
                <DialogItem name='artem' id={5}/>
                <DialogItem name='petr' id={6}/>
            </div>
            <div className={dialogStyle.messages}>
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

export default Dialogs
