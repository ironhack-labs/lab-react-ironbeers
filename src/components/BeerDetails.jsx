import React from 'react';
import Axios from 'axios';
import '../stylesheets/BeerDetails.css';
import BeerCardDetails from './BeerCardDetails';

class BeerDetails extends React.Component {
  state = {
    beer: '',
  };

  componentDidMount() {
    Axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
    )
      .then((response) => this.setState({ beer: response.data }))
      .catch((e) => console.error(e));
  }

  render() {
    const beer = this.state.beer;
    if (!beer) {
      return <p className="Loading">Loading...</p>;
    }
    return (
      <div>
        <BeerCardDetails beer={beer} />
      </div>
    );
  }
}

export default BeerDetails;
