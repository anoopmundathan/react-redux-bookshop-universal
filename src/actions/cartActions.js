import axios from 'axios';

// GET CART
export const getCart = () => {
	return function(dispatch) {
		axios.get('/api/cart')
		.then(response => {
			dispatch({
				type: 'GET_CART',
				payload: response.data
			});
		})
		.catch(err => {
			dispatch({
				type: 'GET_CART_REJECTED',
				msg: 'error when getting the cart from session'
			});
		});
	}
}

// ADD TO CART
export const addToCart = (cart) => {
	return function(dispatch) {
		axios.post('/api/cart', cart)
		.then(response => {
			dispatch({
				type: 'ADD_TO_CART',
				payload: response.data
			});
		})
		.catch(err => {
			dispatch({
				type: 'ADD_TO_CART_REJECTED',
				msg: 'error when adding to the cart'
			});
		});
	}
}

export const updateCart = (id, unit, cart) => {
	// Create a copy of the current array of books
	const currentBookToUpdate = cart;
	// Determine at which index in books array is the book to be deleted
	const indexToUpdate = currentBookToUpdate.findIndex( book => book.id === id);
	const newBookToUpdate = {...currentBookToUpdate[indexToUpdate],
								quantity: currentBookToUpdate[indexToUpdate].quantity + unit
							};
	let cartUpdate = [
		...currentBookToUpdate.slice(0,indexToUpdate),
		newBookToUpdate,
		...currentBookToUpdate.slice(indexToUpdate + 1)
	];

	return function(dispatch) {
		axios.post('/api/cart', cartUpdate)
		.then(response => {
			dispatch({
				type: 'UPDATE_CART',
				payload: response.data
			});
		})
		.catch(err => {
			dispatch({
				type: 'UPDATE_CART_REJECTED',
				msg: 'error when adding to the cart'
			});
		});
	}
}

export const deleteCartItem = (id) => {
	
}