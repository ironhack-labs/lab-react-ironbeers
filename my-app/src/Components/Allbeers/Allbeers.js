import React, { Component } from 'react'
import axios from 'axios';
import Navbar from "../Header/Header";

export default class Allbeers extends Component {
  constructor(){
    super();
    this.state = { listOfProjects: null };
}


getAllProjects = () =>{
  axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
  .then(responseFromApi => {
    console.log(responseFromApi.data);
    this.setState({
      listOfProjects: responseFromApi
    })
  })
}

componentDidMount() {
  this.getAllProjects();
}

  render() {
    return (
     
      <div>
         <Navbar />
         <p>{this.state.listOfProjects}</p>
         <h2>Name</h2>
         <img src="" alt=""/>
          <p>Tagline</p>
          <p>Created by</p>
      </div>
    )
  }
}
