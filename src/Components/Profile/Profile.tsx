import React from "react"
import styleProfile from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"


const Profile = (props:any) => {
    return (
        <div className={styleProfile.profileStyles}>
            <ProfileInfo />
            <MyPosts myPosts={props.profilePageData.myPosts}/>
        </div>
    )
}

export default Profile