import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePost = () => {
    const { postId } = useParams();

    return (
        <div>SinglePost {postId}</div>
    )
}

export default SinglePost