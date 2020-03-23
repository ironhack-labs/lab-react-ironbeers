import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import axios from 'axios';

class RandomBeer extends Component {

  constructor() {
    super()
    this.state = {
      randomBeer: []
    }
  }

  componentDidMount() {

    axios.get("https://ih-beers-api2.herokuapp.com/beers/")
      .then(response => {
        this.setState({ randomBeer: response.data[Math.floor(Math.random() * response.data.length)] })

      })
  }



  render() {



    return (

      <div style={{ paddingLeft: 360 }}>
        <Card key={this.state.randomBeer._id} style={{ width: '26rem', height: '40rem', justifyContent: "center" }}>
          <Card.Img variant="top" style={{ marginLeft: 140, width: '3rem', height: '10rem' }} src={this.state.randomBeer.image_url} alt={this.state.randomBeer.description} />
          <Card.Body >
            <Card.Title>{this.state.randomBeer.name} {this.state.randomBeer.attenuation_level} </Card.Title>
            <Card.Text>{this.state.randomBeer.tagline} {this.state.randomBeer.first_brewed}</Card.Text>
            <Card.Text>{this.state.randomBeer.description}</Card.Text>
            <Card.Text>{this.state.randomBeer.contributed_by}</Card.Text>
          </Card.Body>
        </Card >


      </div>
    );
  }
}

export default RandomBeer;