"use strict"

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

import Footer from './components/footer';
import BookList from './components/pages/bookList';

import Main from './components/main';
import Cart from './components/cart';
import BookForm from './components/pages/bookForm';

// Create middleware
const middleware = applyMiddleware(thunk,createLogger());

// step1 : create store
const store = createStore(reducers, middleware);

const About = () => {
	return(
		<h1>About</h1>
	);
}

const Contact = () => {
	return(
		<h1>Contact</h1>
	);
}

const Admin = () => {
	return(
		<h1>Admin</h1>
	);
}

const Routes = (
	<Provider store={store}>
		<Router>
			<div>
				<Route path="/" component={Main} />  
				<Route exact path="/" component={BookList} />
				<Route path="/" component={Footer} /> 
				<Route exact path="/admin" component={BookForm} />
				<Route exact path="/cart" component={Cart} />
			</div>
		</Router>
	</Provider>
);

render(
	Routes, document.getElementById('root')
);
