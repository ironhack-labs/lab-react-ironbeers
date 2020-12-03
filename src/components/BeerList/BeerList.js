import React, { Component } from 'react'
import BeerService from './../../service/beers.service'
import BeerCard from './BeerCard'
import BeerForm from './../BeerForm/BeerForm'

import { Container, Row, Button, Modal } from 'react-bootstrap'

class BeerList extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
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
                <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Create new Beer</Button>


                <Container>
                    <Row>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
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