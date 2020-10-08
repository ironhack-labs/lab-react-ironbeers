import React from 'react';
import { Link } from 'react-router-dom';
import beersApi from '../api/beersApi';
import NavMain from '../Components/NavMain';

export default class OneBeer extends React.Component {
  state = {
    beers: null,
  };

  componentDidMount() {
    beersApi
      .getOne(this.props.match.params.id)
      .then((apiResponse) => {
        console.log(apiResponse.data);
        this.setState({ beers: apiResponse.data });
      })
      .catch((error) => console.log(error));
    // console.log(this.props.match.params.id);
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
