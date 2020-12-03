import React, { Component } from 'react'
import BeerService from './../../service/BeerService'
import Beercard from './Beercard'
import NewBeer from './NewBeer'
import {Container, Row, Button, Modal} from 'react-bootstrap'


class BeerList extends Component {
    constructor() {
        super()
        this.state = {
            beers: undefined,
            showModal: false

        }
        this.BeerService = new BeerService()
    }
    componentDidMount = () => this.refreshBeers()
    refreshBeers = () => {
        this.BeerService
            .getBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }
    handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
                <Container>
                    <h1>Beer List</h1>
                    <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Create new beer</Button>
                    <Row>
                        {
                            this.state.beers
                                ?
                                this.state.beers.map(elm => <Beercard key={elm._id} {...elm} />)
                                :
                                <p>Loading</p>
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
export default BeerList