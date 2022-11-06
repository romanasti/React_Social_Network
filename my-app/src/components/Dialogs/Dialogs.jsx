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

    let dialogsData = [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Kostya'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Alex'},
        {id: 7, name: 'Valera'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}
    ]




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                {/*<DialogItem name="Andrey" id="3"/>*/}
                {/*<DialogItem name="Kostya" id="4"/>*/}
                {/*<DialogItem name="Victor" id="5"/>*/}
                {/*<DialogItem name="Alex" id="6"/>*/}
                {/*<DialogItem name="Valera" id="7"/>*/}

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;