import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src ="./images/beers.png" alt = "beer"/>                    
                    <Link to= "/beers"><h1>All Beers</h1></Link>
                </div>
                <div>
                    <img src ="./images/random-beer.png" alt = "beer"/>                    
                    <Link to= "/random-beer"><h1>Random Beers</h1></Link>
                </div>
                <div>
                    <img src ="./images/new-beer.png" alt = "beer"/>                    
                    <Link to= "/new-beer"><h1>New Beer</h1></Link>
                </div>          
            </div>
        )
    }
}

export default Home