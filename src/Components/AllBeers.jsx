import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import "../Style/BeerDetails.css"


class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {

        this.setState({
          beers: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.beers.map((oneElement) => {
            return (
              <div className='oneBeer'>
                <Link to={`/beers/${oneElement._id}`} className='name'>
                  {oneElement.name}
                </Link>
                <img src={oneElement.image_url} />
                <p>{oneElement.tagline}</p>
                <p>{oneElement.contributed_by}</p>
              </div>


            );
          })}
        </div>
      </div>
    );
  }
}

export default AllBeers;