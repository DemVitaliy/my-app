import styles from "./ProfileInfo.module.css"
import React from "react"
import userPhoto from "../../../asets/images/defoltAvatar.png"
import {ProfileContactsType, ProfileType} from "../../../types/types"

export type PropsType = {
    profile: ProfileType
}
const ProfileInfo: React.FC<PropsType> = ({profile}) => {
    return <div className={styles.descriptionBlock}>

        <div className={styles.avaBox}>
            {profile.photos.large != null
                ? <img className={styles.img} src={profile.photos.large} alt=""/>
                : <img className={styles.img} src={userPhoto} alt=""/>}
            <div className={styles.nickName}>{profile.fullName}</div>
            <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
            {profile.lookingForAJob && <div><b>My skills</b>: {profile.lookingForAJobDescription}</div>}
        </div>

        <div className={styles.contactsBox}>
            <b>My Contacts</b>: {
            Object.keys(profile.contacts)
                .map(key => <Contact key={key}
                                     contactTitle={key}
                                     contactValue={profile.contacts[key as keyof ProfileContactsType]}/>)}
        </div>

    </div>

}

type ContactsPropsType = {
    contactTitle: string,
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={styles.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo
