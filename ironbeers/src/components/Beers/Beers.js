import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';

export default class Beers extends Component {
  constructor(){
    super();
    this.state = {listOfBeers: null};
}

getAllBeers = () =>{
  axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
  .then(responseFromApi => {
    console.log(responseFromApi);
    this.setState({
      listOfBeers: responseFromApi.data
    })
  })
}

componentDidMount() {
  this.getAllBeers();
}

render(){
  
  return this.state.listOfBeers ? 
    (<div>
      <Link to='/'>
    <h3>Home</h3>
  </Link>
    <div>
    {this.state.listOfBeers.map(beer => (
  <Link key={beer._id} to={`/beers/${beer._id}`}>
    <div>
      <img src={beer.image_url} alt=""/>
      <div>
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>Created by: {beer.contributed_by}</p>
      </div>
    </div>
  </Link>
))}
    </div>
  </div>)
  : 
    (
    <p>Loading...</p>
  )
}
}


