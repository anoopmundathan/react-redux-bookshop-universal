export const addToCart = (id) => {
	return {
		type: 'ADD_TO_CART',
		payload: id
	}
}
export const updateCart = (id, unit) => {
	return {
		type: 'UPDATE_CART',
		id: id,
		unit: unit
	}
}

export const deleteCartItem = (id) => {
	return {
		type: 'DELETE_CART_ITEM',
		payload: id
	}
}