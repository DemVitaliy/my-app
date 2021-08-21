import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import Header from "./Components/HeaderBar/HeaderBar"
import Profile from "./Components/Profile/Profile"
import NavBar from "./Components/NavBar/NavBar"
import DialogsContainer from "./Components/Dialogs/DialogsContainer"
import UsersContainer from "./Components/Users/UsersContainer"

const App = () => {
    return (
        <div className={'app'}>
            <Header/>
            <NavBar/>
            <div className={'content'}>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route exact path='/dialogs' render={() => <DialogsContainer />}/>
            </div>
        </div>
    )
}

export default App
