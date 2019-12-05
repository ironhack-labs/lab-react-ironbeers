import React from 'react'
import Service from '../../service/Beer.service'
import 'bootstrap/dist/css/bootstrap.min.css'

import BeerCard from '../beers/BeerCard';
import BeerForm from '../beers/BeerForm'




import { Container, Row, Button, Modal, Navbar, Form, Nav, FormControl } from 'react-bootstrap'


class BeerList extends React.Component {

    constructor() {
        super()
        this._service = new Service()
        this.state = {
            beers: []
        }
    }

    componentDidMount = () => this.updateBeersList()

    updateBeersList = () => {
        this._service.getAllBeers()
            .then(allBeersFromDB => this.setState({ beers: allBeersFromDB.data }))
            .catch(err => console.log("Error", err))
    }

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })

    render() {
        return (


            <section>

                <Container>
                <Button variant="dark" onClick={this.handleShow}>Nueva cervecita</Button>

                    <Row>
                        {this.state.beers.map(beer => <BeerCard key={beer._id} {...beer} />)}
                    </Row>
                </Container>

                <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nueva montaña rusa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BeerForm closeModalWindow={this.handleClose} updateBeersList={this.updateBeersList} />
                    </Modal.Body>
                </Modal>

            </section>

        )
    }
}


export default BeerList