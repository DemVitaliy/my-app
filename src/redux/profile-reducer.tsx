const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    myPosts: [
        {id: 1, postMessage: "First post"},
        {id: 2, postMessage: "Hi)"},
        {id: 3, postMessage: "Still studying..."}
    ],
    newPostText: ""
}

const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = state.newPostText
            return {
                ...state,
                newPostText: "",
                myPosts: [...state.myPosts, {id: 5, postMessage: newPostText}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPost
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (post: any) =>
    ({type: UPDATE_NEW_POST_TEXT, newPost: post})

export default profileReducer