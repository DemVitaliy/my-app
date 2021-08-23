import MyPosts from "./MyPosts"
import React from "react"
import {
    addPost,
    updateNewPostText
} from "../../../redux/profile-reducer"
import {connect} from "react-redux"

let mapStateToProps = (state:any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts)

export default MyPostContainer