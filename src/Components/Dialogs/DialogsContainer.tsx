import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import {connect} from "react-redux"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import { compose } from "redux"
import React from "react"

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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)