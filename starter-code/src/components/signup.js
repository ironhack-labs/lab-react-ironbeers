import React, { Component } from "react";
import axios from "axios";

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

        let newUser= this.state;

        axios.post("https://ih-beers-api.herokuapp.com/auth/signup", newUser)
        .then(response=>{
            debugger
            this.props.history.push("/home")
        })
        .catch(error=>{
            debugger
        })
    }

    render(){
        return(
            <form class="form-inline" onSubmit={this.submitHandler} id="new-form">
                <div>
                <label for="name">Username</label>
                <input type="text" class="form-control" name="username" onChange={this.changeHandler} required/>
                </div>
                <div>
                <label for="firstname">Firstname</label>
                <input type="text" class="form-control" name="firstname" onChange={this.changeHandler} required/>
                </div>
                <div>
                <label for="lastname">Lastname</label>
                <input type="text" class="form-control" name="lastname" onChange={this.changeHandler} required/>
                </div>
                <div>
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" onChange={this.changeHandler} required/>
                </div>
                <div>
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" onChange={this.changeHandler} required/>
                </div>
                <div>
                <button type="submit" class="btn btn-primary">Signup</button>
                </div>
            </form>
        )
    }
}

export default Signup