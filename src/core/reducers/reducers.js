import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import productReducer  from './Product-reducer';

export default combineReducers({
	form: reducerForm,
	Product: productReducer,
});
 