import React from "react"
import styleProfile from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"

const Profile = (props:any) => {

    return (
        <div className={styleProfile.profileStyles}>
            <ProfileInfo />
            <MyPosts myPosts={props.profilePage.myPosts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile