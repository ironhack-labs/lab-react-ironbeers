import React, { Component } from 'react';
import './RandomBeer.css';
import axios from 'axios';

class RandomBeer extends React.Component {
    constructor() {
        super();
        this.state = {
            randomBeers: {}
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
                this.setState({ randomBeers: response.data })
            })
    }

    getRamdonBeer = () => {
        console.log(this.state.randomBeers)
        return (
            <>
                <div className="cardDetails">
                    <div className="card_image">
                        <img src={this.state.randomBeers.image_url} style={{ width: "100px", height: "250px" }} alt="Beer" />
                    </div>
                    <div className="card_inf">
                        <h2>{this.state.randomBeers.name}</h2>
                        <h3>{this.state.randomBeers.tagline}</h3>
                        <p> <strong> First Brewed: </strong>{this.state.randomBeers.first_brewed}</p>
                        <p> <strong> Attenuation Level: </strong>{this.state.randomBeers.attenuation_level}</p>
                        <p> {this.state.randomBeers.description}</p>
                        <p> <strong>Created by: </strong> {this.state.randomBeers.contributed_by}</p>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <div >
                {this.getRamdonBeer()}
            </div>
        );
    }
}

export default RandomBeer;