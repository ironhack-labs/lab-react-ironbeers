import React from 'react';
import beerApi from '../beerApi';

import '../styles/OneBeer.css';

class OneBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    beerApi
      .getOne(this.props.match.params.id)
      .then((apiResponse) =>
        this.setState({
          beer: apiResponse.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="one-beer-container">
        {this.state.beer && (
          <React.Fragment>
            <h1>{this.state.beer.name}</h1>
            <img src={this.state.beer.image_url} alt="img-beer" />
            <h3>{this.state.beer.tagline}</h3>
            <p>First brewed: {this.state.beer.first_brewed}</p>
            <p>Attenuation level: {this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>created by: {this.state.beer.contributed_by}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default OneBeer;
