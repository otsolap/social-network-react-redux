import React, { Component } from 'react';
import PostSummary from './PostSummary'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
// import Firebase from 'firebase';

class AllPosts extends Component {
    render() {
        const { posts } = this.props;

        // mitä Posts && meinaa? Sitä, että se tarkistaa,
        // onko koko postsia olemassa. Jos ei ole.
        // Koodimme ei vaivaudu tekemään mappia laisinkaan.
        // posts.map siis olettaa että postia on.
        // mutta mitä jos serverissä ongelmia? Siksi varmistus tehdään ekana posts.
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

const mapStateToProps = (state) => {
    return {
        // tämä on meidän this, props ja staten muokkaaja. :-D
        // ennen firestorea tää oli jtn posts: state.posts.posts
        // se tarvitsee Firestorereducerin joka on Rootreducerissa.
        posts: state.firestore.ordered.posts
    }
}



// connect on se työkalu, joka yhdistää propsit/statet reduxin storeen.
// connect kysyy MIKÄ komponentti, joten täällä se on Allposts.
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy: ['createdAt', 'desc'] }
    ])
)(AllPosts)