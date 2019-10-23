import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css';

class BeersList extends Component {
  constructor(props){
    super(props);
    this.state = { listOfBeers: [] };
}

getAllBeers = () =>{
  axios.get(`https://ih-beers-api.herokuapp.com/beers`)
  .then(responseFromApi => {
    this.setState({
      listOfBeers: responseFromApi.data
    })
  })
}

componentDidMount() {
  this.getAllBeers();
}

  render() {
    return (
      <div>
        <Navbar />
        <div>
        {this.state.listOfBeers.map(beers =>  {
        return <div className='container-list'><img className='img-list' src={beers.image_url}/> <span> <Link key={beers._id} style={{ textDecoration: 'none' }}><h3>{beers.name}</h3></Link> <p>{beers.tagline}</p> <sub>created by: {beers.contributed_by}</sub> 
        </span></div>}
          )}
          
      </div>
      </div>
    );
  }
}

export default BeersList;