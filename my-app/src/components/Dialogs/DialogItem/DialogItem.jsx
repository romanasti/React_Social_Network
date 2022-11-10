import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => ({color: isActive ? 'blue' : "white"});

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4mrxN9GAxegxKHi0OsUtQkFLd-HgntopUfDn1MAlDM9fWWxRyjIDx6D4ci44z_6myBc&usqp=CAU' />
            <NavLink to={path} style={setActive}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;