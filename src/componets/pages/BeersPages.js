import React, { Component } from 'react'
import BeersService from '../../services/beers.service'

import { Row } from 'react-bootstrap'
import BeerCard from './BeerCard'



class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.BeersService = new BeersService()
    }

    loadBeers = () => {
        console.log("prueba load")
        this.BeersService
            .getBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))

    }

    componentDidMount = () => {
        console.log("prueba dimount")
        this.loadBeers()
    }

    render() {



        return (


            !this.state.beers
                ?
                <h3>CARGANDO...</h3>
                :
                (<>
                    <Row>
                        {this.state.beers.map(elm => <BeerCard {...elm} />)}
                    </Row>
                </>
                )
        )
    }
}

export default BeersList
