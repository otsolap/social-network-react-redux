import React, { Component } from 'react'
import AllPosts from '../Posts/AllPosts'
import { connect } from 'react-redux';

class Main extends Component {
    render() {
        const { posts } = this.props;
        // container = kaikki keskitetään, ei tarvii 0 auto marginia lol.
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <AllPosts posts={posts} />
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

// connect on se työkalu, joka yhdistää propsit/statet reduxin storeen.
// connect kysyy MIKÄ komponentti, joten täällä se on Allposts.
export default connect(mapStateToProps)(Main)