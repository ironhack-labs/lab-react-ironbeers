import React, { Component } from 'react'
import Nav from './Header';
import axios from 'axios';

export default class SingleBeer extends Component {
    state = {
        beerId: this.props.match.params.beerId,
        beerInfo: {}
    }
    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.state.beerId}`)
        .then(response => {
            this.setState({beerInfo: response.data})
        })
    }
    render() {
        return (
            <div>
                <Nav />
                <div className = 'singlebeer'>
                    <img src = {this.state.beerInfo.image_url} alt = '' />
                    <div className = 'singlebeerheader'>
                        <div>
                            <h1>{this.state.beerInfo.name}</h1>
                            <p>{this.state.beerInfo.tagline}</p>
                        </div>
                        <div>
                            <h1>{this.state.beerInfo.attenuation_level}</h1>
                            <p>{this.state.beerInfo.first_brewed}</p>
                        </div>
                    </div>
                    <p className = 'singlebeerdesc'>{this.state.beerInfo.description}</p>
                    <p className = 'singlebeercreator'>{this.state.beerInfo.contributed_by}</p>
                </div>
            </div>
        )
    }
}
