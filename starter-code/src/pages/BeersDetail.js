import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import BEER_SERVICE from '../services/beerService';
import BeerCardDetail from '../components/BeerCardDetail';

class BeersDetail extends Component {
  state = {
    beer: [],
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data: beer } = await BEER_SERVICE.readOne(id);
    this.setState({ beer });
  }
  render() {
    return (
      <div className="BeersDetail">
        <Navbar />

        <BeerCardDetail
          title={this.state.beer.name}
          text={this.state.beer.tagline}
          description={this.state.beer.description}
          imgSrc={this.state.beer.image_url}
          route="/beers"
        />
      </div>
    );
  }
}

export default BeersDetail;
