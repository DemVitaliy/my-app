import styleProfile from "../Profile.module.css"
import React from "react"
import userPhoto from "../../../asets/images/defoltAvatar.png"
import {ProfileContactsType, ProfileType} from "../../../types/types"

export type PropsType = {
    profile: ProfileType
}
const ProfileInfo: React.FC<PropsType> = ({profile}) => {
    return (
        <div className={styleProfile.descriptionBlock}>
            <div className={styleProfile.avaBox}>
                {profile.photos.large != null
                    ? <img className={styleProfile.img} src={profile.photos.large} alt=""/>
                    : <img className={styleProfile.img} src={userPhoto} alt=""/>}
                <div className={styleProfile.nickName}>{profile.fullName}</div>
                <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
                {profile.lookingForAJob && <div><b>My skills</b>: {profile.lookingForAJobDescription}</div>}

            </div>

            {/*<div><ProfileStatus status={status}
                                isOwner={isOwner}
                                updateStatus={updateStatus}/>
            </div>
            <div><b>About Me</b>: {profile.aboutMe}</div>*/}


            <div className={styleProfile.contactsBox}>
                <b>My Contacts</b>: {
                Object.keys(profile.contacts)
                    .map(key => <Contact key={key}
                                         contactTitle={key}
                                         contactValue={profile.contacts[key as keyof ProfileContactsType]}/>)}
            </div>
        </div>
    )
}

type ContactsPropsType = {
    contactTitle: string,
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={styleProfile.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo
