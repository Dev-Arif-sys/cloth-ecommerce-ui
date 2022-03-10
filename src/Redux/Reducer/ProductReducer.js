import * as actionTypes from '../ActionTypes/ProductActionTypes'

const  ProductReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_REQUEST:return{
            ...state,
            loading:true
        }
        case actionTypes.GET_PRODUCT_SUCCESS:return{
            ...state,
            loading:false,
            products:action.payload
        }
        case actionTypes.GET_PRODUCT_FAIL:return{
            ...state,
            loading:false,
            error:action.payload
        }
        default: return state
    }
}

export default ProductReducer;