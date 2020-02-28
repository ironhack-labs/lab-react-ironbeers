import React, { Component } from 'react'
import BeerServices from '../../../services/BeerServices'
import { Link } from 'react-router-dom'
import HomeBar from "../../HomeBar/HomeBar"
import DetailCard from "../../DetailCard/DetailCard"


class RandomBeerPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beer: {},
        }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.showRandomBeer()

    showRandomBeer = () => {
        this.services.getRandomBeer()
            .then(beer => this.setState({ beer }))
            .catch(err => console.log("error al loadear las beers en get all coasters", err))
    }

    render() {
        return (
            <>
                <HomeBar />
                <DetailCard {...this.state.beer} />

            </>
        )
    }
}

export default RandomBeerPage