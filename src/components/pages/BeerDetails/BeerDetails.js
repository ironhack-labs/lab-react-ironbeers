import { Component } from 'react'
import BeersService from './../../../services/beers.services'

import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navigation from '../../layout/Navigation/Navigation'

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
                <Navigation />
                {!this.state.beer
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row >


                        <Col md={12} className="justify-content-center">
                            <img src={this.state.beer.image_url} alt={this.state.beer.name} style={{ height: '300px' }} />
                        </Col>
                        <Col md={12}>
                            <Col ><h1>{this.state.beer.name}</h1><p>{this.state.beer.attenuation_level}</p>
                                <p>{this.state.beer.first_brewed}</p> </Col>

                            <h6 style={{ color: "silver" }}>{this.state.beer.tagline} </h6>
                            <p>{this.state.beer.description}</p>

                            <p>{this.state.beer.contributed_by}</p>





                            <hr></hr>

                            <Link to="/beers" className="btn btn-dark">Volver al listado</Link>

                        </Col>
                    </Row>
                }

            </Container>
        )
    }
}


export default BeerDetails