
import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// STEP3 : Define reducer
const reducer = function(state={books:[]}, action) {
	switch(action.type) {
		case 'POST_BOOK':
			return {books: [...state.books, ...action.payload]}
			break;
		case 'DELETE_BOOK':
			const currentBookToDelete = [...state.books];
			const indexToDelete = currentBookToDelete.findIndex(book => book.id === action.payload.id);
			return {
				books: [...currentBookToDelete.slice(0, indexToDelete),
				...currentBookToDelete.slice(indexToDelete + 1)]
			}
			break;
		case 'UPDATE_BOOK':
			const currentBookToUpdate = [...state.books];
			const indexToUpdate = currentBookToUpdate.findIndex(book => book.id === action.payload.id);
			const newBookToUpdate = Object.assign({}, currentBookToUpdate[indexToUpdate], {
				title: action.payload.title
			});

			return {
				books: [...currentBookToUpdate.slice(0, indexToUpdate),
				newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]
			}
			break;
	}
}

// STEP1 : Create Store
const store = createStore(reducer);
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
})