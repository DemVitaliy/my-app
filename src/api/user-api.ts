import {ApiResponseType, instance} from "./api"
import {UserType} from "../types/types"

type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string |null
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5, term: string = "", friend: null | boolean = null) {
        return instance.get<GetUsersType>
        (`users?page=${currentPage}&count=${pageSize}`
            + (term === "" ? `` : `&term=${term}`)
            + (friend === null ? `` : `&friend=${friend}`))
            .then(response => response.data)
    },
    follow(userId:number) {
        return instance.post<ApiResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId:number) {
        return instance.delete<ApiResponseType>(`follow/${userId}`)
            .then(response => response.data)
    }
}