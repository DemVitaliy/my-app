import React from "react"
import Profile from "./Profile"
import axios from "axios"
import {connect} from "react-redux"
import {setUserProfile} from "../../redux/profile-reducer"
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component<any>  {

    componentDidMount(): void {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.isAuthId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then( response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}
let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    isAuthId: state.auth.userId
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))