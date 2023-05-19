import { combineReducers } from 'redux';
import productReducer  from './Product-reducer';

export default combineReducers({
	Product: productReducer,
});
 