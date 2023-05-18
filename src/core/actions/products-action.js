import { Dispatch } from 'redux';
import {GET_ALL_PRODUCTS_START,GET_ALL_PRODUCTS_SUCCESS,GET_ALL_PRODUCTS__ERROR} from '../types/product-type';

export const getAllProducts = () => {
	alert("hello")
	return (dispatch) => {
		dispatch(getAllUserStart());

		fetch.get('https://dummyjson.com/products')
			.then(response => {
				dispatch(getAllUserSuccess(response.data));
			})
			.catch(err => {
				dispatch(getAllUserError(err));
			});
	};
};

const getAllUserStart = () => {
	return {
		type: GET_ALL_PRODUCTS_START
	};
};

const getAllUserSuccess = (data) => {
	return {
		type: GET_ALL_PRODUCTS_SUCCESS,
		payload: data
	};
};

const getAllUserError = (data) => {
	return {
		type: GET_ALL_PRODUCTS__ERROR,
		payload: data
	};
};



