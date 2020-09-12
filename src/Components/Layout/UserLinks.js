import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


// MITÄ EROA ON NAVLINKILLÄM JA LINKILLÄ?
// NAVLINK on hyödyllisimme propsien kautta, mutta navlink antaa lisäävaihtoehtoja.
const UserLinks = (props) => {
    return (
        <ul id="nav-mobile" className="right">
            <li><NavLink className="btn btn-floatin orange lighten-1" to='/'> {props.profile.username} </NavLink></li>
            <li> <NavLink to="/newpost"><i className="small material-icons left hide-on-med-and-down">arrow_downward</i>New Post </NavLink > </li>
            <li><NavLink onClick={props.signOut} to="/logout" >
                <i className="small material-icons left hide-on-med-and-down">arrow_downward</i>Logout</NavLink></li>

        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

// ei mapstatetopropsia => null pitää laittaa.
// tää on vähän niinkuin BOILERPLATE koodia lol.
export default connect(null, mapDispatchToProps)(UserLinks);