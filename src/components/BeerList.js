import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const axios = require('axios').default;

export default class BeerList extends Component {
    state = {
        beers: [],
        fetch: false,
        search: ''
    }

    componentDidMount() {
            axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                this.setState({beers: response.data, fetch: true})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleInput = (e) => {
        this.setState({search: e.target.value})
        this.search()
    }

    search() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.search}`)
        .then((response) => {
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
                <InputGroup className="m-2 px-4 pt-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="search"><i className="fas fa-search"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Find beers"
                    aria-label="search"
                    aria-describedby="search"
                    onChange={this.handleInput}
                    />
                </InputGroup>
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
                                        <small>Created by: <strong>{(beer.contributed_by).replace(/ *<[^)]*> */g, "")}</strong></small>
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

