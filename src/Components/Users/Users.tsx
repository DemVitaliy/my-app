import React from "react"
import usersStyles from "./Users.module.css"

import userPhoto from "./../../asets/images/defoltAvatar.png"
import axios from "axios"
import {UserType} from "../../types/types"

type GetUsersType = {
    items: Array<UserType>,
    totalCount: number,
    error: string | null
}

class Users extends React.Component<any> {

    constructor(props:any) {
        super(props)
        axios.get<GetUsersType>("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render()  {
        debugger
        return (
            <div>
                {this.props.users.map((user: any) => {
                return <div key={user.id} className={usersStyles.usersPage}>
                <span>
                    <div>
                        <img src={user.photos.small != null
                            ? user.photos.small
                            : userPhoto} className={usersStyles.photo}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => this.props.unfollow(user.id)}>unfollow</button>
                            : <button onClick={() => this.props.follow(user.id)}>follow</button>}
                    </div>
                </span>
                    <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                    {/*<span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>*/}
                </div>
            })}
            </div>
        )
    }
}

export default Users