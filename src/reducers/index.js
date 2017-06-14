import {combineReducers} from 'redux';
import bookReducers from './bookReducers';
import cartReducers from './cartReducers';

export default combineReducers({
	book: bookReducers,
	cart: cartReducers
});