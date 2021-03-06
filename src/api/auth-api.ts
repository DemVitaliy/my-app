import {ApiResponseType, instance, ResultCodesWithCaptchaEnum, ResultCodsEnum} from "./api"

type GiveMeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginResponseDataType = {
    userId: number
}
export const authAPI = {
    givMe() {
       return instance.get<ApiResponseType<GiveMeResponseDataType>>(`auth/me`).then( response => response.data )},
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ApiResponseType<LoginResponseDataType, ResultCodsEnum | ResultCodesWithCaptchaEnum>>
        (`auth/login`,{email, password, rememberMe, captcha}).then(response => response.data)},
    logout() {
        return instance.delete(`auth/login`).then( response => response.data)}
}