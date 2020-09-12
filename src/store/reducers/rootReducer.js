import postsReducer from './postsReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
// firestoreReducer saadaam koodinrakenne async.
// firestore ja state tekee yhteistyötä taustalla
import { firestoreReducer } from 'redux-firestore';
// synkkaa meidän reducerit firebasen kanssa.
// näin me saadaan firebasen kanssa auth toimintaan, eli login/logout hoidetaan tällä.
// firebasereducer hoitaa paljon asioita behind-the-scene
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    // auth, posts, firestore ja firebase on rootReducerin PROPERTYJÄ
    // jotka rootReducer PÄIVITTÄÄ.
    // ja päivitys on....... Reducerin STATET.
    auth: authReducer,
    posts: postsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;