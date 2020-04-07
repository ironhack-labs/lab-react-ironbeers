import React, { Component } from 'react';
import Navbar from './nav';
import {signup} from "../utils/auth";

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
            error:null   
        }
    }

    handleInputChange (event) {
        // debugger
        let temp_user = {...this.state.tempUser};
        temp_user[event.target.name] = event.target.value;
        this.setState({tempUser:temp_user})
    }

    handleFormSubmit(event) {
       event.preventDefault();
        // debugger
        signup(this.state.tempUser)
        .then(() => {
            this.setState({error:null}, ()=>{
                this.props.history.push({
                    pathname:`/user/profile`
                })
            })
            
        })
        .catch((error)=> {
            console.log(error.response.data.message);
            this.setState({error: error.response && error.response.data})
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

                            <input className="button is-link" type="submit" value="Signup" />
                        </form>
                        
                    </div>
                </div>
            )
        // }
        
  
    }
}


export default Signup;
