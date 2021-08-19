import React from "react"
import Post from "./Post/Post"
import styleMyPosts from "./MyPosts.module.css"

const MyPosts = (props:any) => {
    let wrappedPosts = props.myPosts.map( (post:any) => <Post post={post.postMessage}/>)
    return (
        <div className={styleMyPosts.myPosts}>
            {wrappedPosts}
        </div>
    )
}

export default MyPosts