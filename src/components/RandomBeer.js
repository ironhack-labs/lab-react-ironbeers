import React, { Component } from 'react';
import axios from 'axios';

export default class BeerDetails extends Component {
  state = {
    beer: null,
  };

  getBeerData = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        const beer = response.data;
        this.setState({
          beer: beer,
        });
      });
  };

  componentDidMount() {
    this.getBeerData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getBeerData();
    }
  }

  render() {
    const beer = this.state.beer;
    if (!beer) return <></>;
    return (
      <div>
        <h1>Beer Details</h1>
        <table>
          <thead>
            <tr>
              <td>
                <img src={beer.image_url} alt="beer" />
              </td>
            </tr>
            <tr>
              <td>
                <h2>{beer.name}</h2>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <em>{beer.tagline}</em>
              </td>
            </tr>
            <tr>
              <td>First brewed: </td>
              <td>{beer.first_brewed}</td>
            </tr>
            <tr>
              <td>Attenuation level:</td>
              <td>{beer.attenuation_level}</td>
            </tr>
            <tr>
              <td>{beer.description}</td>
            </tr>
            <tr>
              <td>Created by:</td>
              <td>{beer.contributed_by}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
