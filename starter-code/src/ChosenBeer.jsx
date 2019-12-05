import React, { Component } from 'react'

export default class ChosenBeer extends Component {
    render() {
        return (
            <div>
                <img src={this.props.beerSent.image_url} alt={this.props.beerSent.name} />
                <h1>{this.props.beerSent.name}</h1>
                <h2>{this.props.beerSent.tagline}</h2>
                <h2>{this.props.beerSent.first_brewed}</h2>
                <h3>{this.props.beerSent.attenuation_level}</h3>
                <p>{this.props.beerSent.description}</p>
                <p>{this.props.beerSent.contributed_by}</p>
            </div>
        )
    }
}
