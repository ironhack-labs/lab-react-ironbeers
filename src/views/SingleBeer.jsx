import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import BeerInfo from './../components/BeerInfo';

//importing API
import { oneBeer } from './../services/beersApi';

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleBeer: {},
    };
  }

  //making a call to the API
  componentDidMount() {
    this.fetchBeerData();
  }

  fetchBeerData() {
    const id = this.props.match.params.id;
    oneBeer(id)
      .then((singleBeer) => {
        // console.log(response);
        this.setState({
          singleBeer,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const beer = this.state.singleBeer;
    return (
      <div>
        <BeerInfo beer={beer} />
      </div>
    );
  }
}

export default SingleBeer;
