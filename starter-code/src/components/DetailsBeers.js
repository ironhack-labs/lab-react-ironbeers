import React, { Component } from 'react'
import Service from '../service/beers.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class BeerDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
        this._service = new Service()
    }


    componentDidMount = () => {
        const beerId = this.props.match.params.id
        this._service.getOneBeer(beerId)
            .then(theBeer => this.setState({ beer: theBeer.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container className="beer-details">
                <section>
                    <Row>
                        <Col md={6}>
                            <h1>Details of {this.state.beer.name}</h1>
                            <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                            <p><strong>Tagline:</strong> {this.state.beer.tagline}</p>
                            <p>{this.state.beer.first_brewed}</p>
                            <p>{this.state.beer.attenuation_level}</p>
                            <p>{this.state.beer.description}</p>
                            <p>{this.state.beer.contributed_by}</p>


                            <Link to="/" className="btn btn-dark">Volver</Link>
                        </Col>
                        {/* <Col md={{ span: 4, offset: 2 }}>
                            <img src={this.state.coaster.imageUrl} alt={this.state.coaster.title}></img>
                        </Col> */}
                    </Row>
                </section>
            </Container>
        )
    }

}


export default BeerDetail