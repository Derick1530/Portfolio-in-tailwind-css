import React, { } from 'react'
import { useParams } from 'react-router-dom'
const Post = (props) => {
    const { id } = useParams()
    return (
        <div>
            <div>

                Hello from Post {id}
            </div>
        </div>
    )
}

export default Post
