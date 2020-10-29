import React from 'react';
import {connect} from 'react-redux'
import {getuserads, delUserads} from '../../actions'
import {Redirect} from 'react-router'
import HeaderNav from '../HeaderNav'
import { bindActionCreators } from 'redux'

class UserProducts extends React.Component {
    
    componentDidMount() {
        if(!this.props.global) {
            this.props.history.push('/')
        }
        console.log(this.props.global.id)
        this.props.getuserads(this.props.global.id, this.props.global.token)
    }

    renderClick(id) {
        console.log(id)
            this.props.delUserads(id, this.props.global.token)
    }
    renderList() {
        if(!this.props.userads) {
            return null
        } else {
            return this.props.userads.map((ad) => {
                return (
                    <tr key={ad._id}>
                        <td>{ad.name}</td>
                        <td>{ad.price}</td>
                        {console.log(ad._id)}
                        <td><button className="negative ui button" onClick= {() => { this.renderClick(ad._id)} }>Delete</button></td>
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
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        global : state.user.loggedin,
        userads: state.user.ads
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getuserads,
        delUserads

    },
    dispatch,
) 

export default connect(mapStateToProps, mapDispatchToProps)(UserProducts)