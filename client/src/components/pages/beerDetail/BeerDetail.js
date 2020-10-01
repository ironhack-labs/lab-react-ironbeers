import React, { Component } from 'react'
import BeerDetailCard from './BeerDetailCard'


class BeerDetail extends Component {
    constructor() {
        super()
        this.state = {
            beer: []
        }
    }

    componentDidMount() {
        const beerId = this.props.match.params.id

        const baseUrl = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => this.setState({ beer: data },))
    }

    render() {
        console.log(this.state.beer)
        return (
            <>
                <BeerDetailCard data={this.state.beer}></BeerDetailCard>
            </>
        )
    }
}

export default BeerDetail