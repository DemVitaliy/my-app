import axios from "axios"
import {apiKey} from "./api-key"

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : apiKey
    }
})
