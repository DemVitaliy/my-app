import React from "react"
import {UserType} from "../../types/types"
import userPhoto from "../../asets/images/defoltAvatar.png"
import usersStyles from "./User.module.css"
import {NavLink} from "react-router-dom"
import axios from "axios"
import {usersAPI} from "../../api/user-api";

type PropsType = {
    user: UserType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, follow, unfollow}) => {

    return (
        <div className={usersStyles.userPage}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null
                            ? user.photos.small
                            : userPhoto} className={usersStyles.photo}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            usersAPI.unfollow(user.id).then(data => {
                                if (data.resultCode == 0) {
                                    unfollow(user.id)
                                }
                            })
                        }}>unfollow</button>
                        : <button onClick={() => {
                            usersAPI.follow(user.id).then(data => {
                                if (data.resultCode == 0) {
                                    follow(user.id)
                                }
                            })
                        }}>follow</button>
                    }
                </div>
                </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
        </div>
    )
}

export default User


