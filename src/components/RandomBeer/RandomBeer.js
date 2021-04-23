import React from 'react';
import axios from 'axios';

class RandomBeer extends React.Component {
  state = {
    beerDetails: '',
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response);
      this.setState({ beerDetails: { ...response.data } });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="card align-items-center mt-5 border-0">
        <img
          src={this.state.beerDetails.image_url}
          className="card-img-top d-flex justify-content-center "
          style={{ height: '350px', width: '100px' }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {this.state.beerDetails.name}{' '}
            {this.state.beerDetails.attenuation_level}
          </h5>
          <p className="card-text">
            {this.state.beerDetails.tagline}{' '}
            {this.state.beerDetails.first_brewed}
          </p>
          <p className="card-text">{this.state.beerDetails.description}</p>
          <small className="text-muted">
            {this.state.beerDetails.contributed_by}
          </small>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
