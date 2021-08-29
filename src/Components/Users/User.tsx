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
    return <div className={usersStyles.userPage}>

        <div className={usersStyles.avaBloc}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null
                    ? user.photos.small
                    : userPhoto} className={usersStyles.photo} alt=""/>
            </NavLink>
        </div>

        <div className={usersStyles.descriptionBloc}>

            <h3 className={usersStyles.nickName}>{user.name}</h3>
            <div className={usersStyles.status}><div className={usersStyles.text}>Status: </div>{user.status
                ? <div>{user.status.substr(1, 40) + "..."}</div>
                : <div>No status</div>}
            </div>

            <div className={usersStyles.buttonBox}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              className={usersStyles.followUnfollowButton}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              className={usersStyles.followUnfollowButton}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Follow</button>
                }
            </div>

        </div>

    </div>


}

export default User


