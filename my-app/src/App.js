import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route exact path='/profile' element={<ProfileContainer />}/>
                        <Route exact path='/dialogs' element={<DialogsContainer />}/>
                        <Route exact path='/news' element={<News/>}/>
                        <Route exact path='/music' element={<Music/>}/>
                        <Route exact path='/settings' element={<Settings/>}/>
                        <Route exact path='/friends' element={<Friends/>}/>
                        <Route exact path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;