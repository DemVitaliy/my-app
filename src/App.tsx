import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import Header from "./Components/HeaderBar/HeaderBar"
import Profile from "./Components/Profile/Profile"
import Users from "./Components/Users/Users"
import Dialogs from "./Components/Dialogs/Dialogs"
import NavBar from "./Components/NavBar/NavBar"

const App = (props: any) => {
    return (
        <div className={'app'}>
            <Header/>
            <NavBar/>
            <div className={'content'}>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path='/users' render={() => <Users/>}/>
                <Route exact path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                                    dispatch={props.dispatch}/>}/>
            </div>
        </div>
    )
}

export default App
