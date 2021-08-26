import React from "react"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

let mapStateToProps = (state:any) => ({
    isAuth: state.auth.isAuth
})
export function withAuthRedirect(Component: any) {
    function RedirectComponent(props:any) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}