type MessagesItemDataType = {
    id: number
    name: string
}

type MessageDataType = {
    id: number
    message: string
}

type PostsData = {
    id: number
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
            {id: 1, message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
            {id: 2, message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
        ],
    },
    messagesPage: {
        companionsData:  [
            {id: 1, name: 'ilia'},
            {id: 2, name: 'oleg'},
            {id: 3, name: 'ivan'},
            {id: 4, name: 'anna'},
            {id: 5, name: 'ilai'},
            {id: 6, name: 'petr'},
        ],
        messageData: [
            {id: 1, message: 'push me'},
            {id: 2, message: 'and then just touch me'},
            {id: 3, message: 'till i can get my'},
            {id: 4, message: 'satisfaction!'},
            {id: 5, message: 'how are you doing?'},
            {id: 6, message: 'whatsss up?'},
        ],
    },
    sidebar: {}
}

export type StateAppType = {
    state: StateType
}

export default state