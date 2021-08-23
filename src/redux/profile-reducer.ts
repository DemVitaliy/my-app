const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initialState = {
    profile: null,
    posts: [
        {id: 1, postMessage: "First post"},
        {id: 2, postMessage: "Hi)"},
        {id: 3, postMessage: "Still studying..."}
    ],
    newPostText: ""
}

const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {id: 5, postMessage: state.newPostText}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPost
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (post: any) =>
    ({type: UPDATE_NEW_POST_TEXT, newPost: post})
export const setUserProfile = (profile:any) => ({type: SET_USER_PROFILE, profile})

export default profileReducer