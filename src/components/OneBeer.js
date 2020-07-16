import React, { Component } from 'react'
import AllBeersService from './service/allBeersService'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class OneBeer extends Component {
    constructor() {
        super()
        this.state = {
            oneBeer: undefined
        }
        this.AllBeersService = new AllBeersService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.beer_id

        this.AllBeersService
            .getOneBeer(id)
            .then(response => this.setState({ oneBeer: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            !this.state.oneBeer ? <h3>CARGANDO</h3> :

                <Container as="main">

                    <h1>{this.state.oneBeer.name}</h1>
                    <hr></hr>

                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <p><b>Detalles:</b> {this.state.oneBeer.tagline}</p>
                            <hr></hr>
                            <p><b>Descripción:</b> {this.state.oneBeer.description}</p>
                            <p><b>Contribuye:</b> {this.state.oneBeer.constributed_by}</p>
                            <hr></hr>
                            <Link className="btn btn-dark btn-md" to='/'>Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img style={{width: 200}}src={this.state.oneBeer.image_url} alt={this.state.oneBeer.name} />
                        </Col>
                    </Row>
                 
                </Container>
        )
    }
}

export default OneBeer