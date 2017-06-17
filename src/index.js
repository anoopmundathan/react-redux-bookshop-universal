
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import {postBooks, deleteBooks, updateBooks} from './actions/bookActions';
import {addToCart} from './actions/cartActions';

import BookList from './components/pages/bookList';

// Create middleware
const middleware = applyMiddleware(logger);

// step1 : create store
const store = createStore(reducers, middleware);

store.dispatch(postBooks([
	{
		id: 1,
		title: 'Harry Potter'
	}
]));

store.dispatch(postBooks([
	{
		id: 2,
		title: 'Second Chance'
	}
]));

store.dispatch(deleteBooks({
	id: 2
}));

store.dispatch(updateBooks({
	id: 1,
	title: 'Harry Water'
}));

render(
	<Provider store={store}>
		<BookList />
	</Provider>, document.getElementById('root')
);

