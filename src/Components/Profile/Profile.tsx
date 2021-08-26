import React from "react"
import styleProfile from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPosts/MyPostsContainer"
import {ProfileType} from "../../types/types"

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
}
const Profile: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div className={styleProfile.profileStyles}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         isOwner={props.isOwner}
                         updateStatus={props.updateStatus}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile