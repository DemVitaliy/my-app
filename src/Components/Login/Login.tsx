import React from "react"
import LoginForm, {FormData} from "./LoginForm"
import loginStyles from "./login.module.css"
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../../redux/redux-store"
import {login} from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom"

const Login: React.FC = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const captchaUrl = useSelector((state:AppStateType) => state.auth.captchaUrl)
    const dispatch = useDispatch()

    const onSubmit = (data: FormData) => {
        dispatch(login(data.email, data.password, data.rememberMe, data.captcha))
    }
    if(isAuth) {
        return <Redirect to={"/profile/"} />
    }
    return <div className={loginStyles.bodyBox}>
        <h2>LOGIN</h2>
        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
}

export default Login