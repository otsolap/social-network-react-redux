import { ALL_POSTS } from "../actions/postActions";

const initialState = {
    posts: [
        { id: '1', title: "Otso's first post", message: "Hello world." },
        { id: '2', title: "Olavi's declaration.", message: "King of the World!." },
        { id: '3', title: "Visit Lapland", message: "Home of the Santaclaus!." }
    ],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POSTS:
            // state.posts, koska haluamme vain vaikuttaa siihen.
            return { ...state, posts: [...state.posts, action.post] }
        default:
            return state;
    }
}

export default rootReducer;