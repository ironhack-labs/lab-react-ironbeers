import React, { Component } from 'react'
import beerService from '../services/beer-services'
import BeersCard from './BeersCards'
import { Container, Row, Button, Modal } from 'react-bootstrap'
import NewBeer from './NewBeer' 


class beerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
            showModal: false
        }
        this.beerService = new beerService()
    }

    componentDidMount = () => this.refreshBeers()

    refreshBeers = () => {
        this.beerService
            .getBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
                <Container>

                    <h1>Listado de cervezas</h1>

                    <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Crear nueva cerveza</Button>

                    <Row>
                        {
                            this.state.beers
                                ?
                                this.state.beers.map(elm => <BeersCard key={elm._id} {...elm} />)
                                :
                                <p>Cargando vista</p>
                        }
                    </Row>
                </Container>


                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <NewBeer closeModal={() => this.handleModal(false)} updateList={this.refreshBeers} />
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default beerList