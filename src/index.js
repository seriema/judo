import './bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import judoApp from './store/reducers';
import { setRandomTechnique } from './store/actions';
import data from './data';
import { getState, saveState } from './store/localStorage';

// Initial state for the store
let initialState = {
    techniques: data,
    selected: {
        categories: ['newaza', 'nagewaza', 'ukemiwaza'],
        techniqueName: '',
        belt: '',
        sort: 'romaji',
    },
    show: {
        answer: false,
        table: true,
        card: true,
        translation: false
    }
};

const localState = getState();
if (localState) {
    initialState = {
        ...initialState,
        selected: localState.selected,
        show: localState.show
    };
}

// Create the store with initial state and debugging
let middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Debugging Redux with Redux Devtools Chrome Extension: http://extension.remotedev.io
const store = createStore(judoApp, initialState, composeEnhancers(applyMiddleware(...middleware)));

store.dispatch(setRandomTechnique());
store.subscribe(() => {
    saveState(store.getState());
});

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
