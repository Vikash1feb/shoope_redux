import { combineReducers } from "redux";
import { ProductsReducers } from "./ProductReducers";

const reducers = combineReducers ({
    products :ProductsReducers,
})

export default  reducers;