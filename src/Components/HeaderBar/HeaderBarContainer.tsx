import React from "react"
import Header from "./HeaderBar"
import {connect} from "react-redux"
import {AppStateType} from "../../redux/redux-store"
import {logout} from "../../redux/auth-reducer"

class HeaderContainer extends React.Component<any> {
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    }
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {logout: () => void}
let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {logout})(HeaderContainer)