import React, { Component } from 'react'
import Card from '../../components/Card'
import {getARandomBeer} from '../../services/beers'

export default class RDMBeer extends Component {
    state = {
        beer: []
    }

    async componentDidMount() {
        const beer = await getARandomBeer()
        this.setState({beer})
    }

    render() {
        return (
            <Card
                image={this.state.beer.image_url}
                name={this.state.beer.name}
                tagline={this.state.beer.tagline}
                first_brewed={this.state.beer.first_brewed}
                attenuation_level={this.state.beer.attenuation_level}
                description={this.state.beer.description}
                contributed_by={this.state.beer.contributed_by}
            />
        )
    }
}
