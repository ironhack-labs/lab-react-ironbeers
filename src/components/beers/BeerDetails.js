import React, { Component } from 'react'

import BeersServices from '../../services/index'

import Navbar from './../ui/navbar'
import Card from './OneBeerCard'


import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'


class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {
            beerDetails: undefined
        }
        this.beerServices = new BeersServices()
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        console.log(id)
        this.beerServices
            .getBeerDetail(id)
            .then(response => this.setState({ beerDetails: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.beerDetails)
        return (
            <>
                <Navbar />

                <Row style={{ height: '100vh' }}>
                    {!this.state.beerDetails ? (<Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Spinner animation="border" />
                    </Col>) :
                        (
                            <Col>
                                <Card {...this.state.beerDetails}/>
                            </Col>)
                    }
                </Row>
            </>
        )
    }
}

export default BeerDetails