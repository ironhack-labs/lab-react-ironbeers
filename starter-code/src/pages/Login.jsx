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
            this.setState({
                error: null
            }, () => {
                this.props.history.push(`/profile`)
            })
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
                    <div className = "columns">
                        <div className = "column">
                        </div>
                        <div className = "column">
                            <div className = "field">
                                <div className = "control">
                                    <input className="input is-info is-rounded" type="text" placeholder = "username" value={this.state.username} onChange={this.handleChange} name = "username"/>
                                </div>
                            </div>
                            <div className = "field">
                                <div className = "control">
                                    <input className="input is-info is-rounded" type="password" placeholder = "password" value={this.state.password} onChange={this.handleChange} name = "password"/>
                                </div>
                            </div>
                            <button className= "button is-primary is-medium is-rounded" type= "submit">Login</button>
                        </div>
                        <div className = "column">
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
