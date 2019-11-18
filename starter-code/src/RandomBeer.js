import React, { Component } from 'react'
import Axios from 'axios'
import './RandomBeer.css'

export default class RandomBeer extends Component {

    state={
        randomBeer: []
    }

    componentDidMount(){
            this.getRandomBeer()
    }

    getRandomBeer = () => {
        Axios.get('https://ih-beers-api.herokuapp.com/beers/random').then(randomBeer =>{
            this.setState({
                randomBeer: randomBeer.data
            })
        })
      }

    render() {
        return (
            <div className='theBeer'>
                <h1>Random Beer:</h1>
                <div className='beerDetail'>

                <h3>{this.state.randomBeer.name}</h3>
                <img src={this.state.randomBeer.image_url} width='100px' height='200px'/>
                <p>{this.state.randomBeer.description}</p>
                </div>
            </div>
        )
    }
}
