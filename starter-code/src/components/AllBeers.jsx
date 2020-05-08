import React from "react";
import Header from "./Header";
import axios from "axios";
import SingleBeer from "./SingleBeer";
import { Link } from "react-router-dom";

class AllBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((apiResponse) => {
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className='all-beers'>
          {this.state.beers.map((beer, index) => (
            <Link
              exact
              className='links'
              key={index}
              to={`/beers/${this.state.beers[index]._id}`}
            >
              <SingleBeer key={index} index={index} beer={beer} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default AllBeers;
