import React, { Component } from 'react';
import NavMain from '../components/NavMain';
import axios from 'axios';

export class OneBeer extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    const beerId = this.props.match.params.id;
    console.log(beerId);
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
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
              <img
                className="card-img-top m-2"
                style={{
                  width: 65,
                }}
                src={this.state.beer.image_url}
                alt={this.state.beer.name}
              />
              <div class="card-body">
                <h2 className="card-title">{this.state.beer.name}</h2>
                <p className="card-text">{this.state.beer.tagline}</p>
                <p className="card-text">{this.state.beer.first_brewed}</p>
                <p className="card-text">{this.state.beer.attenuation_level}</p>
                <p className="card-text">{this.state.beer.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    contributed by : {this.state.beer.contributed_by}
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
        </div>
      </div>
    );
  }
}

export default OneBeer;
