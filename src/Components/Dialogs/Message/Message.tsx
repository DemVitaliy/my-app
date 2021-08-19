import styleDialogs from "../Dialogs.module.css"
import React from "react"

type PropsType = {
    message: string
}
const Message:React.FC<PropsType> = ({message, ...props}) => {
    return <div className={styleDialogs.message}>{message}</div>
}

export default Message