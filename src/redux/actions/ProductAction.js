import { ActionTypes } from "../constants/Action-type";

export const  setProducts= (products)=>({
    type:ActionTypes.SET_PRODUCTS,
    payload:products
})