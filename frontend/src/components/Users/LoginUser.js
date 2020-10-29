import React from 'react';
import {connect} from 'react-redux'
import './LoginUser.css'
import {login} from '../../actions'
class LoginUser extends React.Component {
    state = {email: '', password: ''}

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.login(this.state)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return(
            <div>
                <div className="ui middle aligned center aligned grid">
                    <div className="column">
                        <h2 className="ui image header">
                            <div className="content">Log in to your account</div>
                        </h2>
                        <form onSubmit={this.onSubmit} className="ui large form">
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input type="text" onChange={(e) => this.handleChange(e)} name="email" placeholder="email address" />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input type="password" onChange={(e) => this.handleChange(e)} name="password" placeholder="password" />
                                    </div>
                                </div>
                                <button className="ui fluid large submit button">Login</button>
                            </div>
                        </form>
                        <div className="ui message">New To Us? SignUp!! </div>
                    </div>
                </div>
            </div>
        )
        
    }
}






export default connect(null, {login})(LoginUser) 