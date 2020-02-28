import React, { Component } from 'react'

import BeersServices from '../../services/beers.services'

import BeerListCard from './BeerListCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
            showmodal: false
        }
        this.services = new BeersServices()
    }

    componentDidMount = () => this.getAllBeers()

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(allBeers => {
                this.setState({ beers: allBeers })
            })
            .catch(err => console.log(err))

    }
    closeModal = () => this.setState({ showmodal: false })
    openModal = () => this.setState({ showmodal: true })

    render() {

        return (
            <Container>

                {this.state.beers.length ? (
                    <Row>
                        {this.state.beers.map(elm => <BeerListCard key={elm._id} {...elm} />)}
                    </Row>
                )
                    :
                    <p>CARGANDO...</p>

                }
            </Container>
        )
    }
}

export default BeersList