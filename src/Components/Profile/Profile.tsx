import React from "react"
import styles from "./Profile.module.css"
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
        return <div className={styles.preloader}><Preloader/></div>
    }
    return <div className={styles.profileStyles}>

        <div className={styles.profileInfoBlock}>
            <ProfileInfo profile={props.profile}/>
        </div>

        <div className={styles.aboutMe_post}>
            <AboutMe status={props.status}
                     aboutMe={props.profile.aboutMe}
                     isOwner={props.isOwner}
                     updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>

    </div>

}

export default Profile