import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import {tasks} from './reducers/tasks'
import App from './App';
import './index.css';

const localData = localStorage.getItem('TodoApp:Tasks');

const initialState = {
    tasks: localData ? JSON.parse(localData) : []
};

const logger = createLogger({collapsed: true});
const save = store => next => action => {
    const dispatched = next(action);
    localStorage.setItem('TodoApp:Tasks', JSON.stringify(store.getState().tasks));
    return dispatched;
};

const reducers = {
    tasks: tasks
};

const store = createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(logger, save)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);