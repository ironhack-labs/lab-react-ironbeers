import React from 'react';
import axios from 'axios';

class RandomBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log(response);
        this.setState({ beer: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    if (this.state.beer === null) {
      return <div>Your beer is cooling ...</div>;
    }
    return (
      <div>
        <h1>Your random beer !</h1>
        <img src={this.state.beer.image_url} alt="" />
        <h2>{this.state.beer.name}</h2>
        <h3>
          <em>{this.state.beer.tagline}</em>
        </h3>
        <p>
          <span>{this.state.beer.first_brewed}</span>
        </p>
        <p>{this.state.beer.description}</p>
      </div>
    );
  }
}

export default RandomBeer;
