import axios from 'axios'
import * as actionTypes from '../ActionTypes/ProductActionTypes'

export const getProduct=()=>async(dispatch)=>{
    try{
     dispatch({type:actionTypes.GET_PRODUCT_REQUEST})
     const {data}=await axios('http://localhost:5000/products')
     dispatch({
         type:actionTypes.GET_PRODUCT_SUCCESS,
         payload:data
     })
    }catch(error){
        dispatch({
            type:actionTypes.GET_PRODUCT_SUCCESS,
            payload:error
        })
    }
}