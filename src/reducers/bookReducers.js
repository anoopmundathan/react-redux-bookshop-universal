const bookReducers = function(state={books:[]}, action) {
	switch(action.type) {
		case 'GET_BOOKS':
			return {...state, books: [...action.payload]}
		case 'POST_BOOK':
			return {
				...state,
				books: [...state.books, ...action.payload],
				msg: 'Saved! Click to continue',
				style: 'success'
			}
			break;
		case 'POST_BOOK_REJECTED':
			return {...state, msg: 'Please try again', style: 'danger'}
			break;
		case 'RESET_BUTTON':
			return {...state, msg: null, style: 'primary'}
			break;
		case 'DELETE_BOOK':
			const currentBookToDelete = [...state.books];
			const indexToDelete = currentBookToDelete.findIndex(book => book.id === action.payload.id);
			return {
				books: [...currentBookToDelete.slice(0, indexToDelete),
				...currentBookToDelete.slice(indexToDelete + 1)]
			};
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
		default: 
			return state;
	}
}

export default bookReducers;