import React from "react"
import {connect} from "react-redux"
import {
    followAC,
    setCurrentPage,
    setTotalUsersCount,
    setUsersAC,
    toggleIsFetching,
    unfollowAC
} from "../../redux/users-reducer"
import axios from "axios"
import usersStyles from "./User.module.css"
import Paginator from "../common/Paginator/Paginator"
import User from "./User"
import {UserType} from "../../types/types"
import Preloader from "../common/Preloader/Preloader";

type GetUsersType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}
class UsersContainer extends React.Component<any> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    changePage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                <div className={usersStyles.paginatorBar}>
                    <Paginator totalItemsCount={this.props.totalUsersCount}
                               pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage}
                               onPageChange={this.changePage}/>
                </div>
                <div className={usersStyles.isFetching}>
                    {this.props.isFetching ? <Preloader /> : null}
                </div>
                <div>
                    {this.props.users.map((user: any) => {
                        return <User user={user}
                                     follow={this.props.follow}
                                     unfollow={this.props.unfollow}/>
                    })}
                </div>
            </>
        )
    }
}

let mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching:boolean) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer)