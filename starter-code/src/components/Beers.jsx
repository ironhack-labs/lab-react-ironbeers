import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Beers extends Component {
  state = {
    beers: []
  };

  getBeers = () => {
    axios.get(`https://ih-beer-api.herokuapp.com/beers`).then(response => {
      // console.log(response.data);
      const beers = response.data;
      this.setState({
        beers: beers
      });
    });
  };

  componentDidMount() {
    console.log("DETAIL MOUNT");
    this.getBeers();
  }

  render() {
    return (
      <div>
        {this.state.beers.map(beer => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "30px 0"
                }}
              >
                <div key={beer._id}>
                  <Link to={`/beers/${beer._id}`}>
                    {
                      <img
                        style={{ height: "200px" }}
                        src={beer.image_url}
                        alt="beer-img"
                      />
                    }
                  </Link>
                </div>

                <div>
                  <strong>Name </strong>
                  <p>{beer.name}</p>
                  <strong>Tagline </strong>
                  <p>{beer.tagline}</p>
                  <strong>Contributed by </strong>
                  <p>{beer.contributed_by}</p>
                </div>
              </div>
              <hr></hr>
            </>
          );
        })}
      </div>
    );
  }
}
