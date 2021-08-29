import React from "react"
import Profile from "./Profile"
import {connect} from "react-redux"
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer"
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"
import {ProfileType} from "../../types/types"

type MapStatePropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
    rebuildProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId // 9663
            /*if (!userId) {
                <Redirect to="/login"/>
            }*/
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.rebuildProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.rebuildProfile()
        }
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
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect)
(ProfileContainer)