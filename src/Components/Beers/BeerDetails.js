import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BeerService from '../../services/beers.service';
import './BeerDetails.css';

class BeerDetails extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      tagline: '',
      first_brewed: '',
      attenuation_level: '',
      contributed_by: '',
      image_url: '',
    };

    this.service = new BeerService();
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    this.service
      .getOneBeer(id)
      .then((response) => {
        const {
          name,
          description,
          tagline,
          first_brewed,
          attenuation_level,
          contributed_by,
          image_url,
        } = response.data;

        this.setState({
          name,
          description,
          tagline,
          first_brewed,
          attenuation_level,
          contributed_by,
          image_url,
        });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container>
        <Link to="/beers" className="btn-menu">
          Back All Beers
        </Link>

        <Row>
          <Col>
            <h1 className="title">Beer Details</h1>
            <article className="BeerInfo">
              <img src={this.state.image_url}></img>
              <div>
                <h3>{this.state.name}</h3>
                <p>
                  <small>{this.state.tagline}</small>{' '}
                </p>

                <p>
                  <strong>Hand made by:</strong> {this.state.contributed_by}
                </p>
                <p>
                  <strong>Attenuation Level:</strong>{' '}
                  {this.state.attenuation_level}
                </p>
                <p>
                  <strong>Made in: </strong>
                  {this.state.first_brewed}
                </p>

                <br />
                <p>{this.state.description} </p>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BeerDetails;
