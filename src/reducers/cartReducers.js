const cartReducers = function(state={cart: []}, action) {
	
	console.log(action.payload);

	switch(action.type) {
		case 'ADD_TO_CART':
			return {
				cart: [...action.payload]
			};
		default:
			return state;
	}
}

export default cartReducers;