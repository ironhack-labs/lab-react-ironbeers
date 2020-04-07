import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import Form from "../layout/Form";
import {login} from "../utilities/auth";

class Login extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    state = {
        user: {
            username: "",
            email: "",
            password: ""
        },
        error: null
    }

    handleInputChange(event) {
        let userCopy = {...this.state.user};

        userCopy[event.target.name] =  event.target.value;
        this.setState({
            user: userCopy
        });
    }

    // Another way of setting the method:
    // changeHandler(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value 
    //     });
    // }

    handleLoginClick() {
        login(this.state.user)
        .then((reponse) => {
            this.setState({
                error: null
            }, 
            
            () => {
                //Successful re-direct
                this.props.history.push("/profile");
            });
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data});
        });
    }

    render() {
        return (
        <DefaultLayout>
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
                            placeholder="username"
                        />
                    </div>
                </div>
            <div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input 
                            onChange={this.handleInputChange}
                            value={this.state.email} 
                            className="input" 
                            name="email" 
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
                    Login
                </button>
                {this.state.error && 
                    <p className="has-text-danger">{this.state.error.message || "error"}</p>
                }
            </div>
        </Form>
        </DefaultLayout>
        )
    }
}

export default Login;