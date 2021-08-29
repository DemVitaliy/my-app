import React, {ChangeEvent, useEffect, useState} from "react"

type PropsType = {
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
}
const ProfileStatus: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        if(status) {
            props.updateStatus(status)
        }
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return <>
        {!props.isOwner
            ? <span>{props.status || "without status"}</span>
                : !editMode
            ? <div>
                <span onDoubleClick={activateEditMode}>{props.status || "without status"}</span>
            </div>
            : <div>
                <input autoFocus={true}
                       onChange={onStatusChange}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>}
    </>

}

export default ProfileStatus