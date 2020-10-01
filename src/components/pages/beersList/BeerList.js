import React, { Component } from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// Custom Components
import Navigation from '../../layout/navbar/Navbar'
import BeerCard from './BeerCard'

// Custom Services
import beerService from '../../../service/beers.service'

export default class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beerService = new beerService()
    }

    componentDidMount = () => this.loadBeers()

    loadBeers = () => {
        this.beerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('Error getAllBeers() ', err))
    }

    render() {

        return (

            <>
                <Navigation />
                <Container>
                    <Row>
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm}/>)}
                    </Row>
                </Container>
            </>
        )
    
    }

}
