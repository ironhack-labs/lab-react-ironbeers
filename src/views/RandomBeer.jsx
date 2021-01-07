import React, { Component } from 'react'
import NavHome from "../components/NavHome"
import axios from "axios";
import { NavLink } from 'react-router-dom';

export default class RandomBeer extends Component {

    state = {
        beer: null,
      };

      componentDidMount() {
        const beerId = this.props.match.params.id;

        axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then((apiResponse) => {
          console.log(apiResponse);
          setTimeout(() => {
            this.setState({
              beer: apiResponse.data,
            });
          }, 1000);
        });
      }
      render() {
        if (!this.state.beer) {
          return <div>Loading.....</div>;
        }

        return (
          <div>
              <NavHome />
            <h2> Beer page</h2>
            <div>
              <h2>{this.state.beer.name}</h2>
              <img src={this.state.beer.image_url} />
            </div>
          </div>
        );
      }
}