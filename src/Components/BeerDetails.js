import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap'

export default class BeerDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.getSingleBeer();
    }

    getSingleBeer = () => {
        const { params } = this.props.match;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
            .then(responseFromApi => {
                const theBeer = responseFromApi.data;
                this.setState(theBeer);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        console.log(this.state)
        return (
            <Card key={this.state.name} className="detailCard">
                <img src={this.state.image_url} className="detailImg" alt={this.state.name} />
                <Card.Body className="detailBody">

                    <div className="title">
                        <Card.Title className="detailTitle mr-5">{this.state.name}</Card.Title>
                        <p className="level">{this.state.attenuation_level}</p>
                    </div>
                    <div className="title">
                        <Card.Text>{this.state.tagline}</Card.Text>
                        <p className="first">{this.state.first_brewed}</p>
                    </div>
                    <Card.Text >
                        <span className="description">{this.state.description}</span>
                    </Card.Text>
                    <Card.Text>
                        {this.state.contributed_by}
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    }
}
