import React, { Component } from 'react';
import apiHandler from './../api/apiHandler';

class RandomBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    apiHandler
      .getRandomBeer()
      .then((apiRes) => {
        console.log(' RANDOM BEER : ', apiRes);
        this.setState({ beer: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.match.params.id !== prevProps.match.params.id) {
  //     apiHandler
  //       .getRandomBeer()
  //       .then((res) => {
  //         this.setState({
  //           beer: res.data,
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }

  render() {
    if (this.state.beer === null) return <div>Loading random beer...</div>;
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

export default RandomBeer;
