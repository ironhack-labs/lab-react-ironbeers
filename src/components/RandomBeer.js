import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class RandomBeer extends Component{
    state= {
        randomBeer: []
    }

    componentDidMount() {
        axios
          .get(
            `https://ih-beers-api2.herokuapp.com/beers/random`
          )
          .then((response) => {
            this.setState({ randomBeer: response.data });
          });
      }

    render() {
         const {
            image_url,
            _id,
            name,
            tagline,
            contributed_by,
            first_brewed,
            attenuation_level,
            description,
          } = this.state.randomBeer;
    return(
        <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="image-container">
              <img src={`${image_url}`} alt="beer" className="beer-img" />
            </div>
            <div className="beer-info" key={_id}>
              <p>
              <b>Name:</b> {name}
              <br />
              <b>Tagline:</b> {tagline}
              <br />
              <b>First brewed:</b> {first_brewed}
              <br />
              <b>Attenuation level:</b> {attenuation_level}
              <br />
              <b>Description:</b> {description}
              <br />
              <b>Contributed by:</b> {contributed_by}
              </p>
            </div>
          </div>
          <div>
            <NavLink to="/beers/">
              <button>Back</button>
            </NavLink>
          </div>
        </div>
      </div>
    )
}
}

export default RandomBeer;