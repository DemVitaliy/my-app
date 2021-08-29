import {usersAPI} from "../api/user-api"
import {UserType} from "../types/types"
import {CommonThunkType, InferActionTypes} from "./redux-store"
import {Dispatch} from "redux"
import {updateObjectInArray} from "../utils/object-helpers"
import {ApiResponseType, ResultCodsEnum} from "../api/api"

let initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of user ids
    filter: {
        term: "",
        friend: null as null | boolean
    }
}

const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "users/ACCEPT_FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case "users/ACCEPT_UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case "users/SET_USERS":
            return {...state, users: [...action.users]}
        case "users/SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "users/SET_FILTER":
            return {
                ...state, filter: {...state.filter, term: action.filter.term, friend: action.filter.friend}
            }
        case "users/SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case "users/TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "users/TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: number) => id !== action.userId)
            }
        default:
            return state
    }
}

export const usersActions = {
    acceptFollow: (userId: number) => ({type: "users/ACCEPT_FOLLOW", userId} as const),
    acceptUnfollow: (userId: number) => ({type: "users/ACCEPT_UNFOLLOW", userId} as const),
    setUsers: (users: any) => ({type: "users/SET_USERS", users} as const),
    setCurrentPage: (currentPage: number) => ({type: "users/SET_CURRENT_PAGE", currentPage} as const),
    setFilter: (filter: FilterType) => ({type: "users/SET_FILTER", filter} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: "users/SET_TOTAL_USERS_COUNT", totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: "users/TOGGLE_IS_FETCHING", isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: "users/TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId} as const)
}

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: (userId: number) => Promise<ApiResponseType>,
                                   actionCreator: (userId:number) => ActionsTypes) => {
    dispatch(usersActions.toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === ResultCodsEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.toggleFollowingProgress(false, userId))
}
export const follow = (userId: number): ThunkType => async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), usersActions.acceptFollow)
}
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), usersActions.acceptUnfollow)
    }
export const requestUsers = (requestedPage: number,
                             pageSize: number,
                             filter: FilterType): ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true))
    dispatch(usersActions.setCurrentPage(requestedPage))
    dispatch(usersActions.setFilter(filter))
    let response = await usersAPI.getUsers(requestedPage, pageSize, filter.term, filter.friend)
    dispatch(usersActions.toggleIsFetching(false))
    dispatch(usersActions.setUsers(response.items))
    dispatch(usersActions.setTotalUsersCount(response.totalCount))
}

export default usersReducer

export type InitialState = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionTypes<typeof usersActions>
type ThunkType = CommonThunkType<ActionsTypes>
type DispatchType = Dispatch<ActionsTypes>