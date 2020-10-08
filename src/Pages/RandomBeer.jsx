import NavMain from '../Components/NavMain';
import beersApi from '../api/beersApi';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  async componentDidMount() {
    beersApi.getRandom().then((apiResponse) => {
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
      <NavMain/>
        {this.state.beers && (
          <React.Fragment>

            <img
              className="beerPic"
              src={this.state.beers.image_url}
              alt="beerImage"
            />

            <h3>{this.state.beers.tagline}</h3>
            <h4>{this.state.beers.contributed_by}</h4>
            <h5>{this.state.beers.first_brewed}</h5>
            <p>{this.state.beers.attenuation_level}</p>
            <p>{this.state.beers.description}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

