import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import {tasks} from './reducers/tasks'
import App from './App';
import './index.css';

const logger = createLogger({collapsed: true});
const reducers = {
    tasks: tasks
};

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);