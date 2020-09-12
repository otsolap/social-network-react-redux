import React from 'react';
import { NavLink } from 'react-router-dom';

// MITÄ EROA ON NAVLINKILLÄM JA LINKILLÄ?
// NAVLINK on hyödyllisimme propsien kautta, mutta navlink antaa lisäävaihtoehtoja.
const NonRegLinks = () =>
    (
        <ul id="nav-mobile" className="right">
            <li> <NavLink to="/Login"><i className="small material-icons left">arrow_upward</i>Login </NavLink > </li>
            <li><NavLink to="/Register"><i className="small material-icons left">add_circle</i>Register </NavLink> </li>
        </ul>
    )


export default NonRegLinks