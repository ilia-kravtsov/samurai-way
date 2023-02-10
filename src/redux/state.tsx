import {v1} from "uuid";

type MessagesItemDataType = {
    id: string
    name: string
}

type MessageDataType = {
    id: string
    message: string
}

type PostsData = {
    id: string
    message: string
    likesCount: number
    disLikesCount: number
}

export type ProfilePageType = {
    postsData: Array<PostsData>
}

export type MessagesPageType = {
    companionsData: Array<MessagesItemDataType>
    messageData: Array<MessageDataType>
}

type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: {}
}

let state: StateType = {
    profilePage: {
        postsData: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
            {id: v1(), message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
        ],
    },
    messagesPage: {
        companionsData:  [
            {id: v1(), name: 'ilia'},
            {id: v1(), name: 'oleg'},
            {id: v1(), name: 'ivan'},
            {id: v1(), name: 'anna'},
            {id: v1(), name: 'ilai'},
            {id: v1(), name: 'petr'},
        ],
        messageData: [
            {id: v1(), message: 'push me'},
            {id: v1(), message: 'and then just touch me'},
        ],
    },
    sidebar: {}
}

export let addPost = (postMessage: string) => {
    let newPost = {id: v1(), message: postMessage}
    state.messagesPage.messageData.push(newPost)
}

export type StateAppType = {
    state: StateType
}

export default state