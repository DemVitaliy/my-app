import React from "react"
import Profile from "./Profile"
import {connect} from "react-redux"
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer"
import {withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"

class ProfileContainer extends React.Component<any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.isAuthId
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        isOwner={!this.props.match.params.userId}
                        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuthId: state.auth.userId
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect)
(ProfileContainer)