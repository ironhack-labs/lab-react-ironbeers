import React, { Component } from 'react'
import Form from "../../layout/Form";
import {login} from "../../services/auth";

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
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

    handleInputChange(e){
        let userCopy = {...this.state.user};
        userCopy[e.target.name] =  e.target.value;
        this.setState({
            user: userCopy
        })
    }


    handleLoginClick(){
        login(this.state.user)
        .then(()=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/user/profile")
            })
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        debugger
        return (
            <Form>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input 
                            onChange={this.handleInputChange}
                            value={this.state.username} 
                            className="input" 
                            name="username" 
                            type="text" 
                            placeholder="email"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input 
                            onChange={this.handleInputChange} 
                            value={this.state.password} 
                            className="input" 
                            name="password" 
                            type="password" 
                            placeholder="password"
                        />
                    </div>
                </div>
                <button 
                    className="is-primary button"
                    onClick={this.handleLoginClick}>
                    Log in
                </button>
                {this.state.error && 
                    <p className="has-text-danger">{this.state.error.message || "error"}</p>
                }
            </Form>
        )
    }
}