import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import axios from 'axios';

class BeerId extends Component {

  constructor() {
    super()
    this.state = {
      beerId: []
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      .then(response => {
        console.log("API response in Beer ID!!!!!!", response)
        this.setState({ beerId: response.data })
      })
  }



  render() {


    console.log("Enra en render() de BeerId", this.state.beerId)
    return (

      <div style={{ paddingLeft: 360 }}>

        <Card key={this.state.beerId._id} style={{ width: '26rem', height: '40rem', justifyContent: "center" }}>
          <Card.Img variant="top" style={{ marginLeft: 140, width: '3rem', height: '10rem' }} src={this.state.beerId.image_url} alt={this.state.beerId.description} />
          <Card.Body >
            <Card.Title>{this.state.beerId.name} {this.state.beerId.attenuation_level} </Card.Title>
            <Card.Text>{this.state.beerId.tagline} {this.state.beerId.first_brewed}</Card.Text>
            <Card.Text>{this.state.beerId.description}</Card.Text>
            <Card.Text>{this.state.beerId.contributed_by}</Card.Text>
          </Card.Body>
        </Card >


      </div>
    );
  }
}

export default BeerId;