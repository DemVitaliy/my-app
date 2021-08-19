let store = {
    _state: {
        profilePage: {
            myPosts: [
                {id: 1, postMessage: "First post"},
                {id: 2, postMessage: "Hi)"},
                {id: 3, postMessage: "Still studying..."}
            ],
            newPostText: "text"
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
            ]
        }
    },
    _callSubscriber(state:any) {

    },
    subscriber(observer:any) {
        this._callSubscriber = observer
    },
    getState() {

        return this._state
    },

    addPost() {
        let newPost = {
            id:5,
            postMessage: this._state.profilePage.newPostText
        }
        this._state.profilePage.myPosts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },
    updateNewPostText(newPost:any) {
        this._state.profilePage.newPostText = newPost
        this._callSubscriber(this._state)
    }
}

export default store