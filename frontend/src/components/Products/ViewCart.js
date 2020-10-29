import React from 'react';
import {connect} from 'react-redux'
import {getCart, createBooking} from '../../actions'
import {Redirect} from 'react-router'
import { bindActionCreators } from 'redux'
import HeaderNav from '../HeaderNav'
import {Link} from 'react-router-dom';


class ViewCart extends React.Component {
    state = {items: [], price: 0, userId:""}
    componentDidMount() {
        if(!this.props.global) {
            this.props.history.push('/')
        }
        this.props.getCart(this.props.global.token);

    }

    renderList() {
        if(!this.props.list) {
            return null
        } else {
            return this.props.list.map((item) => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                )
            })

        }
    }
    render() {
        return (
            <div>
                <HeaderNav />
                <table className="ui very basic table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
                </table>
                <button onClick={() => {
                    window.alert("request made");
                }} className="ui button primary"> Request a Booking</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        global: state.user.loggedin,
        list: state.cart.list
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getCart,
        createBooking
    },
    dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);