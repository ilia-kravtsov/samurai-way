import React, {useEffect, useRef, useState} from 'react';
import s from './MessageSender.module.css'

const MessageSender = () => {

    let textareaS = s.textareaS
    let btnS = s.btnS
    let inpBtnContainer = s.inpBtnContainer

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.container}>
            <span className={inpBtnContainer}>
                <textarea ref={newPostElement} className={textareaS}></textarea>
                <button onClick={addPost} className={btnS}>Send</button>
            </span>
        </div>
    );
};

export default MessageSender;