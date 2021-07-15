import React, { Component } from 'react'
import BeersService from '../../../services/beers.service'
import { Container, Row, Col } from 'react-bootstrap'

class BeerDetails extends Component {

    constructor() {
        super()
        this.state = {
            beer: undefined
        }
        this.beersService = new BeersService()
    }


    componentDidMount() {

        const { beer_id } = this.props.match.params

        this.beersService
            .getOneBeer(beer_id)
            .then(response => this.setState({ beer: response.data }))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>

                {!this.state.beer
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            <h1>{this.state.beer.name}</h1>
                        </Col>
                    </Row>
                }

            </Container>
        )
    }
}


// export default BeerDetails