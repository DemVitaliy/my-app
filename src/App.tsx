import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import UsersContainer from "./Components/Users/UsersContainer"
import HeaderContainer from "./Components/HeaderBar/HeaderBarContainer"
import LoginForm from "./Components/Login/Login"
import ProfileContainer from "./Components/Profile/ProfileContainer"
import DialogsContainer from "./Components/Dialogs/DialogsContainer"

const App = () => {
    return (
        <div className={'app'}>
            <HeaderContainer />
            <NavBar/>
            <div className={'content'}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route exact path='/dialogs' render={() => <DialogsContainer />}/>
                <Route exact path='/login' render={() => <LoginForm />}/>
            </div>
        </div>
    )
}

export default App
