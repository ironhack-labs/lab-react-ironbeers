import axios from 'axios';
import React, { Component } from 'react'
import Navbar from './Navbar'

export default class RandomBeer extends Component {

    state = {
        beer: []
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            this.setState({
                beer : response.data
            })
        })
    }

    render() {
        if (!this.state.beer) return <h1>We're getting you some fresh beer from the tap</h1>
        return (
            <>
                <Navbar />
                    <div>
                    <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                    <h1>{this.state.beer.name}</h1>
                    <h2>{this.state.beer.tagline}</h2>
                    <h3>First brewed: {this.state.beer.first_brewed}</h3>
                    <h4>Attenuation level: {this.state.beer.attenuation_level}</h4>
                    <p>{this.state.beer.description}</p>
                    <p>{this.state.beer.contributed_by}</p>
                    </div>
            </>
        )
    }
}
