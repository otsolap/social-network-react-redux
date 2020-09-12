import React from 'react';
import { Link } from 'react-router-dom'

// Link varmistaa SPA-laadun, ettei tule refreshejä.
const Logo = () => (
    <Link to="/" className="brand-logo center">
        <i className="large material-icons">brightness_7</i>
    </Link>
)

export default Logo;