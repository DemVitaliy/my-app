import React from "react"
import styleNavBar from './NavBar.module.css'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return <nav className={styleNavBar.nav}>
        <div className={styleNavBar.item}>
            <NavLink to='/profile' activeClassName={styleNavBar.active}>Profile</NavLink>
        </div>
        <div className={styleNavBar.item}>
            <NavLink to='/users' activeClassName={styleNavBar.active}>Users</NavLink>
        </div>
        <div className={styleNavBar.item}>
            <NavLink to='/dialogs' activeClassName={styleNavBar.active}>Dialogs</NavLink>
        </div>
    </nav>

}

export default NavBar