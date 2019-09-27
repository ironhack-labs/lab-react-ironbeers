import React, { Component } from 'react'
import axios from 'axios'
import BeerCard from './BeerCard';

export default class OneBeer extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    const { params } = this.props.match
    axios.get(`https://ih-beer-api.herokuapp.com/beers`)

    .then( ({data}) => {
      data = [data]
      const randIndex = Math.floor(Math.random() * (data[0].length - 1))

      this.setState({beers: {...data[0][randIndex]}})
    })
    .catch(e => console.log(e))
  }
  render() {
    const { beer } = this.state
    return (
      <>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', marginTop:'25vh' }}>
      <BeerCard beers={beer} key={beer.id} image={beer.image} 
        name={beer.name} tagline={beer.tagline}
        contributed={beer.contributed}
        />
  </div>
  </>

    )
  }
} 