import { combineReducers } from "redux";
import productReducer from '../reducers/productsReduser'
import cartReducer from "./productsReduser2";
import authReducer from "./authReducer"
import reducer from "./productsReduser2";
// const store=createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const reducers = combineReducers({
    allProducts:productReducer,
    // cartReducer:cartReducer,
    authReducer:authReducer,
    // order:reducer,
})  
export default reducers;