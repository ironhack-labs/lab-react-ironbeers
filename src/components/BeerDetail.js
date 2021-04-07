import React, { Component } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const axios = require('axios').default;

export default class BeerDetail extends Component {
    
    state = {
        beers: [],
        fetch: false,
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
            this.setState({beers: response.data, fetch: true})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            this.state.fetch === false ? <p className="Loader"><i className="fas fa-beer"></i><br />Loading beer details...</p> : 
            <CardColumns className="Detail">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Card.Img variant="top" src={this.state.beers.image_url} />
                                </Row>
                                <Row>
                                    <Col xs={9} md={9} className="title">
                                        <Card.Title>
                                        <p className="detailTitle">{this.state.beers.name}</p>
                                        </Card.Title>
                                    </Col>
                                    <Col xs={3} md={3} className="title">
                                    <Card.Title>
                                        <p className="detailNumber">{this.state.beers.attenuation_level}</p>
                                        </Card.Title>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={9} md={9}>
                                        <Card.Text>
                                        <p className="detailTagline">{this.state.beers.tagline}</p>
                                        </Card.Text>
                                    </Col>
                                    <Col xs={3} md={3}>
                                    <Card.Text>
                                        <p className="detailDate">{this.state.beers.first_brewed}</p>
                                        </Card.Text>
                                    </Col>
                                    <Col xs={12} md={12}>
                                        <Card.Text>
                                        <em>"{this.state.beers.description}"</em>
                                        </Card.Text>
                                        <Card.Text>
                                        <small>Created by: <strong>{(this.state.beers.contributed_by).replace(/ *<[^)]*> */g, "")}</strong></small>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
            </CardColumns>
        )}
}
