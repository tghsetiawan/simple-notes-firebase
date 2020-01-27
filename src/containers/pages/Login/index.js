import React, {Component} from 'react';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { loginUserAPI } from '../../../config/redux/action';
import { withRouter } from "react-router-dom";

class Login extends Component{

    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })

    }

    handleLoginSubmit = async () => {
        const email = this.state.email;
        const password = this.state.password;
        const {history} = this.props;
        const res = await this.props.loginAPI({email, password}).catch(err => err)
        if(res){
            console.log('login success',res);
            this.setState ({
                email: '',
                password: ''
            })
            history.push('/')
        }else{
            console.log('login failed');
        }
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
                    <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading}/>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(withRouter(Login));