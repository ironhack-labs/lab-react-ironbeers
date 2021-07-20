import React from 'react';
import axios from 'axios';
import Header from './Header';
import { Spinner } from 'react-bootstrap';

class BeerDetail extends React.Component {
  state = {
    beerDetail: null,
  };

  async componentDidMount() {
    try {
      let beerId = this.props.match.params.beerId;
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      console.log(response.data);
      this.setState({
        beerDetail: response.data,
      });
    } catch (err) {
      console.log('Fetching details failed ', err);
    }
  }

  render() {
    if (!this.state.beerDetail) {
      return <Spinner animation="border" variant="primary" />;
    }
    const { beerDetail } = this.state;
    return (
      <div>
        <Header />
        <img
          src={beerDetail.image_url}
          style={{ width: '150px' }}
          alt={beerDetail.name}
        ></img>
        <h1>{beerDetail.name}</h1>
        <h3>{beerDetail.tagline}</h3>
        <p>{beerDetail.first_brewed}</p>
        <p>{beerDetail.attenuation_level}</p>
        <p>{beerDetail.description}</p>
        <p>{beerDetail.contributed_by}</p>
      </div>
    );
  }
}

export default BeerDetail;
