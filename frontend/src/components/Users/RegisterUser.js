import React from 'react';
import {connect} from 'react-redux'
import {register} from '../../actions'
class RegisterUser extends React.Component {

    state = {username:'', password: '', fullname:'', email: ''}

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.register(this.state)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return(
            <div>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <input type="text" onChange={(e) => this.handleChange(e)} name="username" placeholder="enter username" />
                    </div>
                    <div className="field">
                        <input type="text" onChange={(e) => this.handleChange(e)} name="email" placeholder="enter email" />
                    </div>
                    <div className="field">
                        <input type="text" onChange={(e) => this.handleChange(e)} name="password" placeholder="enter password" />
                    </div>
                    <div className="field">
                        <input type="text" onChange={(e) => this.handleChange(e)} name="fullname" placeholder="enter fullname" />
                    </div>
                    <button className="ui button primary" type="submit" value="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {register})(RegisterUser) 