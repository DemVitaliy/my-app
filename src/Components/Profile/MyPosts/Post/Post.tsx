import React from "react";

type PropsType = {
    post: string
}
const Post:React.FC<PropsType> = ({post, ...props}) => {
    return (
        <div>{post}</div>
    )
}
export default Post