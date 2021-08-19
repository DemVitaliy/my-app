import React from "react"
import styleDialogs from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props: any) => {
debugger
    let wrappedDialogs = props.dialogsPageData.dialogs.map((dialog: any) =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    )
    let wrappedMessages = props.dialogsPageData.messages.map((message: any) =>
        <Message message={message.message}/>
    )

    let newMessageElement: any = React.createRef()
    let addMessage = () => {
        let message = newMessageElement.current.value
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
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs