import React, { Component } from 'react'
import axios from "axios"
import { ListGroup, Row, Col, Form } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default class Beers extends Component {

    state = {
        beers: [],
        filteredBeers: []
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                this.setState({
                    beers: response.data,
                    filteredBeers: response.data
                })
            })
    }

    handleSearch = (e) => {
        let search = e.target.value;

        let filtered = this.state.beers.filter((elem) => {
            return elem.name.toLowerCase().includes(search.toLowerCase());
        })

        this.setState({
            filteredBeers: filtered
        })
    }

    render() {
        const { filteredBeers } = this.state;

        return (
            <div>
            <Form.Control type="text" placeholder="Search beers" onChange={this.handleSearch}/>
                <ListGroup>
                    {
                        filteredBeers.map((elem) => {
                            return <Link to={"/beers/" + elem._id} key={elem._id}>
                                <ListGroup.Item className="beer-list-elem">
                                    <Row xs={8}>
                                        <Col xs={3}>
                                            <img src={elem.image_url} alt="" style={{ height: 100 }} />
                                        </Col>
                                        <Col>
                                            <h5>{elem.name}</h5>
                                            <p>{elem.tagline}</p>
                                            <p><b>Contributed by: </b>{elem.contributed_by}</p>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </Link>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}
