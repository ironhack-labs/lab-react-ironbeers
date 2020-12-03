import { Container, Row, Button, Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import BeersService from './../../service/beers.service'
import BeerCard from '../beer-card/beer-card'
import BeerForm from '../beer-form/BeerForm'

export default class BeerList extends Component {
    constructor() {
        super()

        this.state = {
            beers: undefined,
            showModal: false
        }
        this.beersService = new BeersService()
    }

    componentDidMount = () => this.refreshList()

    refreshList() {
        this.beersService
            .getBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))

    }

    handleModal = visible => this.setState({ showModal: visible })


    render() {

        return (
            <>
                <Container>
                    <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Add New Beer</Button>
                    <Row>

                        {
                            this.state.beers ?
                                this.state.beers.map(elm => <BeerCard key={elm._id} name={elm.name} tagline={elm.tagline} img={elm.image_url} id={elm._id} />)
                                :
                                null}

                    </Row>


                </Container>

                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <BeerForm closeModal={() => this.handleModal(false)} updateList={this.refreshList} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}