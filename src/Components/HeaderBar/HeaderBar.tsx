import React from "react"
import styles from './HeaderBar.module.css'
import {Link} from "react-router-dom"
import logo from "../../asets/images/LogoPaint.png"
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/selectors/auth-selectors"
import {logout} from "../../redux/auth-reducer"
import {useDispatch, useSelector} from "react-redux"
import {Col, Row} from "antd"

const HeaderBar: React.FC = () => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const dispatch = useDispatch()
    const logoutCallback = () => {
        dispatch(logout())
    }
    return <div className={styles.header} >
        <Row>

            <Col span={4}>
                <img className={styles.header_logo} alt="" src={logo}/>
            </Col>

            <Col span={16} className={styles.header_menu}>
                <Link to='/profile'>Profile</Link>
                <Link to='/users'>Users</Link>
                <Link to='/dialogs'>Dialogs</Link>
            </Col>

            <Col span={4} className={styles.login_logout_block}>
                {isAuth
                    ? <Row>
                        <Col span={6}>
                            <div className={styles.your_login}> {login} </div>
                        </Col>
                        <Col span={18}>
                            <Link to={"/login"} onClick={logoutCallback}> Logout</Link>
                        </Col>
                    </Row>
                    : <Link to={"/login"}>Login</Link>}
            </Col>
        </Row>
    </div>

    {/* <div className={classes.header}>
            <img className={classes.header_logo} alt=""
                 src={logo}/>
            <div className={classes.header_login}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </div>*/
    }

}

export default HeaderBar