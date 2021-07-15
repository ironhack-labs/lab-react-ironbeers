import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'
import BeerDetails from './BeerDetails'
import BeerInfo from './BeerInfo'

class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: undefined
        }
    }

    componentDidMount() {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => {
                this.setState({ beer: response.data })
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <Container>
                <Row>
                    {
                        !this.state.beer
                            ?
                            <p>Loading...</p>
                            :
                            <BeerInfo {...this.state.beer} />
                    }
                </Row>
            </Container>
        )
    }

}

export default RandomBeer