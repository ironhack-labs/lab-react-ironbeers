import Header from '../header/Header'
import BeerCard from '../beercard/BeerCard'
import BeerService from './../../service/beers.service'
import React, { Component } from 'react'
import { Container, Row, Button, Modal } from 'react-bootstrap'
import BeerForm from '../beerform/BeerForm'
import { Link } from 'react-router-dom'

class BeersList extends Component {

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
                <Header />
                <Container>
                    <h1>Beers List</h1>
                    <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Create new Beer</Button>
                    <Link to="/random-beer" className="btn btn-sm btn-dark mx-2">Random Beer</Link>
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

export default BeersList