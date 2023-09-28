import { ActionTypes } from "../contants/action-types";
const initialState = {
  products: [
    


  ],
  cart : []
}
export const productReducer = (state = initialState, { type, payload }) => {
  if (type === ActionTypes.SET_PRODUCTS) {
    return { ...state, products: payload }
  }
  else {
    return state;
  }
}
export const productdetails = (state = {}, { type, payload }) => {
  if (type === ActionTypes.SELECTED_PRODUCTS) {
    return { ...state, ...payload }
  } else {
    return state;
  }
}

export const cartProduct = (state =initialState.cart, action) => {
 
 
  if (action.type === ActionTypes.ADD_PRODUCTS) {
     return [...state,action.payload]
    
  }
  
  else if(action.type === ActionTypes.REMOVE_PRODUCTS){
    return state.filter((item)=> item.id !== action.payload.id)
  }
  else{
    return state
  }
  
}