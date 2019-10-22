import React, { Component } from "react";
import {login} from "../utils/auth";
import Header from "./header";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();

        login(this.state)
            .then(()=> {
                this.props.history.push("/");
            });
    }

    render(){
        return(
            <div>
            <Header/>
            <form class="form-inline" onSubmit={this.submitHandler} id="new-form">
                <div>
                <label for="name">Username</label>
                <input type="text" className="form-control" name="username" onChange={this.changeHandler} required/>
                </div>
                <div>
                <label for="password">Password</label>
                <input type="password" className="form-control" name="password" onChange={this.changeHandler} required/>
                </div>
                <div>
                <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            </div>
        )
    }
}

export default Login