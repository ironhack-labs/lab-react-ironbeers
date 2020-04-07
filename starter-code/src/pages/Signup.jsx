import React, { Component } from 'react';
// import axios from 'axios';
// import qs from 'qs';
import Nav from '../components/Nav';
import {signup} from '../utils/auth'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        user: {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        error: null
    }
    
    handleChange(event){
        let userCp = {...this.state.user};
        userCp[event.target.name] = event.target.value;
        this.setState({
            user : userCp
        })
    } 

    handleSubmit(event){
        event.preventDefault();
        debugger
        signup(this.state.user)
        .then((response) => {
            debugger
            this.setState({
                error: null
            }, () => {
                this.props.history.push(`/profile`)
            })
        })
        .catch((err) => {
            debugger
            
        })
        }

    render() {
        return (
            <div>
                <Nav />
                <form onSubmit= {this.handleSubmit}>
                    <input type="text" placeholder = "username" value={this.state.username} onChange = {this.handleChange} name = "username"/>
                    <input type="text" placeholder = "firstname" value={this.state.firstname} onChange = {this.handleChange} name = "firstname"/>
                    <input type="text" placeholder = "lastname" value={this.state.lastname} onChange = {this.handleChange} name = "lastname"/>
                    <input type="email" placeholder = "email" value={this.state.email} onChange = {this.handleChange} name = "email"/>
                    <input type="password" placeholder = "password" value={this.state.password} onChange = {this.handleChange} name = "password"/>
                    <button type= "submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;
