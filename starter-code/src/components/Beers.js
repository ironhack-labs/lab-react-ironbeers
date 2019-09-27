import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Beers extends React.Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      // console.log(response.data);
      this.setState({
        beers: response.data
      });
    });
  }

  render() {
    console.log("beers rendered, ", this.state.beers[0]);

    return (
      <div>
        <h1>All Beers</h1>
        {this.state.beers.slice(0, 50).map(beer => {
          return (
            <div
              key={beer._id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img style={{ height: "60px" }} src={beer.image_url} alt="" />
              <div>
                <Link to={`/beers/${beer._id}`}>
                  <h2>{beer.name}</h2>
                </Link>
                <h3>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
