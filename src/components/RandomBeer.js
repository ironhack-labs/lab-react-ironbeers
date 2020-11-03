
import React, { Component } from 'react'
//import Header from './header/Header';
import axios from 'axios';


export default class RandomBeer extends Component {
    state = {
        
      
        beer: {}
      };
    
      componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response)=> {
          console.log(response)
          this.setState({
            beer: response.data
          })
        })
      }
    
    
    
    
    
    render() {
        return (
            <div>
                
            <h1>Random Beer</h1>
            <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
            <h1>{this.state.beer.name}</h1>
            <p>{this.state.beer.tagline}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
           </div>
        )
    }
}









