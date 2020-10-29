import {combineReducers} from 'redux';

import UsersReducer from './UsersReducer'
import ProductsReducer from './ProductsReducer'
import CartReducer from './CartReducer'
export default combineReducers({
    user: UsersReducer,
    productsList: ProductsReducer,
    cart: CartReducer
})