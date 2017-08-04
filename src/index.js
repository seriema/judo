import './bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import judoApp from './store/reducers';
import data from './data';

// Initial state for the store
const initialState = {
    techniques: data,
    selected: {
        // techniques: [],
        categories: [],
        techniques: data,
        techniqueName: "",
        belt: "",
        sort: "romaji",
    },
    show: {
        answer: false,
        table: true,
        card: true,
        translation: false
    }
};

// Debugging Redux with Redux Devtools Chrome Extension: http://extension.remotedev.io
const debugInfo = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Create the store with initial state and debugging
let store = createStore(judoApp, initialState, debugInfo);

// Ugly hack to make the store available if there's no devtool extension installed
window.store = store;

// Another ugly hack to log every state change to the store
store.subscribe(() =>
    console.dir(store.getState())
);

// React bootstrapping of main app, with Redux provider to make the store available on all the child elements with connect()
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
