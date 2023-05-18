import {GET_ALL_PRODUCTS_START,GET_ALL_PRODUCTS_SUCCESS,GET_ALL_PRODUCTS__ERROR} from '../types/product-type';


// const getAllUserStart = (oldState, action) => {
//     return updateObject(oldState, {
//         userList: updateObject(oldState.userList, {
//             error: null, loading: true
//         })
//     });
// };


const getAllUserStart =(oldState,action)=>{
    return{
        loading:true,
        error:null
    }
}


const getAllUserSuccess = (oldState, action) => {
   return{
        loading:false,
        error:null,
        product:action.payload
   }
};


const getAllUserError =(oldState, action)=>{
     return{
        error: action.payload,
        loading: false
     }
}

// const getAllUserError = (oldState, action) => {
//     return updateObject(oldState, {
//         userList: updateObject(oldState.userList, {
//             error: action.payload,
//             loading: false
//         })
//     });
// };





const userReducer = (oldState , action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_START: return getAllUserStart(oldState, action);
        case GET_ALL_PRODUCTS_SUCCESS: return getAllUserSuccess(oldState, action);
        case GET_ALL_PRODUCTS__ERROR: return getAllUserError(oldState, action);
        default: return oldState;
    }
};
export default userReducer;