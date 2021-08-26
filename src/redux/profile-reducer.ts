import {profileAPI} from "../api/profile-api"
import {ProfileType} from "../types/types"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

let initialState = {
    profile: null,
    status: null as string | null,
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
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (post: any) =>
    ({type: UPDATE_NEW_POST_TEXT, newPost: post})
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string | null) => ({type: SET_STATUS, status} as const)

export const getUserProfile = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    const statusData = await profileAPI.getStatus(userId)
    dispatch(setStatus(statusData))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    debugger
    const responseData = await profileAPI.updateStatus(status)
    if (responseData.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export default profileReducer