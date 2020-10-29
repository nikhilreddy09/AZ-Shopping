import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {getProducts} from '../../actions'
import ViewProduct from './ViewProduct';
import {Redirect} from 'react-router'
import HeaderNav from '../HeaderNav'
class ListProducts extends React.Component {

    componentDidMount() {
        if(!this.props.global){
             this.props.history.push('/login')
        }
        else {
            this.props.getProducts(this.props.global.token)
        }
    }

    renderList() {
        if(this.props.products.products === undefined) {
            return null;
        }
      return this.props.products.products.map((product) => {
        //   console.log(product.name)
        //   console.log(product.url)
          return (
                <div className="card" key={product._id}>
                    <div className="image">
                        <img className="ui tiny rounded image"  src={product.url} alt={product.description}></img>
                    </div>
                    <div className="content">
                        <div className="header"> {product.name}</div>
                        <div className="description">{product.description}</div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                                <Link className="ui button primary" to={{
                                    pathname: '/products/single',
                                    product: {
                                        id: product._id
                                    }
                                }}>
                                View
                                </Link>
                        </span>
                        <span>
                            <i className="dollar sign icon"></i>
                            {product.price}
                        </span>
                    </div>
                </div>
          )
       })
    }

    render() {
        return (
            <div>
            <HeaderNav />
            <div className="ui four cards">
                {this.renderList()}
            </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        global: state.user.loggedin,
        products: state.productsList
    }
}

export default connect(mapStateToProps, {getProducts})(ListProducts) 