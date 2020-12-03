import React, { Component } from 'react'
import BeersServices from './../../../service/beer.service'
import BeerCard from './BeerCard'
import NavBar from '../Navbar/Navbar'
import './Beer-list.css'
import { Container, Row, Button, Modal } from 'react-bootstrap'

import './Beer-list.css'

class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []

        }

        this.beerServices = new BeersServices()

    }

            componentDidMount = () => this.refreshBeers()
    
            refreshBeers = () => {
                this.beerServices
                        .getBeer()
                        .then(res => this.setState({ beers: res.data }))
                        .catch(err => console.log(err))
            }
    
    render() {
        return (

            <>
                <NavBar />
                <Container>

                    <h1>Listado de cervezas</h1>

                    <Row>
                        {
            
                            this.state.beers.map(elm =>
                                <BeerCard
                                    key={elm._id}
                                    {...elm} 
                                
                                />)
                                
                        }
                    </Row>
                </Container>


            </>
        )
    }
}

export default BeerList

