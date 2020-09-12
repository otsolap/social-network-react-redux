import React, { Component } from 'react'
import placeholder from '../../images/placeholder.jpg'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class PostSummary extends Component {
    render() {
        return (
            <div className="card z-depth-0" >
                <div className="card-content black-text text-darken-3">
                    <span className="card-title">{this.props.post.title}</span>
                    <div className="card-image">
                        <img src={placeholder} alt="placeholder" />
                    </div>
                    <p>{this.props.post.message}</p>
                    <div className="card-action">
                        <Link to={'/post/' + this.props.post.id} key={this.props.post.id}>Read text</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(PostSummary);