import React from "react"
import Post from "./Post/Post"
import styleMyPosts from "./MyPosts.module.css"


const MyPosts = (props: any) => {
    let wrappedPosts = props.posts.map((post: any) => <Post post={post.postMessage} key={post.id}/>)

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (e: any) => {
        let post = e.target.value
        props.updateNewPostText(post)
    }

    return <div>
        <div className={styleMyPosts.stylesMyPosts}>
            <div className={styleMyPosts.title}>Wall</div>
            <div>
                <textarea placeholder={"Post text"}
                          maxLength={100}
                          value={props.newPostText}
                          onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddPost} className={styleMyPosts.button}>Add post</button>
            </div>
            <div className={styleMyPosts.myPosts}>
                {wrappedPosts}
            </div>
        </div>
    </div>


}

export default MyPosts