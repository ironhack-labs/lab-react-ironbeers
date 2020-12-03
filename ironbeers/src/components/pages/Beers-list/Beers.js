import React, { Component } from 'react'
import BeerService from './../../../service/beers.service'
import { Container, Row, Button, Modal } from 'react-bootstrap'
import BeerCard from './Beercard'
import BeerForm from './../Beerform/Beerform'
import './Beer.css'


class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
            showModal: false
        }

        this.beerService = new BeerService()
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

                    <Button className="btn btn-block" onClick={() => this.handleModal(true)} variant="success" size="lg">Crear nueva cerveza</Button>

                    <Row>
                        {
                            this.state.beers
                                ?
                                this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)
                                :
                                <p>Cargando...</p>
                        }
                    </Row>
                </Container>

                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <BeerForm closeModal={() => this.handleModal(false)} updateList={this.refreshBeers} />
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default BeerList