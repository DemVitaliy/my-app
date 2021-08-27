import {instance} from "./api"

export const profileAPI = {
    getProfile(userId:number) {
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/` + userId).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status}).then(response => response.data)
    }
}