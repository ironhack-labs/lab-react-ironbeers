import React, { Component } from 'react';
import Navbar from './nav';
import {logout} from "../utils/auth";

class Logout extends Component {
    constructor() {
        super()

        this.state = {
            response: "",
            error:null
        }
    }

    componentDidMount() {
        // debugger
        logout()
        .then(response => {
            console.log(response)
            this.setState({
                response: response.statusText, 
                error:null}, 
                ()=> {
                    this.props.history.push("/beers")
                }
            )
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
               <h1>Logging out ...</h1> 
            </div>
        )
    }
}

export default Logout
