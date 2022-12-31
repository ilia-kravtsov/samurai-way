import React from 'react';
import './App.css';
import Header from "./components/Headers/Header";
import Navbar from "./components/Navbars/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Video from "./components/Video/Video";
import Messages from "./components/Messages/Messages";

type AppType= {
    messagesItemData: Array<{id: number, name: string}>;
    messageData: Array<{id: number, message: string}>;
    postsData: Array<{id: number, message: string, likesCount: number, disLikesCount: number}>
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <div className='app_wrapper_content'>
                    <Route path='/messages' render={() => <Messages messagesItemData={props.messagesItemData} messageData={props.messageData}/>}/>
                    <Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/video' component={Video}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


