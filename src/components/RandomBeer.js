import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import HomeHeader from './HomeHeader';

export default class BeerDetails extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        this.setState({ beer: response.data });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (!this.state.beer) return <h1>Loading</h1>;
    const beer = this.state.beer;

    return (
      <>
        <HomeHeader />
        <Row style={{ justifyContent: 'center', margin: '2em' }}>
          <Col
            xs="8"
            style={{
              padding: '2em',
              backgroundColor: 'lightblue',
              borderRadius: '5px',
            }}
          >
            <Row style={{}}>
              <h1>{beer.name}</h1>
            </Row>
            <Row style={{ color: 'gray', marginBottom: ' 10px' }}>
              <h5>{beer.tagline}</h5>
            </Row>
            <Row>
              <img
                src={beer.image_url}
                alt="beer pic"
                style={{ width: '100px' }}
              />
              <Col>
                <ul>
                  <li>
                    <small>First brewed: {beer.first_brewed}</small>
                  </li>
                  <li>
                    <small>Attenuation Level: {beer.attenuation_level}</small>
                  </li>
                  <li>
                    <small>Created by: {beer.contributed_by} </small>
                  </li>
                </ul>
              </Col>
            </Row>

            <Row></Row>
            <h4 style={{ marginTop: '20px' }}>Description</h4>
            <small>{beer.description}</small>
          </Col>
        </Row>
      </>
    );
  }
}
