import './BeersListPage.css'
import { Row } from 'react-bootstrap'
import React, { Component } from 'react'
import BeersService from './../../../services/beers.services'
import BeerCard from './BeerCard'

class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
        }
        this.beersService = new BeersService()
    }


    loadBeers = () => {
        this.beersService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.loadBeers()
    }


    render() {

        return (

            !this.state.beers
                ?
                <h3>LOADING...</h3>
                :
                (<>

                    <Row>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    </Row>

                </>
                )
        )
    }
}

export default BeersList