const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (post: any) =>
    ({type: UPDATE_NEW_POST_TEXT, newPost: post})

const profileReducer = (state:any, action:any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                postMessage: state.newPostText
            }
            state.myPosts.push(newPost)
            state.newPostText = ""
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPost
            return state;
        default:
            return state
    }
}

export default profileReducer