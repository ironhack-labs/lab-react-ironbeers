import { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './BeerDetails.css';
import BeersService from '../../../services/index';
import Header from '../../resources/Header/Header';

class BeerDetails extends Component {
  constructor() {
    super();
    this.beerService = new BeersService();
  }

  state = {
    beerDetails: {},
  };

  componentDidMount() {
    this.loadBeerDetails();
  }

  loadBeerDetails = async () => {
    try {
      let response;
      if (this.props.id) {
        response = await this.beerService.getBeerById(this.props.id);
      } else {
        response = await this.beerService.getRandomBeer();
      }
      this.setState({ beerDetails: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col>
              <Image
                className="detail-img"
                src={this.state.beerDetails.image_url}
                alt={this.state.beerDetails.name}
              ></Image>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={8}>
              <h2>{this.state.beerDetails.name}</h2>
            </Col>
            <Col xs={4}>
              <p className="att-level">
                {this.state.beerDetails.attenuation_level}
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={8}>
              <p className="tagline">{this.state.beerDetails.tagline}</p>
            </Col>
            <Col xs={4}>
              <p>{this.state.beerDetails.first_brewed}</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <p>{this.state.beerDetails.description}</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <p className="contributor">
                {this.state.beerDetails.contributed_by}
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default BeerDetails;
