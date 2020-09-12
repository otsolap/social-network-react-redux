import postsReducer from './postsReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    // auth, posts, on rootReducerin PROPERTYJÄ
    // jotka rootReducer PÄIVITTÄÄ.
    // ja päivitys on....... Reducerin STATET.
    posts: postsReducer,
});

export default rootReducer;