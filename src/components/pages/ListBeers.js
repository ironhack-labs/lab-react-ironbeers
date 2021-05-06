import { Component } from 'react'
import BeersService  from './../../service/beers.service'
import React from 'react'
import BeerCard from './BeerCard'
import { Row } from 'react-bootstrap'
import './ListBeers.css'

class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
            
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
            .catch(err => console.log('ERROR', err))
    }

    render() {

        const { beers } = this.state

        return (

            !beers
                ?
                <h1>CARGANDO</h1>
                :
                <>

                    <Row>
                        {beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    </Row>
                </>

        )
    }
}

export default BeerList