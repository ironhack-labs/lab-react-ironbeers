import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class randomBeer extends Component {
    constructor() {
        super();
        this.state = {
            randomBeer: []
        };
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
                this.setState({ randomBeer: response.data })
            })
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/"> <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="home" /> </Link>
                </header>
                <div>
                    <img src={this.state.randomBeer.image_url} alt="singleBeerPic" />
                    <div><h2>{this.state.randomBeer.name}</h2><h2 className="greyH2">{this.state.randomBeer.attenuation_level}</h2></div>
                    <p><span>{this.state.randomBeer.tagline}</span><span>{this.state.randomBeer.first_brewed}</span></p>
                    <p>{this.state.randomBeer.description}</p>
                    <span>{this.state.randomBeer.contributed_by}</span>
                </div>
            </div>
        )
    }
}
