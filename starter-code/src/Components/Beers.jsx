import React, { Component } from "react";
import Navbar from "./Navbar";
import {beers} from "./../Services/ListBeers";

export class Beers extends Component {
  constructor() {
super();
this.state = {
  beers: []
}
  }

  componentDidMount() {
    beers().then(beers => {
      this.setState({beers: beers.data})
    }).catch(err => {console.log(err)})
  }

  render() {
let listBeers = this.state.beers;
    return (
      <div>
        <Navbar />
        <div>
        <ul className='list-group card-group'>
        {listBeers && listBeers.map(beer => {
          return <li className='list-group-item d-flex card flex-row' key={beer._id}>
            <img src={beer.image_url} alt={beer.name} style={{maxWidth: '10%'}} className='p-2 card-img-top'/>
            <div className='d-flex flex-column align-content-between card-body pl-2'>
            <h4 className="card-title">{beer.name}</h4>
            {beer.tagline && <p>{beer.tagline}</p>}
            {beer.contributed_by && <p className="card-text">Created by: {beer.contributed_by}</p>}
            <a href={`/beers/${beer._id}`}>Want to know more?</a>
            </div>
          </li>
        })}
        </ul>
        </div>
      </div>
    );
  }
}

export default Beers;
