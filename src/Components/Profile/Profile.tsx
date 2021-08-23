import React from "react"
import styleProfile from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPosts/MyPostsContainer"
import {ProfileType} from "../../types/types"

export type ProfileInfoPropsType = {
    profile: ProfileType
}
const Profile: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div className={styleProfile.profileStyles}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile