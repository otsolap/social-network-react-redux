import React, { Component } from 'react';
import PostSummary from './PostSummary'
// higher-order component luoja, eli componenteillä on hierarkia ja järjestys.
import { connect } from 'react-redux';

class AllPosts extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="all-posts section">
                {posts && posts.map(post => {
                    return (
                        <PostSummary post={post} key={post.id} />
                    )
                })}
            </div>
        )
    }
}

// State otetaan, laitetaan kerttaan ja siirretään Propseihin.
// koska Storessa state on yhtäkuin props.
// Siksi sitä voi siirrellä sinne sun tänne.
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// connect on se työkalu, joka yhdistää propsit/statet reduxin storeen.
// connect kysyy MIKÄ komponentti, joten täällä se on Allposts.
// ja 
export default connect(mapStateToProps)(AllPosts)