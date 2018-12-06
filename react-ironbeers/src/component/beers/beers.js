import React, { Component } from 'react'
import Header from '../Header/Header';
import axios from 'axios';
import {Link } from 'react-router-dom';


export default class beers extends Component {
  constructor(){
    super();
    this.state = { listOfBeers: null };
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

  render() {
    return this.state.listOfBeers ? 
    (<div>
      <h1>ESTÁS EN BEER!!!!</h1>
      <Header/>

      <div>
{ this.state.listOfBeers.map((beer, index) => {
  return (
   <div key={beer._id}>
     <img style={{width: '10%'}} src={beer.image_url} alt=""/>
     
     <Link to={`/beers/${beer._id}`} ><h1>{beer.name}</h1></Link>
     <h3>{beer.tagline}</h3>
     <h4>{beer.contributed_by}</h4>
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
