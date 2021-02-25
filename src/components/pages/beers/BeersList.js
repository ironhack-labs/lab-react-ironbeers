import { Component } from 'react';

import Header from '../../resources/Header/Header';
import BeerCard from '../beers/BeerCard';
import BeersService from '../../../services/index';
import { Col, Container, Row } from 'react-bootstrap';
class BeerList extends Component {
  constructor() {
    super();
    this.beerService = new BeersService();
  }
  state = {
    beersList: [],
  };

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = async () => {
    try {
      const response = await this.beerService.getAllBeers();
      this.setState({ beersList: response.data });
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
            {this.state.beersList.map((beer) => (
              <Col className="mt-4" xs={12} md={4} key={beer._id}>
                <BeerCard {...beer} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BeerList;
