import React, { Component } from 'react';
import NavMain from '../components/NavMain';
import axios from 'axios';

export class RandomBeer extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random ')
      .then((apiResponse) => {
        console.log(apiResponse);

        this.setState({
          beer: apiResponse.data,
        });
      });
  }

  render() {
    return (
      <div>
        <NavMain />
        <div className="card m-4">
          <div className="card text-center">
            <div>
              <div>
                <div className="card-body">
                  <h2 className="card-title">{this.state.beer.name}</h2>
                  <img
                    className="card-img-top m-2"
                    style={{
                      width: 65,
                    }}
                    src={this.state.beer.image_url}
                    alt={this.state.beer.name}
                  />
                  <p className="card-text">{this.state.beer.tagline}</p>
                  <p className="card-text">{this.state.beer.first_brewed}</p>
                  <p className="card-text">
                    {this.state.beer.attenuation_level}
                  </p>
                  <p className="card-text">{this.state.beer.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      contrinuted by : {this.state.beer.contributed_by}{' '}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
