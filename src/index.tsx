import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
    {id: 2, message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
];

ReactDOM.render(<App messagesItemData={messagesItemData} messageData={messageData} postsData={postsData}/>, document.getElementById('root'));