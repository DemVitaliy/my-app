import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from "react-redux"
import {AppStateType} from "./redux/redux-store"
import {initializeApp} from "./redux/app-reducer"
import Preloader from "./Components/common/Preloader/Preloader"
import UsersPage from "./Components/Users/UsersPage"
import Login from "./Components/Login/Login"
import HeaderBar from "./Components/HeaderBar/HeaderBar"
import ProfileContainer from "./Components/Profile/ProfileContainer"
import DialogsContainer from "./Components/Dialogs/DialogsContainer"

import styles from './App.module.css'
import "antd/dist/antd.css"
import {Layout} from 'antd'

const {Footer} = Layout

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
        return <div className={styles.layout}>

            <div className={styles.header}>
                <HeaderBar/>
            </div>

            <div className={styles.content}>
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersPage/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='*' render={() => <div>Page not found</div>}/>
                </Switch>
            </div>

            <div className={styles.footer}>
                <Footer style={{textAlign: 'center'}}>
                    Welcome to social network for React samurais. Hope you enjoy)
                </Footer>
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
