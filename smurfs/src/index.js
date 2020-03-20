import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../src/reducers/reducer';

// const composeEnhancers = window.__REDUX_DVETOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(thunk))
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__() || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);



const rootElement = document.getElementById('root');
ReactDOM.render(
   <Provider store={store}>
       <App/>
   </Provider>,
   rootElement
);
