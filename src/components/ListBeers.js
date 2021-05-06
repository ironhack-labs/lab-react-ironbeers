import React from 'react';
import { Component } from 'react'
import BeersService from './../../../service/BeersService'
import BeerCard from './BeerCard'
import { Container, Row } from 'react-bootstrap'


class ListBeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: undefined  
        }
        this.beersService = new BeersService()
    }
    componentDidMount() {
        this.loadBeers()
    }

    loadBeers() {
        this.beersService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('MAAAAAAL', err))
    }

    render() {

        const { beers } = this.state
        //console.log('---------', this.state)
        return (

            !beers ? <h1>CARGANDO CERVEZAS</h1> :
                <>
                    <Container> 
                        <Row>
                            {this.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                        </Row>
                    </Container>
                </>
        )
    }

}

export default ListBeers