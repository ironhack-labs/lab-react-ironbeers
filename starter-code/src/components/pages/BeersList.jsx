import React, { Component } from 'react';
import Beer from "./Beer"
import axios from "axios";
import Navbar from "../Navbar"


export class BeersList extends Component {
  constructor(props){
    super(props)
    this.state={
      beers:[]
    }
  }
  componentDidMount(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response =>{
      this.setState({beers:response.data})
    })
  }
    render() {
 
        return (
            <div>
            <Navbar/>
                {this.state.beers.map(beer => (
            <Beer
                key={beer._id}
                id={beer._id}
                image={beer.image_url}
                name = {beer.name}
                tagline={beer.tagline}
                contributed_by={beer.contributed_by}
            />
))
}
            </div>
            
        );
    }
}

export default BeersList;
