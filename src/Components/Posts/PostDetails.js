import React, { Component } from 'react'
import placeholder from '../../images/placeholder.jpg'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class PostSummary extends Component {
    render() {
        return (
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="card-image">
                            <img src={placeholder} alt="placeholder" />
                        </div>
                        <span className="card-title">{this.props.post.title}</span>
                        <p>{this.props.post.message}</p>
                    </div>
                    <div className="card-action black-text">
                        <div><Link to={'/'} >Back to Mainpage</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}


// haluamme ID:n ja jos kyseessä olisi muu kuin firebase appi, tekisimme sen.
// props.match.params.id, mutta se ei ole vaihtoehto nytten. muuten router info olisi helppo saada.
// id:mme on nyt toinen parametsi, jonka liitämme urlin loppuun.
// posts => perus urli. id => perässä tuleva urli.
// returnissa post on post, joka on yhdistelä posts + id => nämä luovat specigfic id urlimme.
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}


export default connect(mapStateToProps)(PostSummary);