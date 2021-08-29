import React from "react"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {AppStateType} from "../redux/redux-store"

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
type MapPropsType = ReturnType<typeof mapStateToProps>

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) { // wrapped component props
    function RedirectComponent(props: MapPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as WCP}/>
    }

    return connect<MapPropsType, {}, WCP, AppStateType>(mapStateToProps, {})(RedirectComponent)
}