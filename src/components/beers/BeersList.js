import React, { Component } from 'react'
import BeersServices from '../../services/index'

import Navbar from './../ui/navbar'
import BeersCard from './BeersCard'


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'


class BeersList extends Component {
    constructor() {
        super()
        this.state = {
            beers: undefined
        }

        this.beersService = new BeersServices()
    }

    componentDidMount = () => {
        this.beersService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        //console.log(this.state.beers)
        return (
            <>
                <Navbar />
                <Row style={{ height: '100vh' }}>
                    {!this.state.beers ? (<Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Spinner animation="border" />
                    </Col>) :

                        this.state.beers.map(elm => <BeersCard key={elm._id} {...elm} />)

                    }

                </Row>

            </>
        )
    }
}

export default BeersList