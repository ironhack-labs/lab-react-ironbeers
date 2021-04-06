import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const axios = require('axios').default;

export default class BeerList extends Component {
    state = {
        beers: [],
        fetch: false
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            console.log(response.data);
            this.setState({beers: response.data, fetch: true})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            this.state.fetch === false ? <p className="Loader"><i className="fas fa-beer"></i><br />Loading beer list...</p> : 
            <CardColumns className="List">
                {this.state.beers.map(beer => {
                    return (<Link to={{
                        pathname: `/beers/${beer._id}`,
                        }} key={beer._id}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xs={4} md={4}>
                                        <Card.Img variant="top" src={beer.image_url} />
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <Card.Title>
                                        <p className="title">{beer.name}</p>
                                        </Card.Title>
                                        <Card.Text>
                                        {beer.tagline}
                                        </Card.Text>
                                        <Card.Text>
                                        <small>Contributed_by: <strong>{(beer.contributed_by).replace(/ *<[^)]*> */g, "")}</strong></small>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Link>
                    )
                })}
            </CardColumns>
        )
    }
}

