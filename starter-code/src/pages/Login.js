import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import {login} from "../utils/auth";

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }
    state = {
        user: {
            username: '',
            password: ''
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
    handleLoginClick (event) {
        debugger
        event.preventDefault();
        login(this.state.user)
        .then((reponse)=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/profile")
            })
        })
        .catch((error)=> {
            console.log(error)
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>login page</h1>
                <form>
                    <input type="text" name="username" placeholder='username' value={this.state.username} onChange={this.handleInputChange}/>
                    <input type="text" name="password" placeholder='password' value={this.state.password} onChange={this.handleInputChange}/>
                <button className="is-primary button" onClick={this.handleLoginClick}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login
