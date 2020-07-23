import React, { Component } from 'react';
import apiHandler from './../api/apiHandler';

class OneBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const beerId = this.props.match.params.id;
    apiHandler
      .getOneBeer(beerId)
      .then((apiRes) => {
        this.setState({ beer: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }


  render() {
    if (this.state.beer === null) return <div>Loading one beer...</div>;
    return (
      <div className="OneBeer">
        <img
          className="beer-img"
          src={this.state.beer.image_url}
          alt="beer pic"
        />

        <div className="main-desc">
          <h2 className="beer-name">{this.state.beer.name}</h2>

          <p className="beer-attenuation_level">
            {this.state.beer.attenuation_level}
          </p>
          <p className="beer-tagline">{this.state.beer.tagline}</p>
          <p className="beer-brew">{this.state.beer.first_brewed}</p>
          <p className="beer-description">{this.state.beer.description}</p>
          <p className="beer-contributor">{this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default OneBeer;
