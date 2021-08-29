import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import "antd/dist/antd.css"
import NavBar from "./Components/NavBar/NavBar"
import UsersPage from "./Components/Users/UsersPage"
import HeaderContainer from "./Components/HeaderBar/HeaderBarContainer"
import Login from "./Components/Login/Login"
import ProfileContainer from "./Components/Profile/ProfileContainer"
import DialogsContainer from "./Components/Dialogs/DialogsContainer"
import Preloader from "./Components/common/Preloader/Preloader"
import {AppStateType} from "./redux/redux-store"
import {connect} from "react-redux"
import {initializeApp} from "./redux/app-reducer"

type PropsType = {
    initialized: boolean
    initializeApp: () => void
}

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return <div className={'app'}>
            <HeaderContainer/>
            <NavBar/>
            <div className={'content'}>
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersPage />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                    <Route exact path='/login' render={() => <Login/>}/>

                    <Route path='*' render={() => <div>Page not found</div>}/>
                </Switch>
            </div>
        </div>

    }


}
let mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}
export default connect(mapStateToProps, {initializeApp})(App)
