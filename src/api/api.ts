import axios from "axios"

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "4c0ca749-c417-4d40-8600-231617"
    }
})
