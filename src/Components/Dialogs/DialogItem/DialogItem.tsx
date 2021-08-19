import styleDialogs from "../Dialogs.module.css"
import {NavLink} from "react-router-dom"
import React from "react"

type PropsType = {
    name: string
    id: number
}

const DialogItem:React.FC<PropsType> = ({name, id, ...props}) => {
    let path = "/dialogs/" + id
    return (
        <div className={styleDialogs.dialogItem}>
            <NavLink to={path} activeClassName={styleDialogs.active}>{name}</NavLink>
        </div>
    )
}

export default DialogItem

