import React from "react"
import classes from './HeaderBar.module.css'
import {LoginForm} from "../Login/Login"

const Header = () => {
    return (
        <div className={classes.header}>
            <img className={classes.header_logo} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU"}/>
            <div className={classes.header_login}>
                <LoginForm />
            </div>
        </div>
    )
}

export default Header