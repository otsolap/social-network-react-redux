import React from 'react';
import Logo from './Logo';
import NonRegLinks from './NonRegLinks'
import UserLinks from './UserLinks'
import { connect } from 'react-redux';
// koska Firebasen pitää hankkia dataa backendistä.
// sen sijaan että käytämme jtn animaatiota loadaamiseen.
// firebase tarjoaa meille is Loaded vaihtoehdon.
// ilman tätä --> applikaatopmme AINA näyttää nonRegLinks ekana
// koska auth.UID ei ehdi lataantua.
import { isLoaded } from 'react-redux-firebase';


const NavBar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <UserLinks profile={profile} /> : <NonRegLinks />
    return (
        // wrapper = kokoscreen.
        // container = keskittää kaikki yhteen kolumniin.
        <nav className="nav-wrapper  deep-orange accent-4">
            <div className="container">
                <Logo />
                <ul className="right">
                    {isLoaded(auth) && links}
                </ul >
            </div >
        </nav >
    )
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(NavBar);