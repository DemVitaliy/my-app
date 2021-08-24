import {authAPI} from "../api/auth-api"

const SET_USER_DATA = "SET-USER-DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => (
    {type: SET_USER_DATA, data: {userId, email, login}}
)

export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.givMe().then( response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(
                    response.data.data.id,
                    response.data.data.email,
                    response.data.data.login))
            }
        })
    }
}

export default authReducer