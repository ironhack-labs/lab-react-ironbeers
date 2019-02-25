import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';


export default class Beers extends Component {
  state = {
    beers: [],
  };
  
  componentWillMount () {
    const base_url = 'https://ironbeer-api.herokuapp.com/beers';
    axios.get (`${base_url}/all`)
    .then (cheves => {
      this.setState ({beers: cheves.data});
      // console.log(cheves.data)
    });
  }

  render () {
    let {beers}=this.state;
    // console.log(beers[0]._id)
    return (
      <div>
        <Navbar />
          {beers.map(beer => 
          <div className="container-beers">
            <li ><Link key={beer.id} to={`/beer/${beer._id}`}>Go to Beer</Link><img className="img-width" src={beer.image_url}/></li>
            <h2 className="beer-name">{beer.name}</h2>
            <h3 className="beer-description">{beer.tagline}</h3>
            <p className="beer-creater">Created by: {beer.contributed_by}</p>
            <p className="beer-creater">id:{beer._id}</p>
          </div>
        )}
      </div>
    )
  } 
}
