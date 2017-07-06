import './bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import judoApp from './store/reducers';
import data from './data';

let store = createStore(judoApp, {
    selected: {
        // techniques: [],
        techniques: data,
        techniqueName: "",
        belt: "",
        sort: "romaji",
    },
    show: {
        table: true,
        cards: true,
        translation: false
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
