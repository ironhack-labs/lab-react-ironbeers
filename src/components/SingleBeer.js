import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class SingleBeer extends Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    let beerId = this.props.match.params.beerId;
    console.log(this.props.match.params);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        this.setState({
          beer: response.data,
        });
      });
  }

  render() {
    const {
      name,
      image_url,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.beer;
    return (
      <div>
        <Header />
        <div className="textblock">
          <div className="single-beer-image-container">
            <img className="single-beer-card-image" src={image_url} />
          </div>
          <p className="single-beer-name">{name}</p>
          <p className="single-beer-tagline">"{tagline}"</p>
          <p className="beer-created-tagline">First brewed: {first_brewed}</p>
          <p className="beer-created-tagline">Attenuation level: {attenuation_level}</p>
          <hr />
          <p className="single-beer-copytext">{description}</p>
          <hr />
          <p className="beer-created-tagline">Contributed by: {tagline}</p>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
