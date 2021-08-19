import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import Header from "./Components/HeaderBar/HeaderBar"
import Profile from "./Components/Profile/Profile"
import Users from "./Components/Users/Users"
import Dialogs from "./Components/Dialogs/Dialogs"
import NavBar from "./Components/NavBar/NavBar"


const App = (props:any) => {

    return (
        <div className={'app'}>
            <Header />
            <NavBar />
            <div className={'content'}>
                <Route path='/profile' render={ () => <Profile profilePageData={props.state.profilePage}/>}/>
                <Route path='/users' render={ () => <Users />}/>
                <Route path='/dialogs' render={ () => <Dialogs dialogsPageData={props.state.dialogsPage}/>}/>
            </div>
        </div>
    )
}

export default App
