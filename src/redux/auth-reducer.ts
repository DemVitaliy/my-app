import {authAPI} from "../api/auth-api"
import {CommonThunkType, InferActionTypes} from "./redux-store"
import {ResultCodeWithCaptchaEnum, ResultCodsEnum} from "../api/api"
import {securityAPI} from "../api/security-api"

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    captchaUrl: null as string | null,
    isAuth: false
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "auth/SET_USER_DATA":
        case "auth/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const authActions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: "auth/SET_USER_DATA", payload: {id, email, login, isAuth} as const
    }),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: "auth/GET_CAPTCHA_URL_SUCCESS", payload: {captchaUrl}
    })
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.givMe()
    if (meData.resultCode === ResultCodsEnum.Success) {
        let {id, email, login} = meData.data
        dispatch(authActions.setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string,
                      password: string,
                      rememberMe: boolean,
                      captcha: string | null): ThunkType => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodsEnum.Success) {
        dispatch(getAuthUserData())
    } else  {
       if (loginData.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
           dispatch(getCaptchaUrl())
       }
    }
}
export const logout = (): ThunkType => async (dispatch) => {
    let logoutData = await authAPI.logout()
    if (logoutData.resultCode === ResultCodsEnum.Success) {
        dispatch(authActions.setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let responseData = await securityAPI.getCaptchaUrl()
    const captchaUrl = responseData.url
    dispatch(authActions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer

export type InitialState = typeof initialState
type ActionsTypes = InferActionTypes<typeof authActions>
type ThunkType = CommonThunkType<ActionsTypes>