
import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import reducers from './reducers';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// STEP3 : Define reducer

// STEP1 : Create Store
const store = createStore(reducers);
store.subscribe(function() {
	console.log('current state is :', store.getState());
})

// STEP2 : Create and dispatch action
store.dispatch({
	type: 'POST_BOOK',
	payload: [
		{
    		id: 1,
    		title:'this is the book title',
    		description: 'this is the book',
    		price: 33.33
		}, 
		{
			id: 2,
			title:'this is the second book title',
			description: 'this is the second book',
    		price: 50
		},
		{
			id: 3,
			title:'this is the third book title',
			description: 'this is the third book',
    		price: 60
		}
	]
});

store.dispatch({
	type: 'DELETE_BOOK',
	payload: { 
		id: 2 
	}
});

store.dispatch({
	type: 'UPDATE_BOOK',
	payload:  { 
		id: 3,
    	title:'Learn React in 30h'
	}
});

store.dispatch({
	type: 'POST_BOOK',
	payload: [
		{
    		id: 4,
    		title:'this is the fourth book title',
    		description: 'this is the book',
    		price: 23.33
		}
	]
});

