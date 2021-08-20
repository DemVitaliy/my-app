import React from "react"
import styleProfile from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={styleProfile.profileStyles}>
            <ProfileInfo />
            <MyPostContainer />
        </div>
    )
}

export default Profile