import React, { Component } from "react";
import Navbar from './Navigation';
import BeersService from "../services/beers.services";
//import {Link} from "react-router-dom";


class RandomBeer extends Component {
  constructor() {
    super()

    this.state = {
      beers: []
    }

    this.service = new BeersService()
  }


 

 
  

  render() {

    return (
     <>
        
       

    </>
    )
  }
}

export default RandomBeer