import React from "react"
import styleProfile from "../Profile.module.css"
import ProfileStatus from "./ProfileStatus"

type PropsType = {
    status: string
    aboutMe: string | null
    isOwner: boolean
    updateStatus: (status: string) => void
}

const AboutMe: React.FC<PropsType> = ({status, aboutMe, isOwner, updateStatus}) => {
    return <div className={styleProfile.aboutMeBox}>
        <div className={styleProfile.title}>About Me</div>
        <div className={styleProfile.statusBox}>
            <b>Status: </b>

                <ProfileStatus status={status}
                               isOwner={isOwner}
                               updateStatus={updateStatus}/>

        </div>
        <div><b>Some thoughts: </b>{aboutMe}</div>
    </div>
}
export default AboutMe