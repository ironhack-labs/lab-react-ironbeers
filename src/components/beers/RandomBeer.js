import React, { Component } from 'react'

import BeersServices from '../../services/index'

import Navbar from './../ui/navbar'
import Card from './OneBeerCard'


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'


class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            random: undefined
        }
        this.beerServices = new BeersServices()
    }

    componentDidMount = () => {
        this.beerServices
            .getRandomBeer()
            .then(response => this.setState({ random: response.data }))
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.state)
        return (
            <>
                <Navbar />

                <Row style={{ height: '100vh' }}>
                    {!this.state.random ? (<Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Spinner animation="border" />
                    </Col>) :
                        (
                            <Col>
                                <Card {...this.state.beerDetails} />
                            </Col>)
                    }
                </Row>
            </>
        )
    }
}

export default RandomBeer