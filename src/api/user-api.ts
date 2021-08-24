import {instance} from "./api"
import {UserType} from "../types/types"

type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string |null
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get<GetUsersType>
        (`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId:number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}