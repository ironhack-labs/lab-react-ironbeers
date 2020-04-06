import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './nav';

class Logout extends Component {
    constructor() {
        super()

        this.state = {
            response: ""
        }
    }

    componentDidMount() {
        debugger
        axios.get(`https://ih-beers-api.herokuapp.com/auth/logout`)
        .then(response => {
            console.log(response)
            this.setState({response: response.statusText})
        })
        .catch((error)=> {
            console.log(error.response.data.message);
        });
    }

    render() {
        return (
            <div>
                <Navbar />
               <h1>Logged out!</h1> 
               <p>{this.state.response}</p>
            </div>
        )
    }
}

export default Logout
