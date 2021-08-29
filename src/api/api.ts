import axios from "axios"
import {apiKey} from "./api-key"

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : apiKey
    }
})

export enum ResultCodsEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeWithCaptchaEnum {
    CaptchaIsRequired = 10
}
export type GetItemsType<I> = {
    items: Array<I>
}
export type ApiResponseType<D = {}, RC = ResultCodsEnum> = {
    data: D
    resultCode: RC
    messages: Array<string>
}