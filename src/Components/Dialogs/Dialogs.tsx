import React from "react"
import styleDialogs from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props:any) => {

    let wrappedDialogs = props.dialogsPageData.dialogs.map( (dialog:any) =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    )
    let wrappedMessages = props.dialogsPageData.messages.map( (message:any) =>
        <Message message={message.message}/>
    )

    return (
        <div className={styleDialogs.dialogs}>
            <div className={styleDialogs.dialogItems}>
                {wrappedDialogs}
            </div>
            <div className={styleDialogs.messages}>
                {wrappedMessages}
            </div>
        </div>
    )
}

export default Dialogs