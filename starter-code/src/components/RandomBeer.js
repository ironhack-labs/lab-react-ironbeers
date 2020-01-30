import React, { Component } from 'react';
import Header from "./Header";

class RandomBeer extends Component {
    render() {
        return (
            
            <div>
                <Header/>
                <p>
                <img src ="./images/random-beer.png" alt = "beer"/>
                <h1>Random Beer</h1>
                </p>                
            </div>
        )
    }
}

export default RandomBeer;