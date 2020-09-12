import { NEW_POST_SUCCESFUL } from '../actions/postActions';
// tää on vaan muuntuja, johon objekteja tallenetaan.
const initialState = {
    posts: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_POST_SUCCESFUL:
            // state.posts, koska haluamme vain vaikuttaa siihen.
            return { ...state, posts: [...state.posts, action.post] }
        default:
            return state;
    }
}

export default reducer;