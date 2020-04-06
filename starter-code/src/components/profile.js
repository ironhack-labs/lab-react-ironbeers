import React, { Component } from 'react';

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
            }, 
            newUser:{}   
        }
    }

    componentDidMount() {
        debugger
        let tempUser = {...this.state.theUser};
        tempUser = this.props.location.state.user;
        this.setState ({theUser:tempUser});
        // axios.get(`https://ih-beers-api.herokuapp.com/user/profile`)
        // .then(response => {
        //     let tempUser = {...response.data}
        //     console.log(response.data)
        //     this.setState({theUser: tempUser})
        // })
        // .catch((error)=> {
        //     console.log(error);
        // });
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
