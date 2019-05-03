import React, { Component } from 'react'
import Link from  'react-router-dom/Link';
import Nav from './Nav.js'
import axios from "axios";



class AllBeers extends Component {
  constructor() {
    super()
    this.state = { 
        ListBeers: []
       };
  }

  componentDidMount(){
    axios.get('http://localhost:5000/all')
    .then(beers => {
      const allbeers = beers.data
      this.setState({
        ...this.state,
        ListBeers: allbeers
      })
    })
  }



  render () {
      console.log(this.state.ListBeers)
    return(
    <div>

    {this.state.ListBeers.map((beer) => {
        return (
            <div>
                <img src={beer.image_url} alt="imgbeer" />
                <h2>{beer.tagline}</h2>
                <p>{beer.name}</p>
                <p>author: {beer.contributed_by}</p>
        </div>
      )

        })}
    
          
  
  </div>
    );
  }
}

                   
export default AllBeers;