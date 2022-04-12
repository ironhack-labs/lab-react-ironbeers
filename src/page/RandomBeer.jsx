import axios from 'axios'
import React, { Component } from 'react'

import BeerDetails from '../components/BeerDetails'

export default class RandomBeer extends Component {
  state = {
    randomBeer: null,
    loading: true
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then( ( resFromApi ) => {
        this.setState({
          ...this.state,
          randomBeer: resFromApi.data,
          loading: false
        })
      })
      .catch( () => {
        this.setState({
          ...this.state,
          loading: false
        })
      })
  }

  render() {
    const { randomBeer, loading } = this.state;

    let beer

    if (randomBeer !== null){
      beer = <BeerDetails { ...randomBeer } />;
    } 
    else {
      beer = <h2>Content not retrieved.</h2>
    }

    return (
      <>
        { !loading ? beer : <h2>Loading...</h2> }
      </>
    )
  }
}
