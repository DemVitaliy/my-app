import React from "react"
import preloader from "../../../asets/images/preloader.svg"

type PropsType = {}
let Preloader:React.FC<PropsType> = (props) => {
    return <div>
        <img src={preloader} alt=""/>
    </div>
}
export default Preloader