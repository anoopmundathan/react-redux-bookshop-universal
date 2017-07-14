
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {postBooks, deleteBooks, updateBooks} from './actions/bookActions';
import {addToCart} from './actions/cartActions';

import BookList from './components/pages/bookList';

// Create middleware
const middleware = applyMiddleware(thunk,createLogger());

// step1 : create store
const store = createStore(reducers, middleware);

render(
	<Provider store={store}>
		<BookList />
	</Provider>, document.getElementById('root')
);
