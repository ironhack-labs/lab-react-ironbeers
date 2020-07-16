import React, { Component } from 'react'
import BeerService from '../../../service/BeerService'

import BeerCard from './Beer-card'
import BeerForm from './Beer-form'

import './Beer-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class BeerList extends Component {
    constructor() {
        super()
        this.state = {
            beers: undefined,
        }
        this.BeerService = new BeerService()
    }
    componentDidMount = () => this.beerList()

    beerList = () => {
        this.BeerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this.BeerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showModal: status })

    handleBeerSubmit = () => {
        this.handleModal(false)
        this.updateBeerList()
    }

    render() {

        return (
            <>
                <Container as="main" className="beers-page">

                    <h1>Listado de birras</h1>
                    <Button onClick={() => this.handleModal(true)} variant="dark" size="sm" style={{ marginBottom: '20px' }}>new beer mate</Button>
                    {
                        !this.state.beers ? <h3>¿Te esperas?</h3> :

                            <Row>
                                {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                            </Row>

                    }
                </Container>
                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <BeerForm handleBeerSubmit={this.handleBeerSubmit} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}

export default BeerList