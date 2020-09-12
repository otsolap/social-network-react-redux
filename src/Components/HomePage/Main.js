import React, { Component } from 'react'
import AllPosts from '../Posts/AllPosts'
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        const { posts, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to="/Login" />

        // container = kaikki keskitetään, ei tarvii 0 auto marginia lol.
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <AllPosts posts={posts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div >
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // tämä on meidän this, props ja staten muokkaaja. :-D
        // HUOMAA MITKÄ ON FIREBASESTA JA MITKÄ FIRESTORESTA. HUOMAA ERO!!!!
        // se tarvitsee Firestorereducerin joka on Rootreducerissa.
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

// connect on se työkalu, joka yhdistää propsit/statet reduxin storeen.
// connect kysyy MIKÄ komponentti, joten täällä se on Allposts.
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] },
    ])
)(Main)