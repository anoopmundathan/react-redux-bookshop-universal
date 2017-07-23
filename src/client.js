"use strict"

// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// REACT ROUTER
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';
import {addToCart} from './actions/cartActions';

import routes from './routes';

// Create middleware
const middleware = applyMiddleware(thunk,createLogger());
// step1 : create store
const initialState = window.INITIAL_STATE;
const store = createStore(reducers, initialState, middleware);

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
)

render(
	Routes, document.getElementById('root')
);
