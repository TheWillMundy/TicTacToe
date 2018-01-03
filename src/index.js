import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Reducer from './reducers/index'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {createGameboard} from './actions'

const store = createStore(Reducer, applyMiddleware(thunkMiddleware))

createGameboard()(store.dispatch)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
