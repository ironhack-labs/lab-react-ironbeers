import React, { Component } from 'react'
import BeerService from '../../../service/BeerService'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import { Link } from 'react-router-dom'

class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {
            beerDetails: undefined
        }
        this.BeerService = new BeerService()
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        this.BeerService
            .getOneBeer(id)
            .then(response => this.setState({ beerDetails: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        const id = this.props.match.params.beer_id
        console.log(id)
        return 
                // <h1>{this.state.beerDetails.name}</h1>

    }
}

export default BeerDetails