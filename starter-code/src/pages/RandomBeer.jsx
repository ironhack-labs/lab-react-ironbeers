import React, { Component } from 'react'
import Header from '../components/Header.jsx'

import axios from 'axios'

export class RandomBeer extends Component {

    state = {
        randomBeer:null
    }

    componentDidMount() {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers/random")
          .then((apiResponse) => {
              console.log(apiResponse.data)
            this.setState({ randomBeer: apiResponse.data });
          })
          .catch((apiError) => {
            console.log(apiError);
          });
      }

    render() {
        if (!this.state.randomBeer){
            return (<div>
                <Header />
                <h1>No Beer</h1>
            </div>)
            
        }

        return (
            <div>
            <Header />
            <div className="BeerDetails">
                <img src={this.state.randomBeer.image_url} alt=""/>
                <h1>{this.state.randomBeer.name}</h1>
                <h2>{this.state.randomBeer.tagline}</h2>{}
                <p>{this.state.randomBeer.first_brewed}</p>
                <p>{this.state.randomBeer.attenuation_level}</p>
                <p>{this.state.randomBeer.description}</p>
                <p>{this.state.randomBeer.contributed_by}</p>
            </div>
                
            </div>
        )
    }
}

export default RandomBeer
