import React, {useState} from "react"

export type FormData = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}
const LoginForm = (props: any) => {

    const [email, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (event: any) => {
        event.preventDefault()
        let data = {
            email,
            password,
            captcha: "",
            rememberMe: false
        }
        props.onSubmit(data)
    }
    return <form onSubmit={onSubmit}>
        <div>
            <label>Login</label>
            <input type="text"
                   name="email"
                   placeholder="email"
                   id="email"
                   required={true}
                   value={email}
                   onChange={(e: any) => setLogin(e.target.value)}/>
        </div>
        <div>
            <label>Password</label>
            <input type="password"
                   name="password"
                   placeholder="password"
                   id="password"
                   required={true}
                   value={password}
                   onChange={(e: any) => setPassword(e.target.value)}/>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
}

export default LoginForm