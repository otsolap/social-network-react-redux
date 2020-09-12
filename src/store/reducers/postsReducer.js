import { NEW_POST_SUCCESFUL } from '../actions/postActions';
// tää on vaan muuntuja, johon objekteja tallenetaan.
const initialState = {
    posts: [
        { id: '1', title: "Otso's first post", message: "Hello world." },
        { id: '2', title: "Olavi's declaration.", message: "King of the World!." },
        { id: '3', title: "Visit Lapland", message: "Home of the Santaclaus!." }
    ],
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