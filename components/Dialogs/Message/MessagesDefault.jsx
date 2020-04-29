import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";



const MessagesDefault = (props) => {
    return <div className={s.mes}>{props.message}
    </div>
}

export default MessagesDefault;