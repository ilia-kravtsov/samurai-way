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
import state from "./redux/state";
import {StateAppType} from "./redux/state";

const App = (props: StateAppType) => {

    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <div className='app_wrapper_content'>
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage}/>}/>
                    <Route path='/messages' render={() => <Messages messagesItemData={state.messagesPage.messagesItemData} messageData={state.messagesPage.messageData}/>}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/video' render={() => <Video />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


