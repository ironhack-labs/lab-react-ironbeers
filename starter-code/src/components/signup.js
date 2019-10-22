import React, { Component } from "react";
import { Link } from "react-router-dom";
import {signup} from "../utils/auth";
import Header from "./header";

class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            firstname: "",
            lastname: "",
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

        signup(this.state);

        this.props.history.push("/auth/login");

        // let newUser= this.state;

        // axios.post("https://ih-beers-api.herokuapp.com/auth/signup", newUser)
        // .then((response)=>{
        //     debugger
        //     localStorage.setItem("user", JSON.stringify(response.data));
        //     this.props.history.push("/home")
        // })
        // .catch(error=>{
        //     debugger
        // })
    }

    render(){
        debugger
        return(
            <div>
            <Header />
            <form class="form-inline" onSubmit={this.submitHandler} id="new-form">
                <div>
                <label for="name">Username</label>
                <input type="text" className="form-control" name="username" onChange={this.changeHandler} required/>
                </div>
                <div>
                <label for="firstname">Firstname</label>
                <input type="text" className="form-control" name="firstname" onChange={this.changeHandler} required/>
                </div>
                <div>
                <label for="lastname">Lastname</label>
                <input type="text" className="form-control" name="lastname" onChange={this.changeHandler} required/>
                </div>
                <div>
                <label for="email">Email</label>
                <input type="email" className="form-control" name="email" onChange={this.changeHandler} required/>
                </div>
                <div>
                <label for="password">Password</label>
                <input type="password" className="form-control" name="password" onChange={this.changeHandler} required/>
                </div>
                <div>
                <button type="submit" className="btn btn-primary">Signup</button>
                </div>
            </form>
            <span>Already, have an account</span><Link to="/auth/login" className="btn btn-primary ml-2">Login</Link>
            </div>
        )
    }
}

export default Signup