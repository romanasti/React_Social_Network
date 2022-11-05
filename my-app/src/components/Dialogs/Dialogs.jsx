import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => ({color: isActive ? 'blue' : "white"});

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1' style={setActive}>Roma</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' style={setActive}>Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' style={setActive}>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' style={setActive}>Kostya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' style={setActive}>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6' style={setActive}>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/7' style={setActive}>Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;