import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((apiResponse) => {
        this.setState({ beers: apiResponse.data });
        // console.log(apiResponse.data);
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        {this.state.beers.map((beer, index) => (
          <div>
            <Link to={`/beers/${beer._id}`}>
              <img className="beerImg" src={beer.image_url} alt="" />
            </Link>
            <p key={index}>{beer.name}</p>
            <p key={index}>{beer.tagline}</p>
            <p key={index}>{beer.contributed_by}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Beers;
