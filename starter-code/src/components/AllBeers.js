import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllBeers extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(response => {
      this.setState({beers: response.data})
    })
  }

  showBeers = () => {
    let list = this.state.beers.map((beer) => {
      return ( 
        
      <Link to={`/single/${beer._id}`}>
        <div className="card md-col-4">
          <img className="card-img-top" src={beer.image_url} alt="Beer" />
          <div className="card-body">
           <h5 className="card-title">{beer.name}</h5>
            <p className="card-text">{beer.tagline}</p>
            <p className="card-text">Created By: {beer.contributed_by}</p>
          </div>
        </div>
      </Link>

        )
    })
    return list;
  }


  render() {
    return (
      <div className="AllBeers container">
        <div className="row"> {this.showBeers()} </div>
      </div>
    );
  }
}

export default AllBeers;