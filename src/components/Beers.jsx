import React, { Component } from 'react'
import BeerCard from './BeerCard'

export class Beers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beersFromAPI: []
        }
    }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then((data) => {
                this.setState({ beersFromAPI: data })
                console.log(this.state.beersFromAPI)
            })
            .catch(console.log)
    }
    render() {
        const beersRender = this.state.beersFromAPI.map(beer =>
            <BeerCard
                image={beer.image_url}
                name={beer.name}
                key={beer._id}
                contributed_by={beer.contributed_by}
                tagline={beer.tagline}
            />
        )
        return (
            <div>
                {beersRender}
            </div>
        )
    }
}

export default Beers
