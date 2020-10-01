import React, { Component } from 'react'

import apiService from '../../../service/api.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Header from '../../layaout/Header'
import BeerCard from '../beerList/BeerCard'

class AllBeers extends Component {

    constructor() {
        super()
        this.state = {
            beers: [],
        }
        this.apiService = new apiService()
    }

    componentDidMount = () => this.loadBeers()

    loadBeers = () => {
        this.apiService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('Error:', err))
    }

    render() {

        return (
            <>
                <Container>
                    <main>
                        <Header />
                        <Row>
                            {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                        </Row>
                    </main>
                </Container>
                
            </>
        )
    }
}

export default AllBeers