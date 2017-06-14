import {combineReducers} from 'redux';
import bookReducers from './bookReducers';

export default combineReducers({
	book: bookReducers
});