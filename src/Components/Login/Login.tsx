import React from "react"
import LoginForm from "./LoginForm"
import loginStyles from "./login.module.css"

const Login: React.FC = () => {
    return <div className={loginStyles.bodyBox}>
        <h1>Login</h1>
        <LoginForm />
    </div>
}

export default Login