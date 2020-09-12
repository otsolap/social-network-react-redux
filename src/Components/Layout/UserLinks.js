import React from 'react';
import { NavLink } from 'react-router-dom';


// MITÄ EROA ON NAVLINKILLÄM JA LINKILLÄ?
// NAVLINK on hyödyllisimme propsien kautta, mutta navlink antaa lisäävaihtoehtoja.
const UserLinks = (props) => {
    return (
        <ul id="nav-mobile" className="right">
            <li> <NavLink to="/newpost"><i className="small material-icons left hide-on-med-and-down">arrow_downward</i>New Post </NavLink > </li>
        </ul>
    )
}

export default UserLinks;