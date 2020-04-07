import React, { Component } from 'react';
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
        signup(this.state.user)
        .then((response) => {
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
                    <div className = "columns">
                        <div className = "column">
                        </div>
                        <div className = "column">
                            <div className = "field">
                                <div className = "control">
                                    <input className ="input is-info is-rounded" type="text" placeholder = "username" value={this.state.username} onChange = {this.handleChange} name = "username"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "control">
                                 <input className ="input is-info is-rounded" type="text" placeholder = "firstname" value={this.state.firstname} onChange = {this.handleChange} name = "firstname"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "control">
                                    <input className ="input is-info is-rounded" type="text" placeholder = "lastname" value={this.state.lastname} onChange = {this.handleChange} name = "lastname"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "control">
                                    <input className ="input is-info is-rounded" type="email" placeholder = "email" value={this.state.email} onChange = {this.handleChange} name = "email"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "control">
                                    <input className ="input is-info is-rounded" type="password" placeholder = "password" value={this.state.password} onChange = {this.handleChange} name = "password"/>
                                </div>
                            </div>
                            <button className= "button is-primary is-medium is-rounded" type= "submit">Sign Up</button>
                        </div>
                        <div className = "column">
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
