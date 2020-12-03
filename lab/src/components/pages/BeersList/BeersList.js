import React, { Component } from 'react'
import beersService from '../../../service/beers.service'
import BeerCard from './BeerCard'

import { Container, Row, Button, Modal } from 'react-bootstrap'

class BeersList extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
        }
         this.beersService = new beersService()
    }
    componentDidMount = () => this.refreshBeers()

    refreshBeers = () => {
        this.beersService
            .getAllBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                <Container>

                    <h1>All Beers</h1>


                    <Row>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    </Row>
                </Container>


            </>
        )
    }
}

export default BeersList