import React from "react"
import styleDialogs from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"

const Dialogs = (props: any) => {

    let wrappedDialogs = props.dialogsPage.dialogs.map((dialog: any) =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    )
    let wrappedMessages = props.dialogsPage.messages.map((message: any) =>
        <Message message={message.message}/>
    )

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (e:any) => {
        let message = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(message))
    }

    return (
        <div className={styleDialogs.dialogs}>
            <div className={styleDialogs.dialogItems}>
                {wrappedDialogs}
            </div>
            <div className={styleDialogs.messages}>
                <div>
                    {wrappedMessages}
                </div>
                <div>
                    <textarea placeholder={"Enter your message"}
                              value={props.dialogsPage.newMessageText}
                              onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs