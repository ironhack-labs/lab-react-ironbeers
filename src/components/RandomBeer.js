import React, { Component } from 'react'
import axios from 'axios'
import { Card } from "react-bootstrap"

export class RandomBeer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beer: {}
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                this.setState({
                    beer: response.data,
                    name: ""
                })
                console.log(this.state.beer)
            })
    }

    render() {
        return (
            <div>
                <Card style={{ width: '360px' }}>
                    <Card.Img className='beer-img' variant="top" src={this.state.beer.image_url} />
                    <Card.Body>
                        <Card.Title>
                            {this.state.beer.name}
                        </Card.Title>
                        <Card.Text>
                            {this.state.beer.tagline}
                            <hr/>
                            {this.state.beer.description}
                        </Card.Text>
                        <p>Created by:{this.state.beer.contributed_by}</p>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default RandomBeer
