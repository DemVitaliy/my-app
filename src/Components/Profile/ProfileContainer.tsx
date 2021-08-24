import React from "react"
import Profile from "./Profile"
import {connect} from "react-redux"
import {getUserProfile} from "../../redux/profile-reducer"
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component<any>  {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.isAuthId
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}
let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    isAuthId: state.auth.userId
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))