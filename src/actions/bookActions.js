import axios from 'axios';

export const getBooks = () => {
	return function(dispatch) {
		axios.get('/books')
			.then(response => {
				dispatch({
					type: 'GET_BOOKS',
					payload: response.data
				});
			})
			.catch(err => {
				dispatch({
					type: 'GET_BOOKS_REJECTED',
					payload: err
				});
			});
	}
}

export const postBooks = (book) => {
	return function(dispatch) {
		axios.post('/books', book)
			.then(response => {
				dispatch({
					type: 'POST_BOOK',
					payload: response.data
				});
			})
			.catch(err => {
				dispatch({
					type: 'POST_BOOK_REJECTED',
					payload: 'there was an error while posting a new book'
				});
			});
	}
}

export const deleteBooks = (id) => {
	return {
		type: 'DELETE_BOOK',
		payload: id
	}
}

export const updateBooks = (book) => {
	return {
		type: 'UPDATE_BOOK',
		payload: book
	}
}