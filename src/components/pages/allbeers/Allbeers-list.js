import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
 import AllbeersService from './../../../service/beers.service'
import AllbeersCard from './Allbeers-card'



class AllbeersList extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
        }
        this.AllbeersService = new AllbeersService()
    }

  
    componentDidMount = () => this.loadBeers()
    loadBeers = () => {
        this.AllbeersService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log('Error:', err))
    }


    render() {
       
        return (
            <>
                <Container>
                    <main>
                        <h1>Listado de cervezas</h1>
                        <Row>
                             {this.state.beers.map(elm => <AllbeersCard key={elm._id} {...elm} />)} 
                        </Row>
                    </main>
                </Container>
            </>
        )
    }
}

export default AllbeersList