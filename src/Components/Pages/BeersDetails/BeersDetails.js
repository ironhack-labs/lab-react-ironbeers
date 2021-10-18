import React, { Component } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BeerService from '../../../Services/Beers.service'
import './BeerDetails.css'

export default class BeersDetails extends Component {
    constructor() {
        super()
        this.state = {
            beer: null
        }
        this.BeerService = new BeerService()
    }


    componentDidMount() {
        const { id } = this.props.match.params;

        this.BeerService.getOneBeer(id)
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    beer: res.data
                })
            })
            .catch(err => console.error(err))

    }

    render() {
        return (
            <div>
                {
                    this.state.beer ?
                        <Container>

                            <Row>
                                <Col>
                                    <center>
                                        <img className="beer-id-logo" src={this.state.beer.image_url} alt={this.state.beer.name} />
                                    </center>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col xs={8}>
                                            <h1>{this.state.beer.name}</h1>
                                        </Col>
                                        <Col xs={4}>
                                            <h2 className='attenuation-level'>{this.state.beer.attenuation_level}</h2>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={8}>
                                            <p className='tagline'>{this.state.beer.tagline}</p>
                                        </Col>
                                        <Col xs={4}>
                                            <p className='brewed'>{this.state.beer.first_brewed}</p>
                                        </Col>
                                    </Row>
                                    <p>{this.state.beer.description}</p>
                                    <p className='contributed'>{this.state.beer.contributed_by}</p>

                                    <Link exact to='/beers' className='link-back'><Badge pill bg="primary" className='button-back'>Volver</Badge></Link>
                                </Col>
                            </Row>
                        </Container>
                        :
                        <h3>Cargando...</h3>
                }
            </div>

        )
    }
}
