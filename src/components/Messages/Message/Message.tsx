import React from 'react'
import messageStyle from './MessageStyle.module.css'

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={messageStyle.message}>{props.message}</div>
    )

}

export default Message