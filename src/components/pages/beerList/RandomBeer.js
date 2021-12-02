import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import BeerService from "../../../services/beer.service";
import Beers from "./Beers";



class RandomBeer extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        }

        this.service = new BeerService()
    }

    componentDidMount() {
        this.refreshBeers()
    }

    refreshBeers = () => {
        this.service.getRandomBeer()
            .then(response => {
                const beers = response.data

                this.setState({ beers: beers })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>

                <Beers refreshBeers={this.refreshBeers} beers={this.state.beers} />
            </Container>
        )
    }
}

export default RandomBeer