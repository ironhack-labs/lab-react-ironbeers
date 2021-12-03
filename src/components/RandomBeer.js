import React, { Component } from 'react'
import BeersService from "../services/beer.service"

export default class RandomBeer extends Component {
    constructor() {
        super()

        this.state = {
            beer: []
        }

        this.service = new BeersService()
    }


    componentDidMount() {
        this.refreshBeer()
    }

    refreshBeer = () => {
        this.service.getRandomBeer()
            .then(response => {
                const beer = response.data

                this.setState({ beer })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="random-beer">
                <h1>{this.state.beer.name}</h1>
                <img src={this.state.beer.image_url} alt="Girl in a jacket" width="500" height="600" />
                <p>{this.state.beer.tagline}</p>
                <h4>Created by: {this.state.beer.contributed_by}</h4>
            </div>
        )
    }
}


