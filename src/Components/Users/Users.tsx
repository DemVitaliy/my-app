import React from "react"
import axios from "axios"
import {UserType} from "../../types/types"
import User from "./User";
import Paginator from "../common/Paginator/Paginator"
import usersStyles from "./User.module.css"

type GetUsersType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}

class Users extends React.Component<any> {

    componentDidMount(): void {
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    changePage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                <div className={usersStyles.paginatorBar}>
                    <Paginator totalItemsCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                onPageChange={this.changePage}/>
                </div>

                <div>
                    {this.props.users.map((user: any) => {
                        return <User user={user}
                                     follow={this.props.follow}
                                     unfollow={this.props.unfollow}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Users