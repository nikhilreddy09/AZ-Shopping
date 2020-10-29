import React from 'react';
import {connect} from 'react-redux'
import {singleProduct, addToCart} from '../../actions'
import {Redirect} from 'react-router'
import { bindActionCreators } from 'redux'
import HeaderNav from '../HeaderNav'
class ViewProduct extends React.Component {

    componentDidMount() {
        if(!this.props.global){
           this.props.history.push('/login')
        }
        console.log(this.props.global.token)
        console.log(this.props.location.product)
        this.props.singleProduct(this.props.global.token, this.props.location.product)
    }

    renderpage() {
        if(!this.props.product){
            return null
        }
        else {
            return(
                <div className="ui segment">
                <div className="ui two column very relaxed grid">
                    <div className="column">
                        <img className="ui large rounded image" src={this.props.product.url} />
                    </div>
                    <div className="column">
                        <div className="ui large header">Product Details</div>
                        <div className="ui small header">Product Name: {this.props.product.name}</div>
                        <div className="ui small header">Product Price: {this.props.product.price}</div>
                        <div className="ui small header">Product Description: {this.props.product.description}</div>
                        <button className="ui button primary" onClick={() => {
                            var data = {name: this.props.product.name, price: this.props.product.price, userId: this.props.product.userId};
                            this.props.addToCart(data, this.props.global.token)
                        } }>Add To Cart</button>
                    </div>
                </div>
                <div className="ui vertical divider"></div>
            </div>
            )
        }
    }

    render() {
        console.log(this.props.location.product)
        console.log(this.props.product)
        return (
            <div>
                <HeaderNav />
                {this.renderpage()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        global : state.user.loggedin,
        product : state.productsList.singleProduct,
        cart: state.cart.cart
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        singleProduct,
        addToCart
    },
    dispatch,
) 

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);