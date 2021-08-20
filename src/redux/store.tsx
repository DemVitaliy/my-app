import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            myPosts: [
                {id: 1, postMessage: "First post"},
                {id: 2, postMessage: "Hi)"},
                {id: 3, postMessage: "Still studying..."}
            ],
            newPostText: ""
        },
        dialogsPage: {
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
    },
    _callSubscriber(state: any) {
    },
    subscriber(observer: any) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}
export default store