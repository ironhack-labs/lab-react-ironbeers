import React, { Component } from 'react'
import BeerService from '../../../service/BeerService'

import BeerCard from './Beer-card'

import './Beer-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BeerList extends Component {
    constructor() {
        super()
        this.state = {
            beers: undefined,
        }
        this.BeerService = new BeerService()
    }
    componentDidMount = () => this.beerList()

    beerList = () => {
        this.BeerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Container as="main" className="beers-page">

                    <h1>Listado de birras</h1>

                    {
                        !this.state.beers ? <h3>¿Te esperas?</h3> :

                            <Row>
                                {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                            </Row>

                    }


                </Container>
            </>
        )
    }

}

export default BeerList