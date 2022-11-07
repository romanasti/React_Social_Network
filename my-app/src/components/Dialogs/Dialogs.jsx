import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => ({color: isActive ? 'blue' : "white"});

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path} style={setActive}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Kostya'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Alex'},
        {id: 7, name: 'Valera'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;