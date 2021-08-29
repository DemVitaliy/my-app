import React, {useState} from "react"
import {useForm} from "react-hook-form"

export type FormData = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}
const LoginForm = (props: any) => {

    const [email, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [captcha, setCaptcha] = useState("")

    const onSubmit = () => {
        let data = {
            email,
            password,
            captcha,
            rememberMe: true
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
            {props.captchaUrl && <img src={props.captchaUrl} alt=""/>}
            {props.captchaUrl && <input type="text"
                                        name="captcha"
                                        placeholder="Symbols"
                                        id="captcha"
                                        required={true}
                                        onChange={(e: any) => setCaptcha(e.target.value)}/>}
        </div>

        <div>
            <button type="submit">Log in</button>
        </div>
        {/*<div>
            <input type={"checkbox"}/> remember me
        </div>*/}
    </form>
}

export default LoginForm