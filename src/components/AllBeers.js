import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllBeers extends Component {
  state = {
    beers: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ beers: response.data });
        console.log(response.data[0]);
      })
      .catch((err) => console.log(err));
  }

  renderBeers = () => {
    const beers = this.state.beers;
    //
    if (!beers) return <h1>Loading</h1>;
    return (
      <Row>
        {beers.map((beer) => {
          return (
            <Row
              style={{
                border: '1px solid black',
                margin: '20px',
                padding: '20px',
              }}
            >
              <Col>
                <img src={beer.image_url} alt="" style={{ height: '200px' }} />
              </Col>
              <Col>
                <Link to={'/beers/' + beer._id}>
                  <h3>{beer.name}</h3>
                </Link>
                <h4>{beer.tagline}</h4>
                <small>
                  <strong>Created by: </strong> {beer.contributed_by}
                </small>
              </Col>
            </Row>
          );
        })}
      </Row>
    );
  };

  render() {
    return (
      <>
        <HomeHeader />
        <Container className="App">{this.renderBeers()}</Container>
      </>
    );
  }
}
