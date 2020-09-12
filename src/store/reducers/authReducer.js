import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from '../actions/authActions';

// ei tarvii aina nimetä initialstate. :-P
const initState = {
    authError: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            console.log('new user registered!');
            return { ...state, authError: null }
        case REGISTER_FAIL:
            console.log('new user register failed!')
            return { ...state, authError: action.err.message }
        case LOGIN_ERROR:
            console.log('login error');
            return { ...state, authError: 'Login error' }
        case LOGIN_SUCCESS:
            console.log('login success!');
            return { ...state, authError: null }
        case SIGNOUT_SUCCESS:
            console.log('logout success')
            return state
        // switch vaatii defaultin, muista se.
        default:
            return state;
    };
}

export default reducer;


