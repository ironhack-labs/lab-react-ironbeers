import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class RandomBeer extends Component {
  state = {
    randomBeer: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({
          randomBeer: response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="col text-center">
            <h4 className="display-4">Random Beer</h4>
          </div>
          <hr />
        </div>
        {this.state.randomBeer ? (
          <div className="container">
            <div className="media">
              <img
                className="align-self-center m-5 smallImage"
                src={this.state.randomBeer.image_url}
                alt='beer'
              ></img>

              <div className="media-body align-self-center">
                <h2 className="display-2">{this.state.randomBeer.name}</h2>
                <p>{this.state.randomBeer.description}</p>
                <p>{this.state.randomBeer.brewers_tips}</p>
              </div>
            </div>
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default RandomBeer;