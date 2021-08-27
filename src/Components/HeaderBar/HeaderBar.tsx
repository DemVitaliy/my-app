import React from "react"
import classes from './HeaderBar.module.css'
import LoginForm from "../Login/Login"
import {NavLink} from "react-router-dom"
import logo from "../../asets/images/LogoPaint.png"

const Header = (props:any) => {
    return (
        <div className={classes.header}>
            <img className={classes.header_logo} alt=""
                 src={logo}/>
            <div className={classes.header_login}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={"/login"}>
                        <LoginForm />
                    </NavLink>}

            </div>
        </div>
    )
}

export default Header