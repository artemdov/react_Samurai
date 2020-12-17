import React from "react-dom";
import s from './../Dialogs.module.css'
import {Navlink} from './react-router-dom'



const DialogItem = (props: { id: number; name: string }) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
export  default DialogItem