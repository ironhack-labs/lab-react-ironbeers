import React, { Component } from 'react';
import beersImage from '../assets/beers.png';
import beersRandomImage from '../assets/random-beer.png';
import beersNewImage from '../assets/new-beer.png';


class Homepage extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div>
                    <img src={beersImage} alt="beers-image"/>
                    <a href="/beers"><h1>All beers</h1></a>
                    <p>Lorem Ipsum</p>
                </div>
                <div>
                    <img src={beersRandomImage} alt="beers-image"/>
                    <a href="/random-beer"><h1>Random Beer</h1></a>
                    <p>Lorem Ipsum</p>
                </div>
                <div>
                    <img src={beersNewImage} alt="beers-image"/>
                    <a href="/new-beer"><h1>New beer</h1></a>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        );
    }
}

export default Homepage;