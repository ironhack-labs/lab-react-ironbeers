import React, { Component } from 'react'
import BeerService from './../../service/beer-service'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'



class Details extends Component {
    constructor() {
        super()
        this.state = {
            details: ""
        }

        this.BeerService = new BeerService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.beerID
        this.BeerService
            .getOneBeer(id)
            .then(response => this.setState({ details: response.data }))
    }

    render() {

        return (
            !this.state.details ? <h3>CARGANDO</h3> :

                <Container as="main">

                    <h1>{this.state.details.name}</h1>

                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <p><b></b> {this.state.details.description}</p>
                            <hr></hr>
                            <p><b>First:</b> {this.state.details.first_brewed}</p>
                            <p><b>Atenuation</b> {this.state.details.attenuation_level}</p>
                            <hr></hr>
                            <Link className="btn btn-dark btn-md" to='/beers'>Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img src={this.state.details.image_url} alt={this.state.details.name} />
                        </Col>
                    </Row>

                </Container>


        )
    }
}

export default Details