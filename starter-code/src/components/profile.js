import React, { Component } from 'react';
import {getUser} from "../utils/auth";
import Navbar from './nav';


class Profile extends Component {
    constructor() {
        super()

        this.state = {
            theUser: {
                username:"",  
                id : "", 
                firstname  : "",  
                lastname : "",
                email : ""
            }   
        }
    }

    componentDidMount() {
        // debugger
        let tempUser = getUser();
        this.setState ({theUser:tempUser});
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className= "beer-bottle">
                    <div className="desc">
                        <h2 >username: {this.state.theUser.username}</h2> 
                        <p>firstname: {this.state.theUser.firstname}</p>
                        <p>lastname: {this.state.theUser.lastname}</p>
                        <p>email: {this.state.theUser.email}</p>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Profile;
