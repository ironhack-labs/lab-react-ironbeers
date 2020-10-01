import React, { Component } from 'react'

import BeerService from '../../service/beers.service'
import BeerCard from './BeerCard'
import Header from '../header/Header'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
        }
        this.BeerService = new BeerService()
    }

    componentDidMount = () => this.loadBeers()

    loadBeers = () => {

        this.BeerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('Error!!', err))
    }

    render() {

        return (

            <>
                <Header />
                
                <Container>
                    
                    <h2>Beer List</h2>

                    <Row>

                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm}/>)}

                    </Row>

                </Container>
                
            </>

        )
    }
}

export default BeerList