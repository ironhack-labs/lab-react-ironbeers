import React, { Component } from 'react'
import axios from 'axios';


export class RandomBeer extends Component {
    state = {randomBeer:''};
    componentDidMount = async () =>{
      try {
        const beer = await axios.get('https://api.punkapi.com/v2/beers/random');
        this.setState({randomBeer: beer.data[0]})
        console.log(beer.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    render() {
        return (
            <div>
                <p>RandomBeer</p>
                <img src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name}/>
                <p>{this.state.randomBeer.name}</p>
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.first_brewed}</p>
                <p>{this.state.randomBeer.attenuation_level}</p>
                <p>{this.state.randomBeer.description}</p>
                <p>{this.state.randomBeer.contributed_by}</p>
            </div>
        )
    }
}

export default RandomBeer
