
import { ActionTypes } from "../contants/action-types";

export const setProduct = (products)=>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}
export const selectedProduct = (product)=>{
    return {
        type :ActionTypes.SELECTED_PRODUCTS,
        payload : product
    }
}
export const addProduct = (product)=>{
    return {
        type :ActionTypes.ADD_PRODUCTS,
        payload : product
    }
}
export const removeProduct = (product)=>{
    return {
        type :ActionTypes.REMOVE_PRODUCTS,
        payload : product
    }
}