import React, { Component } from 'react';
import Header from '../Header';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class AllBeers extends Component {
  constructor(props) {
    super (props);
    this.state = {
      ourBeers: null
    }
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then((response) => {
      this.setState({ourBeers: response.data})
      console.log(this.state.ourBeers)
    })
  }

  render() {
    if (!this.state.ourBeers) {
    return (
      <div>
        <Header />
        <h2 className="text-center">Beer Loading...</h2>
        </div>
        );
      }
    return (
      <div>
        <Header />
        {this.state.ourBeers.map((beer, index) => 
          <div key={index}>
            <Link className="beer-link" to={`/beers/${beer._id}`}>
              <p>{beer.name}</p>
              <img className="beer-image" src={beer.image_url}/>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by.substring(0, beer.contributed_by.indexOf("<"))}</p>
            </Link>
          </div>
        )}
      </div>
    )
  }
}
