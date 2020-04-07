import React, { Component } from 'react';
import Nav from '../components/Nav';
import {login} from '../utils/auth'

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        user: {
            username: "",
            password: ""
        },
        error: null
    }
    
    handleChange(event){
        debugger
        let userCp = {...this.state.user};
        userCp[event.target.name] = event.target.value;
        this.setState({
            user : userCp
        })
    } 

    handleSubmit(event){
        event.preventDefault();
        login(this.state.user)
        .then((response) => {
            debugger
            this.setState({
                error: null
            }, () => {
                this.props.history.push(`/profile`)
            })
        })
        .then((response)=>{
            debugger
            console.log(response.data)

        })
        .catch(function(err){
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <form onSubmit= {this.handleSubmit}>
                    <input type="text" placeholder = "username" value={this.state.username} onChange={this.handleChange} name = "username"/>
                    <input type="password" placeholder = "password" value={this.state.password} onChange={this.handleChange} name = "password"/>
                    <button type= "submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
