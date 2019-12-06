import React from 'react'
import Service from '../services/Beers.service'

import { Container, Row, Button, Modal } from 'react-bootstrap'

import BeerCard from './Beer-card'

class BeerList extends React.Component {

    constructor() {
        super()
        this._service = new Service()
        this.state = {
            beers: [],
            // showModalWindow: false
        }
    }

    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this._service.getAllBeers()
            .then(allBeersFromDB => this.setState({ beers: allBeersFromDB.data }))
            .catch(err => console.log("Error", err))
    }

    // handleShow = () => this.setState({ showModalWindow: true })
    // handleClose = () => this.setState({ showModalWindow: false })

    render() {
        return (


            <section>

                <Container>


                    {/* <Button variant="dark" onClick={this.handleShow}>Nueva montaña rusa</Button> */}

                    <Row>
                        {this.state.beers.map(beer => <BeerCard key={beer._id} {...beer} />)}
                    </Row>
                </Container>


                {/* <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nueva montaña rusa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CoasterForm closeModalWindow={this.handleClose} updateCoastersList={this.updateCoastersList} />
                    </Modal.Body>
                </Modal> */}

            </section>

        )
    }
}


export default BeerList