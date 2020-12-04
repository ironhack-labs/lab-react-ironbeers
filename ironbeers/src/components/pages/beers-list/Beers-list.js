import React, { Component } from 'react'
import Search from './search'
import BeerService from '../../../service/beers.service'
import BeerCard from './Beer-card'
import { Container, Row } from 'react-bootstrap'


class Beers extends Component {
    constructor() {
        super()
        this.state = {
            beers: [],
            beersFromApi: []
        }
        this.service = new BeerService()
    }

    componentDidMount = () => this.refreshBeers()

    refreshBeers = () => {
        console.log(this.props)
        this.service
            .getBeers()
            .then(res => this.setState({ beers: res.data, beersFromApi: res.data }))
            .catch(err => new Error(err))
    }

    filterBeers = search => {
        this.service
            .filterBeers(search)
            .then(res => this.setState({ beers: res.data }))
            .catch(err => new Error(err))
    }

    render() {

        return (
            <Container>
                <Search filter={this.filterBeers} />
                <Row>
                    {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                </Row>
            </Container>
        )
    }
}

export default Beers
