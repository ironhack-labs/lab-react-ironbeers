import React, { Component } from 'react';
import Axios from 'axios';
import Header from './Header';

class BeerDetail extends Component {
  state = {
    beer: {},
  };
  componentDidMount() {
    const { params } = this.props.match;
    const beerId = params.id;
    console.log(beerId);
    Axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then(
      (response) => {
        this.setState({ beer: response.data });
      }
    );
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.beer;
    return (
      < div className = "d-flex justify-content-center align-items-center flex-column" >
        <Header />
            <a className="text-info" href="/beers"> Go back to all beers </a>
        <div className="mx-3 px-3">
          <div className="d-flex justify-content-center my-5">
            <img
              className="img-fluid"
              src={image_url}
              alt={name}
              style={{ width: '80px' }}
            />
          </div>
          <div className="d-flex justify-content-around flex-row">
            <p>
              <h4 className="display-5 font-weight-normal ">{name}</h4>
              <h4 className="display-5 font-weight-normal text-muted">
                {tagline}
              </h4>
            </p>
            <small>
              <h4 className="display-5 font-weight-bold text-muted">
                {attenuation_level}
              </h4>
              <strong>{first_brewed}</strong>
            </small>
          </div>
          <p>{description}</p>
          <small className="text-muted">
            <strong>{contributed_by}</strong>
          </small>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
