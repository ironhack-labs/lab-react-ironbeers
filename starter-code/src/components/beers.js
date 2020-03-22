import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import axios from 'axios';

class Beers extends Component {

  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        //console.log("This is the whole response of the API", response)
        this.setState({ beers: response.data })
      })
  }


  render() {

    return (

      <div style={{ paddingLeft: 360 }}>
        {
          this.state.beers.map(beer =>
            <Card key={beer._id} style={{ width: '22rem', height: '22rem', justifyContent: "center" }}>
              <Card.Img variant="top" style={{ textAlign: "left", width: '3rem', height: '10rem' }} src={beer.image_url} alt={beer.description} />
              <Card.Body style={{ textAlign: "right" }}>
                <Link to={`beers/${beer._id}`} style={{ textDecoration: 'none' }}>
                  <div >{beer.name}</div>
                </Link>
                <Card.Title>{beer.tagline}</Card.Title>
                <Card.Text>
                  Created by :{beer.contributed_by}
                </Card.Text>
              </Card.Body>
            </Card >
          )
        }
      </div>

    );
  }
}

export default Beers;