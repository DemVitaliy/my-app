import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"
import React from "react"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"

let mapStateToProps = (state:any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (message:any) => {
            dispatch(updateNewMessageTextActionCreator(message))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer