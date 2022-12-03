import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => ({color: isActive ? 'blue' : "white"});

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' style={setActive}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" style={setActive}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" style={setActive}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" style={setActive}>Music</NavLink>
        </div>
        <div className={s.set}>
            <NavLink to="/settings" style={setActive}>Settings</NavLink>
        </div>
        <div className={s.friends}>
            <NavLink to="/friends" style={setActive}>Friends</NavLink>
        </div>
        <div className={s.users}>
            <NavLink to="/users" style={setActive}>Users</NavLink>
        </div>

    </nav>
}

export default Navbar;
