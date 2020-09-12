import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// REACT-REDUX
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'


const store = createStore(
    rootReducer,
    compose(
        // withextraargument tallentaa objekteja, 
        // applymiddleware on FUNKTIO, koska sen sisällä on thunk.
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >,
    document.getElementById('root')
);