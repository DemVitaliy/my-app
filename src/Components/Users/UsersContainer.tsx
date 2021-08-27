import React from "react"
import {connect} from "react-redux"
import {
    followUser, getUsers,
    toggleFollowingProgress, unfollowUser
} from "../../redux/users-reducer"
import usersStyles from "./User.module.css"
import Paginator from "../common/Paginator/Paginator"
import User from "./User"
import Preloader from "../common/Preloader/Preloader"

class UsersContainer extends React.Component<any> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    changePage = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                    {this.props.isFetching ? <Preloader/> : null}
                </div>
                <div className={usersStyles.usersBox}>
                    {this.props.users.map((user: any) => {
                        return <div>
                            <User user={user}
                                  key={user.Id}
                                  followingInProgress={this.props.followingInProgress}
                                  follow={this.props.followUser}
                                  unfollow={this.props.unfollowUser}/>
                        </div>
                    })}
                </div>
            </>
        )
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        toggleFollowingProgress,
        getUsers, followUser, unfollowUser
    })(UsersContainer)