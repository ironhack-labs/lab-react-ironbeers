import React, { Component } from 'react'

import BeerService from '../service/BeerService'

import Container from 'react-bootstrap/Container'


class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {
            beerDetails: []
        }
        this.BeerService = new BeerService()
    }

    componentDidMount = () => {

        const id = this.props.match.params._id

        this.BeerService
            .getOneBeer(id)
            .then(response => this.setState({ beerDetails: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            !this.state.beerDetails ? <h3>CARGANDO</h3> :

                <Container as="main">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image_url} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{tagline}</Card.Subtitle>
                            <Card.Text>{first_brewed}</Card.Text>
                            <Card.Text>{attenuation_level}</Card.Text>
                            <Card.Text>{description}</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">{contributed_by}</Card.Subtitle>

                        </Card.Body>
                    </Card>

                </Container>
        )
    }
}

export default BeerDetails