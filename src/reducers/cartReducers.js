const cartReducers = function(state={cart: []}, action) {
	switch(action.type) {
		case 'ADD_TO_CART':
		return {cart: [...state.cart, action.payload.id]};
		default:
			return state;
	}
}

export default cartReducers;