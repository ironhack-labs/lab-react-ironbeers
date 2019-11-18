import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class HomePage extends Component {
    render() {
        return (
            <div className="Home-page">
        <img src="images/beers.png"/>
        <h1><Link to="/beers" style={{textDecoration:"none", color:"black"}}>All Beers</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.</p>


        <img src='images/random-beer.png'/>
        <h1><Link to="/random-beer" style={{textDecoration:"none", color:"black"}}>Random Beer</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.</p>


        <img src="images/new-beer.png"/> 
        <h1><Link to="/new-beer" style={{textDecoration:"none", color:"black"}}>New Beer</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.</p>     
            </div>
        )
    }
}

export default HomePage
