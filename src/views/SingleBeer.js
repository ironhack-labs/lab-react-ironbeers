import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BeerCard from '../components/BeerCard';

import { getBeerService } from './../beer.service';

class SingleBeer extends React.Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    const { beerId } = this.props.match.params;
    getBeerService(beerId)
      .then(({ data }) => this.setState({ beer: data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar />
        <BeerCard {...this.state.beer} />
      </div>
    );
  }
}

export default withRouter(SingleBeer);
