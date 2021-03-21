import React from 'react';
import Head from './Header';
import axios from 'axios';

class OneBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const id = this.props.match.params.beerId;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          beer: response.data,
        }).catch((error) => {
          console.log(error);
        });
      });
  }

  render() {
    if (this.state.beer === null) {
      return <h1>LOADING FOOL</h1>;
    }
    return (
      <div>
        <Head />
        <h1>SingleBeer</h1>
        <p>{this.state.beer.image_url}</p>
      </div>
    );
  }
}

export default OneBeer;
