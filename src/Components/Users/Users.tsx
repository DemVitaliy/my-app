import React from "react"
import usersStyles from "./Users.module.css"

const Users = (props: any) => {
    return (
        <div>{props.users.map((user: any) => {
            return <div key={user.id} className={usersStyles.usersPage}>
                <span>
                    <div>
                        <img src={user.avatarUrl} className={usersStyles.photo}/>
                    </div>
                    <div>
                        { user.followed
                            ? <button onClick={() => props.unfollow(user.id)}>unfollow</button>
                            : <button onClick={() => props.follow(user.id)}>follow</button>}
                    </div>
                </span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </div>
        })}</div>
    )
}

export default Users