import React, { Component } from 'react'
// import axios from 'axios'
// import qs from "qs";
import Navbar from '../components/Navbar'
import {signup} from "../utils/auth";

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
    }
    state = {
        user: {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
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
    handleSignupClick(event){
        event.preventDefault();
        signup(this.state.user)
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
                <form>
                <div className="field">
                    <div className="control">
                        <input type="text" name="username" placeholder='username' value={this.state.username} onChange={this.handleInputChange} className='input'/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input type="text" name="firstname" placeholder='firstname' value={this.state.firstname} onChange={this.handleInputChange} className='input'/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                <input type="text" name="lastname" placeholder='lastname' value={this.state.lastname} onChange={this.handleInputChange} className='input'/>
                </div>
                </div>
                <div className="field">
                    <div className="control">
                <input type="text" name="email" placeholder='email' value={this.state.email} onChange={this.handleInputChange} className='input'/>
                </div>
                </div>
                <div className="field">
                    <div className="control">
                <input type="text" name="password" placeholder='password' value={this.state.password} onChange={this.handleInputChange} className='input'/>
                </div>
                </div>
                <button onClick={this.handleSignupClick} className="button">Signup</button>
                </form>
            </div>
        )
    }
}