import React, { Component } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class BeerContainer extends Component {
  state = {
    beers:[],
    filtered:[]
  };

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(({data}) => {
        this.setState({ beers: data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  search = (e) => {
    const { value } = e.target;
    const { beers } = this.state;
    const query = value.toLowerCase();
    const filtered = beers.filter(
      (beer) => beer.name.toLowerCase().includes(query)
    );
    this.setState({ filtered });
  };

  render() {
    const { beers , filtered } = this.state;
    return (
      <div>
        <div className="menu bg-primary">
          <Link className="text-light" to="/"><FontAwesomeIcon icon={faHome} size="2x"/></Link>
        </div>
        <div className="search">
          <input className="form-control" placeholder="Search" onChange={this.search} type="text" name="search" />
        </div>
        <div className="container">
          <div className="row">
            {filtered.length === 0 &&
              beers.map((beer) => (
                <BeerCard key= {beer._id} beer={beer}/>
            ))}
            {filtered.length !== 0 &&
              filtered.map((beer) => (
                <BeerCard key= {beer._id} beer={beer}/>
            ))}
              {/* {beers.map((beer) => (
                <BeerCard key= {beer._id} beer={beer}/>
              ))} */}
          </div>
        </div>
      </div>
      
    )
  }
}

export default BeerContainer;