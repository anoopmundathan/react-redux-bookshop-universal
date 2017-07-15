// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// REACT ROUTER
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';
import {postBooks, deleteBooks, updateBooks} from './actions/bookActions';
import {addToCart} from './actions/cartActions';

import Menu from './components/menu';
import Footer from './components/footer';
import BookList from './components/pages/bookList';

// Create middleware
const middleware = applyMiddleware(thunk,createLogger());

// step1 : create store
const store = createStore(reducers, middleware);

const Routes = (
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Menu} />
				<Route exact path="/" component={BookList} />
				<Route exact path="/" component={Footer} />
			</div>
		</Router>
	</Provider>
);

render(
	Routes, document.getElementById('root')
);