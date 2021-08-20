const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (message: any) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})

const dialogsReducer = (state:any, action:any) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export default dialogsReducer