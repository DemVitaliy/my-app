import React from "react"
import Post from "./Post/Post"
import styleMyPosts from "./MyPosts.module.css"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"



const MyPosts = (props: any) => {

    let wrappedPosts = props.myPosts.map((post:any) => <Post post={post.postMessage}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (e:any) => {
        let post = e.target.value
        props.dispatch(updateNewPostTextActionCreator(post))
    }

    return (
        <div className={styleMyPosts.stylesMyPosts}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder={"Post text"}
                          value={props.newPostText}
                          onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styleMyPosts.myPosts}>
                {wrappedPosts}
            </div>
        </div>
    )
}

export default MyPosts