import HeaderToHome from '../components/HeaderToHome'
import axios from "axios"

import React, { Component } from 'react'

export default class RandomBeer extends Component {

    state = {
        beer: null,
        APIEndpoint:
        "https://ih-beers-api2.herokuapp.com/beers/random"
    }


    componentDidMount() {

        axios
        .get(this.state.APIEndpoint)
        .then(res => this.setState({beer: res.data}))
        .catch(err => console.log(err))
    }
    

    render() {


        return this.state.beer ? (
            <div>
                <HeaderToHome />
                <div className="displayBeer">
                    <img src={this.state.beer.image_url} alt="beer"></img>
                    <div className="beerHeader">
                        <div className="beerTitle">
                            <p>{this.state.beer.name}</p>
                            <p>{this.state.beer.attenuation_level}</p>
                        </div>
                        <div className="beerNumber">
                            <p>{this.state.beer.tagline}</p>
                            <p>{this.state.beer.first_brewed}</p>
                        </div>
                    </div>

                    <p className="beerDescription">{this.state.beer.description}</p>

                    <p className="beerAuthor">{this.state.beer.contributed_by}</p>

                </div>
            </div>
            
            
        ) : (
            <p>... loading</p>
        )
    }
}