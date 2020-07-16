
import React, { Component } from 'react'
import BeerService from '../service/BeerService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Navigation from './../NavBar/NavBar'
import BeerCard from './../BeerCard/BeerCard'




class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.BeerService = new BeerService()

    }

    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this.BeerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }



    render() {

        return (

            <>
                <Container as="main">

                    <Navigation />

                    {
                        !this.state.beers ? <h3>CARGANDO</h3> :

                            <Row>
                                {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                            </Row>

                    }
                </Container>


            </>

        )
    }
}

export default BeerList