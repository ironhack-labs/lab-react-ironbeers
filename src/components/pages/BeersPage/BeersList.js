import axios from 'axios'
import React from 'react'
import { Component } from 'react'
import { Row } from 'react-bootstrap'
import BeerCard from './BeerCard'
import Header from './../../layout/Header'



class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
        }
    }

    componentDidMount() {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((beers) => this.setState({ beers: beers.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            (<>
                <Header />
                {this.state.beers.map(elm => <BeerCard {...elm} />)}
            </>
            )
        )
    }
}

export default BeersList




