import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import BeersService from './../service/beers.service'
import BeersCard from './BeersCard'
import BeersForm from './BeerForm'
import { Container, Row, Button, Modal } from 'react-bootstrap'



class ListBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }

        this.beersService = new BeersService()
    }

    componentDidMount = () => this.refreshBeers()

    refreshBeers = () => {
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
                        
                    <h1>Listado de cervezas</h1>

                    <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Create new beer</Button>
                        
                       <Row>

                        {this.state.beers.map(elm=><BeersCard key={elm._id} {...elm} />)}
                        </Row> 

                </Container>
                
                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <BeersForm closeModal={() => this.handleModal(false)} updateList={this.refreshBeers} />
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}



export default ListBeers



      