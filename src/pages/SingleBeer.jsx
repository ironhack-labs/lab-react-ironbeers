import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

class SingleBeer extends React.Component {
  state = {
    beer: {},
  };
  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
      )
      .then((foundBeer) => {
        console.log(foundBeer);
        this.setState({ beer: foundBeer.data });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <img src={this.state.beer.image_url} />
        <h1>{this.state.beer.name}</h1>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}

export default SingleBeer;
