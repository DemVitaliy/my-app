import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/selectors/users-selectors"
import {FilterType, requestUsers} from "../../redux/users-reducer"
import usersStyles from "./User.module.css"
import Paginator from "../common/Paginator/Paginator"
import User from "./User"

const Users: React.FC = () => {
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getUsers)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }
    const onPageChange = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChange = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }


    return <>
        <div className={usersStyles.paginatorBar}>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChange={onPageChange}/>
        </div>
        <div className={usersStyles.usersBox}>
            {users.map((user: any) => {
                return <div>
                    <User user={user}
                          key={user.Id}
                          followingInProgress={followingInProgress}
                          follow={follow}
                          unfollow={unfollow}/>
                </div>
            })}
        </div>
    </>

}

export default Users