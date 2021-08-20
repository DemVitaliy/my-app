import React from "react"
import Post from "./Post/Post"
import styleMyPosts from "./MyPosts.module.css"


const MyPosts = (props: any) => {
    let wrappedPosts = props.myPosts.map((post: any) => <Post post={post.postMessage} key={post.id}/>)

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (e: any) => {
        let post = e.target.value
        props.updateNewPostText(post)
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
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={styleMyPosts.myPosts}>
                {wrappedPosts}
            </div>
        </div>
    )
}

export default MyPosts