const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
    dialogs: [
        {id: 1, name: "Oleg"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Dima"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"}
    ],
    newMessageText: ""
}

const dialogsReducer = (state:any = initialState, action:any) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 3, message: newMessage}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (message: any) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})

export default dialogsReducer