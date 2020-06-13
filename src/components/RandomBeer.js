import React, { Component } from 'react'
import axios from 'axios'

class RandomBeer extends Component
{
    state = {
        randomBeer : null
    }

    componentDidMount () {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((randomBeer) => {
            this.setState({
                randomBeer : randomBeer.data
            })
        })
    }
    render()
    {
        return (
            <div>
            {this.state.randomBeer 
                ? <div>
                    <img src={this.state.randomBeer.image_url} />
                    <h5>{this.state.randomBeer.name} </h5>
                    <p>{this.state.randomBeer.tagline}</p>
                    <div>First brewed : {this.state.randomBeer.first_brewed}</div>
                    <div>Attenuation level : {this.state.randomBeer.attenuation_level}</div>
                    <p>Description : {this.state.randomBeer.description}</p>
                    <div>Contributed by : {this.state.randomBeer.contributed_by}</div>

                   </div> 
                
                : "loading"}
            </div>
        )
    }
}

export default RandomBeer
