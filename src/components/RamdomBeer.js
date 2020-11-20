import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class RandomBeer extends Component {
  state = {
    luckyBeer: {},
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({
          luckyBeer: response.data,
        });
      });
  }

  render() {
    let {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.luckyBeer;

    return (
      <div>
        <Header />
        <div className="detail-container">
          <div>
            <img className="images" src={image_url} />
          </div>
          <div className="detail-top">
            <div className="detail-header1">
              <h1>{name}</h1>
              <h3>{tagline}</h3>
            </div>

            <div className="detail-header2">
              <h2>{attenuation_level}</h2>
              <h4>{first_brewed}</h4>
            </div>
          </div>

          <div className="detail-text">
            <p>{description}</p>
            <p>{contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RandomBeer);
