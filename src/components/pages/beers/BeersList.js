import { Component } from 'react';

import Header from '../../resources/Header/Header';
import BeerCard from '../beers/BeerCard';
import BeersService from '../../../services/index';
import Search from '../../resources/Search/Search';
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
  searchBeers = async (searchTerm) => {
    try {
      const response = await this.beerService.getMatch(searchTerm);
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
            <Col>
              <Search searchHandler={this.searchBeers} />
            </Col>
          </Row>
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
