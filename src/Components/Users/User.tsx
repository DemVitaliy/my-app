import React from "react"
import {UserType} from "../../types/types"
import userPhoto from "../../asets/images/defoltAvatar.png"
import usersStyles from "./User.module.css"
import {NavLink} from "react-router-dom"

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
                        ? <button onClick={() => unfollow(user.id)}>unfollow</button>
                        : <button onClick={() => follow(user.id)}>follow</button>}
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