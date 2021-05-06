import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import './BeerDetail.css'
import BeerInfo from './BeerInfo';


class BeerDetail extends Component {
    constructor() {
        super()
        this.state = {
            beer: undefined

        }
    }

    componentDidMount() {
        const { beer_id } = this.props.match.params
        console.log(beer_id)

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beer_id}`)
            .then(response => {
                console.log(response)
                this.setState({ beer: response.data })
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <Container>
                < Row>
                    {!this.state.beer ? <h2>Cargando...</h2> :
                        <BeerInfo {...this.state.beer} />
                    }
                </Row>
            </Container >
        )
    }

}

export default BeerDetail