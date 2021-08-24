import React from "react"
import {UserType} from "../../types/types"
import userPhoto from "../../asets/images/defoltAvatar.png"
import usersStyles from "./User.module.css"
import {NavLink} from "react-router-dom"

type PropsType = {
    user: UserType,
    followingInProgress: Array<any>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {
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
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</button>
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


