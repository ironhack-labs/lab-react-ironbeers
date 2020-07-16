import React, { Component } from 'react'
import BeerService from '../../service/BeerService'
import BeerCard from './BeerCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []

        }
        this.BeerService = new BeerService
    }
   
    componentDidMount = () => this.updateBeerList()
    updateBeerList = () => {
        this.BeerService
            .getAllBeers()
            .then(response => this.setEstate({ beers: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Container>
                    <Row>
                        {this.state.beers.map((elm, idx) => <BeerCard {...elm} key={elm._id} />)}
                    </Row>
                </Container>
            </>
        )
    }
}

export default BeerList