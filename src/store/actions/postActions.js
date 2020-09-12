
// Luodaan konstit siltä varalta, ettei tule kirjoitusvirheitä.
// Actioncreatorit on Reactin yhdistämistä varten.
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const NEW_POST_SUCCESFUL = 'NEW_POST_SUCCESFUL';


// tämä on async koodi ja funktio.
export const newPost = (post) => {
    return (dispatch, getState, storeEnhancers) => {
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;

        storeEnhancers.getFirestore().collection('posts').add({
            ...post,
            authorUserName: profile.username,
            userId: userId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: NEW_POST_SUCCESFUL, post })
        })
            .catch(err => {
                dispatch({ type: 'NEW_POST_ERROR', err: err })
            })
    }
}
