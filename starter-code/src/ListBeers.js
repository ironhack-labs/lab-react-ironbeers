import React from 'react';
import Navbar from './Navbar';
import axios from "axios";
import './Styles.css';
import { Link } from 'react-router-dom';
import SingleBeer from './SingleBeer';

class ListBeers extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      name: "",
      tagline: "",
      image_url: "",
      contributed_by: ""
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/all")
      .then(allBeersPayload => {
        const allBeers = allBeersPayload.data
        // console.log(allBeersPayload.data)
        this.setState({
          ...this.state,
          beers: allBeers
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          <ul>
            {
              this.state.beers.map((beer, idx) => {
                // console.log(beer)
                return (
                  <li key={idx} className="beerList">
                    <img src={beer.image_url} alt="img" className="beerImg" />
                    <div className="beerInfo">
                      <Link to={`/beers/${beer._id}`} className="navigation">{beer.name}</Link>
                      <h3>{beer.tagline}</h3>
                      <p>{beer.contributed_by}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default ListBeers;