import React, { Component } from 'react'
import BeerServices from '../../../services/BeerServices'
import { Link } from 'react-router-dom'
import HomeBar from "../../HomeBar/HomeBar"
import DetailCard from "../../DetailCard/DetailCard"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BeerDetailPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beer: {},
        }
        this.services = new BeerServices()
    }

    componentDidMount = () => this.showBeerDetail()

    showBeerDetail = () => {
        this.services.getBeerDetails(this.props.match.params.id)
            .then(beer => this.setState({ beer }))
            .catch(err => console.log("error al loadear las beers en get all coasters", err))
    }

    render() {
        return (
            <>
                <HomeBar />
                <DetailCard {...this.state.beer} />

            </>
        )
    }
}

export default BeerDetailPage