import React from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class Beers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response.data)
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
      <NavLink exact to="/">
        Home
      </NavLink>
      <h1>All Beers</h1>
      <div>
            {this.state.beers.map((beer) => {
              return (
                <div>
                  <img className="beerImg" src={beer.image_url} alt={beer.name} />
                  <p>{beer.name}</p>
                  <p>{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>
                  <Link to={`/beers/${beer._id}`}>Check details</Link>
                </div>
              );
            })}
          </div>
    </div>
  )
  }
}

export default Beers

