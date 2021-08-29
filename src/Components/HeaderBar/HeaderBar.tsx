import React from "react"
import classes from './HeaderBar.module.css'
import {NavLink} from "react-router-dom"
import logo from "../../asets/images/LogoPaint.png"

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}
const Header: React.FC<PropsType> = (props) => {
    return <div className={classes.header}>
        <img className={classes.header_logo} alt=""
             src={logo}/>
        <div className={classes.header_login}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </div>

}

export default Header