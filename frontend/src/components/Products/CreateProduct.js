import React from 'react';
import {connect} from 'react-redux'
import {createProduct} from '../../actions'
import {Redirect} from 'react-router'
import HeaderNav from '../HeaderNav'
class CreateProduct extends React.Component {

    state={name:'', price: 0, description:'', userId: "", url: ""}

    componentDidMount() {
        if(!this.props.global){
            this.props.history.push('/login')
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            userId: this.props.global.id
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        // const userId = this.props.global.id
        // console.log(userId)
        console.log(this.props.global)
        console.log(this.state)

        this.props.createProduct(this.state, this.props.global.token)
    }

    openWidget = () => {
        window.cloudinary.createUploadWidget({
            cloudName: 'nikhilreddy09',
            uploadPreset: 'liag2lgs'
        },(err,result) => {
            if(result.event === 'success'){
                this.setState({url: result.info.secure_url})
            }
        }).open()
    }
    render(){
        return (
            <div>
                <HeaderNav />
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <input type="text" onChange={(e) => this.handleChange(e)} name="name" placeholder="enter product name" />
                    </div>
                    <div className="field">
                        <input type="number" onChange={(e) => this.handleChange(e)} name="price" placeholder="enter price" />
                    </div>
                    <div className="field">
                        <input type="text" onChange={(e) => this.handleChange(e)} name="description" placeholder="enter description" />
                    </div>
                    <button type="button" className="ui button primary" onClick={this.openWidget}>Upload Picture</button>
                    <button className="ui button primary" type="submit" value="submit">Proceed</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        global: state.user.loggedin
    }
}

export default connect(mapStateToProps, {createProduct})(CreateProduct) 