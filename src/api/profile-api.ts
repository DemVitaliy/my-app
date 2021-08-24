import {instance} from "./api"

export const profileAPI = {
    getProfile(userId:number) {
        return instance.get(`profile/`+ userId)
    }
}