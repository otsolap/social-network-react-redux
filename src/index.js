import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// REACT-REDUX BABY
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import { Provider } from 'react-redux';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore'
// ReactReduxFireBaseProvider varmistaa että Firebasen datasta saadaan propseja.
// Ja myös tekee siitä yhteentekevän Reduxin kanssa tietenkin.
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import { FIREBASE_CONFIG as firebaseConfig, REDUX_FIRESTORE_CONFIG as reduxfirestoreconfig } from './config/FirebaseConfig'
// näitä tarvittiin saadakseen isAuth toimivaan.
import { isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux'

const store = createStore(
    rootReducer,
    compose(
        // withextraargument tallentaa objekteja, joita getfirestore ja getfirebase on
        // eli nyt thunkkeihin voi littää firebasen ja firestoren.
        // applymiddleware on FUNKTIO, koska sen sisällä on thunk.
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(firebase, firebaseConfig),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

// Auth päivittäminen.
// huom, että nyt reactreduxfirebaseproviderissa on 2 config-tiedostoa
// tämä on osa sitä.
function AuthisLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div><p>Loading....</p></div>
    return children
}


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider
            firebase={firebase}
            config={firebaseConfig}
            config={reduxfirestoreconfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}
        ><AuthisLoaded>
                <App />
            </AuthisLoaded>
        </ReactReduxFirebaseProvider>
    </Provider >,
    document.getElementById('root')
);