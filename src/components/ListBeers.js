import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListBeers extends Component {
  state = {
    beers: []
  }

  getAllBeers() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      this.setState({beers: response.data});
    })
    .catch(error=>console.log(error));
  }

  componentDidMount(){
    this.getAllBeers();
  }

  render() {
    if(!this.state.beers) return (<div>Filling the barrels...</div>);
    return (
      <div>
        <h1>All of the beers</h1>
        {this.state.beers.map(beer=>{
          return (
            <div key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <figure><img src={beer.image_url} height={50} alt={beer.name}/></figure>
                <h2>{beer.name}</h2>
              </Link>
              <blockquote>{beer.tagline}</blockquote>
              <q>Created by: {beer.contributed_by}</q>
            </div>
          )
        })}
        <Link to={`/`}>Back home</Link>
      </div>
    );
  }
}

export default ListBeers;