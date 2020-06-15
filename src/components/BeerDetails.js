import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class BeerDetails extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ beer: response.data });
      });
  };

  render() {
    const { image_url, id, name, tagline, contributed_by, first_brewed, attenuation_level, description } = this.state.beer;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="image-container">
              <img src={`${image_url}`} alt="beer" className="beer-img" />
            </div>
            <div className="beer-info" key={id}>
              {name}<br />
              {tagline}<br />
              {first_brewed}<br />
              {attenuation_level}<br />
              {description}<br />
              {contributed_by}
            </div>
          </div>
        </div>
        //
      </div>
    );
  }
}
export default BeerDetails;
