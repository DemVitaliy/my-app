import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'

let rerenderEntireTree = (state:any) => {

    ReactDOM.render(<BrowserRouter>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    )
}
let state = store.getState()
rerenderEntireTree(state)

store.subscriber(rerenderEntireTree)

//reportWebVitals()
