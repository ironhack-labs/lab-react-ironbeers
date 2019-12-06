import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import ChosenBeer from './ChosenBeer'

export default class RandomBeer extends Component {

    constructor() {
        super()
        this.state = {
          beers: [],
          randomBeer: []
        }
      }
    
      componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
          .then(response => {
            console.log(response.data)
            this.setState({ randomBeer: response.data })
          })
      }

    render() {
        return (
            <div>
                <Header></Header>
                <img src="../images/random-beer.png" alt="" />
                <h1>Random Beer</h1>
                <ChosenBeer beerSent={this.state.randomBeer}></ChosenBeer>
            </div>
        )
    }
}
