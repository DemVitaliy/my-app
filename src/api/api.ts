import axios from "axios"

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "69045bf8-1b7a-4cc2-a7f9-fbad5e8a31d4"
    }
})

export enum ResultCodsEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodesWithCaptchaEnum {
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