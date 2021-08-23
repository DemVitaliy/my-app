import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import DialogsContainer from "./Components/Dialogs/DialogsContainer"
import UsersContainer from "./Components/Users/UsersContainer"
import ProfileContainer from "./Components/Profile/ProfileContainer"
import HeaderContainer from "./Components/HeaderBar/HeaderBarContainer"

const App = () => {
    return (
        <div className={'app'}>
            <HeaderContainer />
            <NavBar/>
            <div className={'content'}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route exact path='/dialogs' render={() => <DialogsContainer />}/>
            </div>
        </div>
    )
}

export default App
