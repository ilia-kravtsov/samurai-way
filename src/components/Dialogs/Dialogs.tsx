import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    name: string;
    id: number;
}

const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;

    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )

}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='ilia' id={1}/>
                <DialogItem name='oleg' id={2}/>
                <DialogItem name='ivan' id={3}/>
                <DialogItem name='anna' id={4}/>
                <DialogItem name='artem' id={5}/>
                <DialogItem name='petr' id={6}/>
            </div>
            <div className={s.messages}>
                <Message message='hi'/>
                <Message message='how are you?'/>
                <Message message='whassup?'/>
                <Message message='whassup?'/>
                <Message message='whassup?'/>
            </div>
        </div>
    )
}

export default Dialogs