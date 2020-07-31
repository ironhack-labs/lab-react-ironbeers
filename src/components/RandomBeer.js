import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: {},
            beerId:""
        };
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random' + this.props.match.params.id)  //TypeError: Cannot read property 'params' of undefined

            .then(response => {
                this.setState({
                    beer: response.data,
                    beerId:this.props.match.params.id
                })
            })
    }
    render() {
        return (
            <div>
                <header>
                    <Link to={"/"}><img alt="header" src='./header.png' ></img></Link>
                </header>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.beer.image_url} />
                    <Card.Body>
                        <Card.Title> {this.state.beer.name}</Card.Title>
                        <Card.Text>
                            {this.state.beer.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{this.state.beer.attenuation_level}</ListGroupItem>
                        <ListGroupItem>{this.state.beer.first_brewed}</ListGroupItem>
                        <ListGroupItem>Contributed by:{this.state.beer.contributed_by}</ListGroupItem>
                        <ListGroupItem>Attenuation level:{this.state.beer.attenuation_level}</ListGroupItem>

                    </ListGroup>

                </Card>

            </div>
        )
    }
}
