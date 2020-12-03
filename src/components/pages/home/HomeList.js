import React, { Component } from 'react'
import BeerService from '../../service/beer.service'

import HomeCard from './HomeCard'

// import BeerService from '../../service/beer.service'

import { Container, Row, Button, Modal } from 'react-bootstrap'
// import Home from './Home'


class HomeList extends Component {

    constructor() {
        super()
        this.state = {
            beers: undefined,
        }
        this.beerService = new BeerService()
    }

    componentDidMount = () => this.refreshBeer()

    refreshBeer = () => {
        this.beerService
            .getBeer()
            .then(res => this.setState({ beers: res.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Container>
                  
                    <Row>
                        {this.state.beers.map(elm => <HomeCard key={elm.id} {...elm} />)}
                    </Row>
                </Container>
            </>
        )
    }
}

export default HomeList