import React from "react"
import styleProfile from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPosts/MyPostsContainer"
import {ProfileType} from "../../types/types"
import AboutMe from "./AboutMe/AboutMe"
import Preloader from "../common/Preloader/Preloader"

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
}
const Profile: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <div className={styleProfile.preloader}><Preloader /></div>
    }
    return <div className={styleProfile.profileStyles}>
        <ProfileInfo profile={props.profile}/>
        <div>
            <AboutMe status={props.status}
                     aboutMe={props.profile.aboutMe}
                     isOwner={props.isOwner}
                     updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>

    </div>

}

export default Profile