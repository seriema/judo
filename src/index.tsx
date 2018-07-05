import './bootstrap.min.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import judoApp from './store/reducers';
import data from './data';
import { getState, saveState } from './store/localStorage';
// import registerServiceWorker from './registerServiceWorker';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any,
        __REDUX_DEVTOOLS_EXTENSION__: any,
        store: any;
    }
}

// Initial state for the store
let initialState : any = {
    techniques: {
        allItems: data,
        // These are initialized in the techniques reducer:
        // filteredItems
        // currentIndex
        // currentName
    },
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

// Create the store with initial state and optional debugging
let middleware: Middleware[] = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Debugging Redux with Redux Devtools Chrome Extension: http://extension.remotedev.io
const store = createStore(judoApp, initialState, composeEnhancers(applyMiddleware(...middleware)));

// If there's no Redux devtools extension installed in the browser then these ugly things are actually useful.
if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
    // Make the store available.
    window.store = store;

    // Log every state change to the store
    store.subscribe(() =>
        console.dir({store: store.getState()})
    );
}

// Whenever a change happens, save it to the users localStorage if needed.
store.subscribe(() => {
    saveState(store.getState());
});

// React bootstrapping of main app, with Redux provider to make the store available on all the child elements with connect()
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();
