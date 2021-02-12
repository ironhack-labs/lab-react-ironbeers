import React from 'react';
import axios from 'axios';

class RandomBeer extends React.Component {
  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      this.props.history.push(`/beers/${response.data._id}`);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return <div>Loading...</div>;
  }
}

export default RandomBeer;