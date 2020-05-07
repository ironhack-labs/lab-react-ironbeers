import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((apiResponse) => {
        console.log(apiResponse)
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    if (!this.state.beers) return null;
    return (<div className="cards">
      <h1>All the beers!</h1>
      {this.state.beers.map((beer, index) => (
        <div className="card__container">
          <Link className="card__link" to={`/beer/${beer._id}`} key={index}>
            <img src={beer.image_url} alt={beer.name}></img>
            <h3>{`Name: ${beer.name}`}</h3>
            <p>{`Tagline: ${beer.tagline}`}</p>
            <p>{`Contributed By: ${beer.contributed_by}`}</p>
          </Link>
        </div>
      ))}
    </div>
    )
  }
}

export default Beers
