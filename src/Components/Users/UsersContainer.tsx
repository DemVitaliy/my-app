import React from "react"
import {connect} from "react-redux"
import Users from "./Users"
import {followAC, setCurrentPage, setTotalUsersCount, setUsersAC, unfollowAC} from "../../redux/users-reducer"

let mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId:any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:any) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage:number) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setTotalUsersCount(totalCount))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Users)