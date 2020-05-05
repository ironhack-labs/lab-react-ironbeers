import React, { Component } from 'react'
import axios from 'axios';
import  {NavBar}  from './NavBar';

export default class RandomBeer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
        this.getRandomBeer = this.getRandomBeer.bind(this)
    }

    componentDidMount () {
        this.getRandomBeer();
      }  

    getRandomBeer() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(responseFromApi => {
            const randomBeer = responseFromApi.data
          this.setState({randomBeer})
        })
      }
    
  

    render() {
        return (
       
            <div>
            <header>
                <NavBar />
            </header>
            <div style={{width: '30%', float:"left"}}> 
          <h1>{this.state.name}</h1>
          <img src={this.state.image_url} alt={this.state.name}/>
          <h3>{this.state.tagline}</h3>
          <p>{this.state.first_brewed}</p>
          <p>{this.state.attenuation_level}</p>
          <p>{this.state.contributed_by}</p>
          <p>{this.state.description}</p>
         
        </div>
        </div>

        )
    }
}







