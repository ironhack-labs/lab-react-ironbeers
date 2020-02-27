import React, { Component } from 'react'
import BeersServices from '../services/beers.services'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import BeerCard from './BeerCard'
import NavHome from './NavBar'

class BeersList extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
            showmodal: false
        }
        this.services = new BeersServices()
    }

    componentDidMount = () => this.getAllBeers()

    getAllBeers = () => {
        this.services.getAllBeers()
            .then(allBeers => this.setState({ beers: allBeers }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>
                <NavHome></NavHome>
                <h1>Beers List</h1>
                     <Row>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    </Row>

            </Container>
        )
    }
}

export default BeersList
