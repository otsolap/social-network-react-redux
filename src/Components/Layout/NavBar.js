import React from 'react';
import Logo from './Logo';
import UserLinks from './UserLinks'



const NavBar = (props) => {
    return (
        // wrapper = kokoscreen.
        // container = keskittää kaikki yhteen kolumniin.
        <nav className="nav-wrapper  deep-orange accent-4">
            <div className="container">
                <Logo />
                <ul className="right">
                    <UserLinks />
                </ul >
            </div >
        </nav >
    )
}


export default (NavBar);