import styleProfile from "../Profile.module.css";
import React from "react";

const ProfileInfo = () => {
    return (
        <div className={styleProfile.profileInfoStyles}>
            <div className={styleProfile.nickName}>Vitaliy</div>
            <img className={styleProfile.img}
                 src={"https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"}/>
            <div>About me</div>
            <div>My Contacts</div>
        </div>
    )
}
export default ProfileInfo