import React from "react"
import {connect} from "react-redux"
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer"
import usersStyles from "./User.module.css"
import Paginator from "../common/Paginator/Paginator"
import User from "./User"
import Preloader from "../common/Preloader/Preloader"
import {usersAPI} from "../../api/user-api";

class UsersContainer extends React.Component<any> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then( data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    changePage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then( data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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

export default connect (mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer)