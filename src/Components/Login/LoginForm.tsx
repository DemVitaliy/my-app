import React from "react"

const LoginForm = (props: any) => {
    return <form action="">
        <div>
            <input placeholder={"login"}/>
        </div>
        <div>
            <input placeholder={"password"}/>
        </div>
        <div>
            <input type={"checkbox"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export default LoginForm