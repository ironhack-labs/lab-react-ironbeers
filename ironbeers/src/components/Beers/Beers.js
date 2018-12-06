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
      { this.state.listOfBeers.map((beer, index) => {
         return (
          <div>
            <img src={beer.image_url} alt=""/>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>contributed by: {beer.contributed_by}</p>
          </div>
        )})
      }    
    </div>
  </div>)
  : 
    (
    <p>Loading...</p>
  )
  
 

}
}
