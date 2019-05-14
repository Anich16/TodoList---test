import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import TodoListReducer from "./Redux/TodoListReducer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { reducer as formReducer } from 'redux-form'





let combinedReducers = combineReducers({
    todoList: TodoListReducer,
    form: formReducer
});

let store = createStore(combinedReducers);

let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root'));
};

renderPage();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
