import {GET_ALL_PRODUCTS_START,GET_ALL_PRODUCTS_SUCCESS,GET_ALL_PRODUCTS__ERROR} from '../types/product-type';

export const getAllProducts = () => {
	return (dispatch) => {
		dispatch(getAllProductStart());
		fetch('https://dummyjson.com/products')
			.then(response => response.json())
			.then(response => {
				dispatch(getAllProuctSuccess(response.products));
			})
			.catch(err => {
				dispatch(getAllProductError(err));
			});
	};
};

const getAllProductStart = () => {
	return {
		type: GET_ALL_PRODUCTS_START
	};
};

const getAllProuctSuccess = (data) => {
	return {
		type: GET_ALL_PRODUCTS_SUCCESS,
		payload: data
	};
};

const getAllProductError = (data) => {
	return {
		type: GET_ALL_PRODUCTS__ERROR,
		payload: data
	};
};



