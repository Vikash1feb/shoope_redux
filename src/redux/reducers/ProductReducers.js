import { ActionTypes } from "../constants/Action-type";

const initialState ={
    Listproducts: [],

}
export const ProductsReducers = (state = initialState , action) => {
    const {type ,payload} =action;
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, Listproducts: payload};
            default:
                return state;
    }
}