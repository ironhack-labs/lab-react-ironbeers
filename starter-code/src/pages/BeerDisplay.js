import React, { Component } from 'react'
import SingleBeer from '../components/SingleBeer'
import { getBeer } from '../services/beers'

class BeerDisplay extends Component {
    state = {
        beer: {}
    }

    async componentDidMount() {
        console.log(this.props)
        const beer = await getBeer(this.props.match.params.beerId)
        this.setState({
            beer
        })
    }

    render() {
        return (
            <SingleBeer 
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

export default BeerDisplay