import React, { Component } from 'react'
import Navbar from '../navbar/Navbar';
import axios from "axios"
import { Link } from 'react-router-dom';
import './Beers.css';

export default class Beers extends Component {

  state = {
    beers : []
  }

  componentDidMount(){
    axios
        .get("http://localhost:5000/all")
        .then(allTheBeers=> {
            const allBeers = allTheBeers.data

            this.setState({
                ...this.state,
                beers: allBeers
            })
        })
  }

  render() {
    let showBeers = this.state.beers.map(beer => {
      return (
        <li className="listBeers" key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
          <img src={beer.image_url} alt="beer" />
          <h2>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
          <p>{beer.contributed_by}</p>
          </Link>
        </li>
      )
    })

    return (
      <React.Fragment>
        <Navbar />
        <ul>
          {showBeers}
        </ul>
      </React.Fragment>
    )
  }
}
