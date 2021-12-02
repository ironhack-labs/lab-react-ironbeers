import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
// import NewCoasterForm from '../../NewCoasterForm' <-- Formulario crear 
import BeerService from '../../../services/beer.service'
import BeerCard from './BeerCard'
import MyNavbar from '../../layout/MyNavbar'
import RandomBeer from './RandomBeer'


class Beers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    // openModal = () => {
    //     this.setState({
    //         showModal: true
    //     })
    // }

    // closeModal = () => {
    //     this.setState({
    //         showModal: false
    //     })
    // }

    render() {



        return (
            // <div>
            //     <Button onClick={this.openModal}>Crea una nueva montaña rusa</Button>

            //     <Modal
            //         show={this.state.showModal}
            //         backdrop="static"
            //         onHide={this.closeModal}
            //     >
            //         <Modal.Header closeButton>
            //             <Modal.Title>Nueva Coaster</Modal.Title>
            //         </Modal.Header>
            //         <Modal.Body>
            //             <NewCoasterForm refreshCoasters={this.props.refreshCoasters} closeModal={this.closeModal} />
            //         </Modal.Body>

            //     </Modal>
            <div>
                <MyNavbar />
                <h1>Beer List</h1>
                <Row>
                    {this.props.beers.map(elm => {

                        return (
                            
                            

                            <Col key={elm._id}>
                                <BeerCard  {...elm} />
                            </Col>
                            
                        )
                    })
                    }
                </Row>
            </div>
        )
    }
}

export default Beers