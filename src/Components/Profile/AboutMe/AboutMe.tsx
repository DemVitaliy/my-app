import React from "react"
import styles from "./AboutMe.module.css"
import ProfileStatus from "./ProfileStatus"

type PropsType = {
    status: string
    aboutMe: string | null
    isOwner: boolean
    updateStatus: (status: string) => void
}

const AboutMe: React.FC<PropsType> = ({status, aboutMe, isOwner, updateStatus}) => {
    return <div className={styles.aboutMeBox}>

        <div className={styles.title}>About Me</div>

        <div className={styles.statusBox}>
            <b>Status: </b>
                <ProfileStatus status={status}
                               isOwner={isOwner}
                               updateStatus={updateStatus}/>

        </div>

        <div><b>Some thoughts: </b>{aboutMe}</div>

    </div>
}
export default AboutMe