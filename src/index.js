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
import { useSelector } from 'react-redux'

const store = createStore(
    rootReducer,
    compose(
        // withextraargument tallentaa objekteja, joita getfirestore ja getfirebase on
        // eli nyt thunkkeihin voi littää firebasen ja firestoren.
        // applymiddleware on FUNKTIO, koska sen sisällä on thunk.
        applyMiddleware(thunk.withExtraArgument({})),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById('root')
);