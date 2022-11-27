import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route exact path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                                       dispatch={props.dispatch}/>}/>
                        <Route exact path='/dialogs' element={<Dialogs store={props.store}/>}/>
                        <Route exact path='/news' element={<News/>}/>
                        <Route exact path='/music' element={<Music/>}/>
                        <Route exact path='/settings' element={<Settings/>}/>
                        <Route exact path='/friends' element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;