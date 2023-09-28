import { cartProduct, productReducer, productdetails } from "./reducer";
import { combineReducers } from "redux";

 export const rootReducer  = combineReducers({
    productReducer,
    product : productdetails,
    cart : cartProduct
})