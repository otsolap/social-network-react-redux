import React from 'react'
import placeholder from '../../images/placeholder.jpg'
import { Link } from 'react-router-dom'

const PostSummary = ({ post }) => {
    return (
        <div className="card z-depth-0">
            <div className="card-content black-text text-darken-3">
                <span className="card-title">{post.title}</span>
                <div className="card-image">
                    <img src={placeholder} alt="placeholder" />
                </div>
                <p>{post.message}</p>
                <div className="card-action">
                    <Link to={'/post/' + post.id} key={post.id}>Read text</Link>
                </div>
            </div>
        </div>
    )
}

export default PostSummary