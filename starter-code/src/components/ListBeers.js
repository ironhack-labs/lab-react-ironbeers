import React, { Component } from 'react'
import axios from 'axios';
import Beer from './Beer';
// import { Link } from 'react-router-dom';

export default class ListBeers extends Component {
  constructor(){
    super();
    this.state = { listOfBeers: null };
}

getAllBeers = () =>{
  axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
  .then(responseFromApi => {
    //console.log(responseFromApi);
    this.setState({
      listOfBeers: responseFromApi.data
    })
  })
}
componentDidMount() {
  this.getAllBeers();
}
//No la uso
findOneBeer = (id) =>{
  this.state.listOfBeers._id.find(beerId => beerId===id)
}
//¿Como actualizo al padre?¿Hago otra peti axios?

  render() {
    return this.state.listOfBeers ? (
      <div>
        {console.log(this.state.listOfBeers)}
      {this.state.listOfBeers.map(beer => 
      <Beer key={beer._id} {...beer}/>)}
      </div>
      
    )
    :
    (<p>Loading...</p>)
  }
}
