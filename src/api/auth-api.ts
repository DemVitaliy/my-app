import {instance} from "./api"

export const authAPI = {
    givMe() {
       return instance.get(`auth/me`)
    }
}