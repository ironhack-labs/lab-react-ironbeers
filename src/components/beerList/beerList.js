import React, { Component } from 'react'
import BeerService from './../../service/beer.service'

import BeerCard from './beerCard'


import { Container, Row} from 'react-bootstrap'



class BeerList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
        }
        this.BeerService = new BeerService()
    }

    refreshCoasters = () => {
        this.beerService
            .getBeers()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Container>

                    <h1>Listado de Cervezas</h1>

                    <Row>
                        {
                            this.state.beers
                                ?
                                this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)
                                :
                                <h1>cargando...</h1>
                        }
                    </Row>
                </Container>
            </>
        )
    }
}

export default BeerList