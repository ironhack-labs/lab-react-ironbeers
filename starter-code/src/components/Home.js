import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

 
    

    render() {
        return (
            <div>
            <Link to="/beers">All Beers</Link> <br/>
            <Link to="/random-beer">Random Beer</Link><br/>
            <Link to="/new-beer">New Beer</Link><br/>
            </div>
        )
    }
}
