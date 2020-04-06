import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './nav';
import qs from 'qs';

class Signup extends Component {
    constructor() {
        super()

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            response: 0 ,
            tempUser: {
                username:"",  
                password : "", 
                firstname  : "",  
                lastname : "",
                email : ""
            }, 
            newUser:{}   
        }
    }

    handleInputChange (event) {
        debugger
        let temp_user = {...this.state.tempUser};
        temp_user[event.target.name] = event.target.value;
        this.setState({tempUser:temp_user})
    }

    handleFormSubmit(event) {
        event.preventDefault();
        debugger
        axios({
            method: "POST",
            url: "https://ih-beers-api.herokuapp.com/auth/signup", 
            data: qs.stringify(this.state.tempUser) ,
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
        .then(response => {
            console.log(response.data)
            this.props.history.push({
                pathname:`/user/profile`,
                state: {user: response.data}
            })
        })
        .catch((error)=> {
            console.log(error.response.data.message);
        });
    }

    render() {
            return (          
                <div>
                    <Navbar />
                    <div className= "add-form">                  
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="field">
                                <label className="label">Firstname:</label>
                                <div className="control">
                                    <input
                                        className="input" 
                                        type="text" 
                                        name="firstname" 
                                        value={this.state.tempUser.firstname} 
                                        onChange={this.handleInputChange}/>   {/* the handler gets the event object by default */}
                                </div>
                            </div>
                            
                            
                            <div className="field">
                                <label className="label">Lastname:</label>
                                <div className="control">
                                    <input
                                        className="input" 
                                        type="text" 
                                        name="lastname" 
                                        value={this.state.tempUser.lastname} 
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            
                            <div className="field">
                                <label className="label">Email:</label>
                                <div className="control">
                                    <input
                                        className="input" 
                                        type="email" 
                                        name="email" 
                                        value={this.state.tempUser.email} 
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Username:</label>
                                <div className="control">
                                    <input
                                        className="input" 
                                        type="text" 
                                        name="username" 
                                        value={this.state.tempUser.username} 
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password:</label>
                                <div className="control">
                                    <input
                                        className="input" 
                                        type="password" 
                                        name="password" 
                                        value={this.state.tempUser.password} 
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>

                            <input class="button is-link" type="submit" value="Submit" />
                        </form>
                        
                    </div>
                </div>
            )
        // }
        
  
    }
}


export default Signup;
