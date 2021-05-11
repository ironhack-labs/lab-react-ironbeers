import React from 'react';
import { Link } from 'react-router-dom';

import { Component } from 'react'

export default class Home extends Component {
    
    render() {

        return (
            <div className="home">
                <div>
                    <img src={require("../assets/beers.png")}/>
                    <Link to="/beers"><h3>All Beers</h3></Link>
                </div>
                <div>
                    <img src={require("../assets/new-beer.png")}/> 
                    <Link to="/beers/random"><h3>Random Beer</h3></Link>               
                </div>
                <div>
                    <img src={require("../assets/random-beer.png")}/>
                    <Link to="/new-beer" ><h3>Add a Beer</h3></Link>
                </div>
            </div>
        )
    }
}
