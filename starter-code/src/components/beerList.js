import React, { Component } from 'react'

import ListServices from './services/beer.services'

import BeerCards from './beerCards'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class BeerList extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.services = new ListServices()
    }

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(allBeers => this.setState({ beers: allBeers }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.getAllBeers()

    render() {
        console.log(this.state.beers)
        return (
            <Container>
                < h1 > Este es la lista de cervezas</h1 >
                <>
                    {this.state.beers.length ? (
                        <Row>
                            {this.state.beers.map(elm => <BeerCards key={elm._id} {...elm} />)}
                        </Row>
                    )
                        :
                        <p>Cargando... Espera un momento</p>
                    }
                </>

            </Container >
        )
    }

}

export default BeerList