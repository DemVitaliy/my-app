import React from "react"
import Header from "./HeaderBar"
import {connect} from "react-redux"
import {getAuthUserData} from "../../redux/auth-reducer"

class HeaderContainer extends React.Component<any> {
    componentDidMount(): void {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state:any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)