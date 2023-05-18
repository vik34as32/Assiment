import {GET_ALL_PRODUCTS_START,GET_ALL_PRODUCTS_SUCCESS,GET_ALL_PRODUCTS__ERROR} from '../types/product-type';

const initialState ={
    loading:false,
    error:null,
    product:[]
}



const getAllUserStart =(oldState,action)=>{
    return {...oldState,
        loading:true,
        error:null
    }
}


const getAllUserSuccess = (oldState, action) => {
   return {...oldState,
        loading:false,
        error:null,
        product:action.payload
   }
};


const getAllUserError =(oldState, action)=>{
     return {...oldState,
        error: action.payload,
        loading: false
     }
}


const userReducer = (oldState = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_START: return getAllUserStart(oldState, action);
        case GET_ALL_PRODUCTS_SUCCESS: return getAllUserSuccess(oldState, action);
        case GET_ALL_PRODUCTS__ERROR: return getAllUserError(oldState, action);
        default: return oldState;
    }
};
export default userReducer;