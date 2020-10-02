import React, { Component } from 'react'
import BeersService from '../../service/BeersService'
import './Beer-Card.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import BeerCard from './Beer-Card'

class AllBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beerService = new BeersService()
    }

    componentDidMount = () => this.beerList()

    beerList = () => {
        this.beerService
            .getAllBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <h1>Beers</h1>
                {!this.state.beers ? <h3>CARGANDO...</h3> : <Row>{this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}</Row>}
            </Container>
        )
    }
}

export default AllBeers