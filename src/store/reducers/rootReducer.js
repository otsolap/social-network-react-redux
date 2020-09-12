import postsReducer from './postsReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    // auth, posts, firestore ja firebase on rootReducerin PROPERTYJÄ
    // jotka rootReducer PÄIVITTÄÄ.
    // ja päivitys on....... Reducerin STATET.
    auth: authReducer,
    posts: postsReducer,
});

export default rootReducer;