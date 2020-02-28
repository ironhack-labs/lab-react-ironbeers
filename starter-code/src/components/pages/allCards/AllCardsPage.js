import React, { Component } from 'react'

import BeerServices from '../../../services/BeerServices'

import ListCard from "../../ListCard/ListCard"

import { Link } from 'react-router-dom'


import HomeBar from "../../HomeBar/HomeBar"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class AllCardsPage extends Component {

    constructor() {
        super()
        this.state = {
            beersList: [],
        }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.showAllBeers()

    showAllBeers = () => {
        this.services.getAllBeers()
            .then(allBeers => this.setState({ beersList: allBeers }))
            .catch(err => console.log("error al loadear las beers en get all coasters", err))
    }

    render() {
        return (
            <>
                <HomeBar />
                {this.state.beersList.map((elm, idx) => <Link to={`/beer/${elm._id}`}> <ListCard key={idx} {...elm} /></Link>)}
            </>
        )
    }
}

export default AllCardsPage