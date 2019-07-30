import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export class RandomBeer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      randomBeer: {}
    }
  }

  componentDidMount() {
   
    // RANDOM BEER GET ROUTE
    axios.get('https://ih-beer-api.herokuapp.com/beers/random')
      .then(response => {
        
        this.setState({
          randomBeer: response.data
        })
      })
      .catch(err => console.log(err))
    
  }

  render() {

    return (
      <div>
        <Link to='/'>Home</Link>
        <img src={this.state.randomBeer.image_url} alt='beer pic'/>
        <h1>{this.state.randomBeer.name}</h1>
        <p>Tagline: {this.state.randomBeer.tagline}</p>
        <p>First brewed: {this.state.randomBeer.first_brewed}</p>
        <p>Attenuation level: {this.state.randomBeer.attenuation_level}</p>
        <p>Description: {this.state.randomBeer.description}</p>
        <p>Contributed by: {this.state.randomBeer.contributed_by}</p>
      </div>
    )
  }
}

export default RandomBeer
