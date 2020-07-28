import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'


export default class RandomBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomBeer: []
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                console.log(response.data)
                this.setState({
                    randomBeer: response.data
                })
            })
    }

    render() {
        console.log("this.state: ", this.state.randomBeer)
        return (
            <Card key={this.state.randomBeer.name} className="detailCard">
                <img src={this.state.randomBeer.image_url} className="detailImg" alt={this.state.randomBeer.name} />
                <Card.Body className="detailBody">

                    <div className="title">
                        <Card.Title className="detailTitle mr-5">{this.state.randomBeer.name}</Card.Title>
                        <p className="level">{this.state.randomBeer.attenuation_level}</p>
                    </div>
                    <div className="title">
                        <Card.Text>{this.state.randomBeer.tagline}</Card.Text>
                        <p className="first">{this.state.randomBeer.first_brewed}</p>
                    </div>
                    <Card.Text >
                        <span className="description">{this.state.randomBeer.description}</span>
                    </Card.Text>
                    <Card.Text>
                        {this.state.randomBeer.contributed_by}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
