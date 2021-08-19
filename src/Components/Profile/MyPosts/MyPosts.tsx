import React from "react"
import Post from "./Post/Post"
import styleMyPosts from "./MyPosts.module.css"

const MyPosts = (props: any) => {

    let wrappedPosts = props.myPosts.map((post:any) => <Post post={post.postMessage}/>)

    let newPostElement:any = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let post = newPostElement.current.value
        props.updateNewPostText(post)
    }

    return (
        <div className={styleMyPosts.stylesMyPosts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
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