import React from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
class HeaderNav extends React.Component{

    componentDidMount() {
        console.log(this.token)

    }
    render() {
        return (
            <div>
                <div className="ui pointing menu">
                    <Link to="/products/add" className="item">Create Product</Link>
                    <Link to="/products/list" className="item">List Products</Link>
                    <Link to="/userads" className="item">My Ads</Link>
                    <div className="right menu">
                        <Link to="/cart" className="ui item">Cart</Link>
                        <Link to="/" className="ui item">LogOut</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token : state.user.loggedin,
        cart : state.cart.cart
    }
}

export default connect(mapStateToProps)(HeaderNav);