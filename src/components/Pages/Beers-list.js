import React from 'react'
import { Component } from 'react'
import BeerService from './../../service/beers.service'
import BeerCard from './Beer-card'

import { Row} from 'react-bootstrap'
// import { Modal, Button } from 'react-bootstrap'

// import NewCoaster from '../NewCoaster/NewCoaster'



class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
            // showModal dos puntos false
        }
        this.beersService = new BeerService()
    }
   

    componentDidMount() {
        this.loadBeers()
    }

    loadBeers() {
        this.beersService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('ERROR, YA VEREMOS QUE HASCEMOS', err))
    }
    
    render() {

        const { beers } = this.state

        return (

            !beers
                ?
                <h1>CARGANDO</h1>
                :
                <>
                    {/* <Button onClick={() => this.setState({ showModal: true })} variant="dark" size="sm" style={{ marginBottom: '20px' }}>Crear</Button> */}

                    <Row>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    </Row>

                    {/* <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                        <Modal.Header> <Modal.Title>Modal heading</Modal.Title> </Modal.Header>
                        <Modal.Body>
                            <NewCoaster closeModal={() => this.setState({ showModal: false })} refreshCoasters={() => this.loadCoasters()} />
                        </Modal.Body>
                    </Modal> */}
                </>

        )
    }
}

export default BeersList