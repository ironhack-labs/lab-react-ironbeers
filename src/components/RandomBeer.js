import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Navbar from './Navbar';

class RandomBeer extends Component {

    state = {
        randomBeer: []
    }

    getRandomBeer = () => {
        axios
        .get(`https://api.punkapi.com/v2/beers/random`)
        .then(response => {
            this.setState({randomBeer: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    };

    render(){
    return (
        <div>
            <Navbar/>
            {this.state.randomBeer.map((beer, index) => {
                return(
                    <div className="detalles" key={index}>
                        <img src={beer.image_url} alt=""/>
                        <h1> {beer.name} </h1> 
                        <h2> {beer.tagline} </h2>
                        <h4> {beer.first_brewed} </h4>
                        {beer.attenuation_level}
                        <p> {beer.description} </p>
                        <Link to={"/beers"}> Go Back </Link>
                    </div>
                )
            })}
        </div>
    )
    }
}

export default RandomBeer;
