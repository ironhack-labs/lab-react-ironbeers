import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {


    return (
      <div>
        <h1>Beers</h1>
        {this.state.beers.map((beer) => (
          <div key={beer._id}>
            <p>{beer.name}</p>
            <img src={beer.image_url} alt="" />
            <Link to={`/beers/${beer._id}`}>See more !</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Beers;
