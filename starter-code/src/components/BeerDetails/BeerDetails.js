import React, { Component } from 'react'

import BeersServices from '../../services/beers.services'

import BeerDetailsCard from './BeerDetailsCard'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beers: {}
        }
        this.services = new BeersServices()
    }


    componentDidMount = () => this.getBeerDetails()

    getBeerDetails = () => {
        this.services.getBeerDetails(this.props.match.params.id)
            .then(theBeer => {
                this.setState({ beers: theBeer })
            })
            .catch(err => console.log(err))

    }
    render() {
        console.log()

        return (
            <Container>
                <BeerDetailsCard {...this.state.beers} />
                <Button as="div" variant="dark" size="sm">
                    <Link to="/beers">Volver</Link>
                </Button>
            </Container>
        )
    }
}

export default BeerDetails