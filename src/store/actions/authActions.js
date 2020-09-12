export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password,
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                username: newUser.username,
                email: newUser.email
            })
        }).then(() => {
            dispatch({ type: REGISTER_SUCCESS })
        }).catch((err) => {
            dispatch({ type: REGISTER_FAIL, err })
        })
    }
}



export const signIn = (auth) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            auth.email,
            auth.password
        ).then(() => {
            dispatch({ type: LOGIN_SUCCESS })
        }).catch((err) => {
            dispatch({ type: LOGIN_ERROR, err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: SIGNOUT_SUCCESS })
        });
    }
}
