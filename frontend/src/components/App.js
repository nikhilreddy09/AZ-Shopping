import React from 'react';
import {Router, Route} from 'react-router-dom';
import RegisterUser from './Users/RegisterUser'
import HeaderNav from './HeaderNav'
import LoginUser from './Users/LoginUser'
import CreateProduct from './Products/CreateProduct'
import ListProducts from './Products/ListProducts'
import ViewProducts from './Products/ViewProduct'
import ViewCart from './Products/ViewCart'
import UserProducts from './Products/UserProducts'
import history from '../history'
const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Route path="/" exact component={LoginUser} />
                    <Route path="/signup" component={RegisterUser} />
                    <Route path="/login" component={LoginUser} />
                    <Route path="/products/add" component={CreateProduct} />
                    <Route path="/products/list" component={ListProducts} />
                    <Route path="/products/single" component={ViewProducts} />
                    <Route path="/cart" component={ViewCart} />
                    <Route path="/userads" component={UserProducts} />
                </div>
            </Router>            
        </div>
    )
}
export default App;