import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
export default class RandomBeer extends Component {
  constructor(){
    super();
    this.state = {randomBeer:null};
}

getAllBeers = () =>{
  axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
  .then(responseFromApi => {
    console.log(responseFromApi);
    this.setState({
      randomBeer: responseFromApi.data
    })
  })
}

componentDidMount() {
  this.getAllBeers();
}

render(){
  
  return this.state.randomBeer ? 
    (<div>
      <Link to='/'>
    <h3>Home</h3>
  </Link>
    <div>
      { this.state.randomBeer.map((randomBeer, index) => {
         return (
          <div>
            <img src={randomBeer.image_url} alt=""/>
            <h1>{randomBeer.name}</h1>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>contributed by: {randomBeer.contributed_by}</p>
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