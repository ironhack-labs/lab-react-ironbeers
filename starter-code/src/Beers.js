import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        // console.log(response);
        this.setState({
          beers: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const beers = this.state.beers.map(el => {
      return (
        <ul key={el._id}>
          <li>
            <img style={{ height: "100px" }} src={el.image_url} alt="beerPic" />
          </li>
          <li>
            <Link to={`/beers/${el._id}`}>{el.name}</Link>
          </li>
          <li>{el.tagline}</li>
          {/* <li>{el.contributed_by}</li> */}
        </ul>
      );
    });

    return <div>{beers}</div>;
  }
}
