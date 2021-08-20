import MyPosts from "./MyPosts"
import React from "react"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"
import {connect} from "react-redux"

let mapStateToProps = (state:any) => {
    return {
        myPosts: state.profilePage.myPosts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (post:any) => {
            dispatch(updateNewPostTextActionCreator(post))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer