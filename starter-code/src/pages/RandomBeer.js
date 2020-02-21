import React, { Component } from 'react'
import RandomBeer from '../components/RandomBeer'
import { getRandomBeer } from '../services/beers'
import NavBar from '../components/NavBar'


class RandomBeerDisplay extends Component {
    state = {
        randomBeer: {}
    }

    async componentDidMount() {
        const randomBeer = await getRandomBeer()
        this.setState({
            randomBeer
        })
    }

    render() {
        return (
            <>
            <NavBar />
                <h1>Random Beer</h1>
                <RandomBeer 
                    image={this.state.randomBeer.image_url}
                    name={this.state.randomBeer.name}
                    tagline={this.state.randomBeer.tagline}
                    first_brewed={this.state.randomBeer.first_brewed}
                    attenuation_level={this.state.randomBeer.attenuation_level}
                    description={this.state.randomBeer.description}
                    contributed_by={this.state.randomBeer.contributed_by}
                />
            </>
        )
    }
}

export default RandomBeerDisplay