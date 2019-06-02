import React, { Component } from 'react'
import IronBeers from '../services/IronBeersService'

class RandomBeer extends Component {
  state = {
    randomBeer: {}
  }

  componentDidMount() {
    IronBeers.RandomBeer()
    .then(
      randomBeer => {
        this.setState( {randomBeer})
      }
    )

  }

  render() {
    const { randomBeer } = this.state
    return this.state.randomBeer.hasOwnProperty('image_url') === false ? null : (
      <div className='p-5'>
        <img src={randomBeer.image_url} style={{'maxHeight': '40vh'}} alt='' className='mb-3'/>
        <div className='d-flex row justify-content-between mb-2'>
          <h4 className=''>{randomBeer.name}</h4>
          <h4 className= 'text-secondary'>{randomBeer.attenuation_level}</h4>
        </div>
        <div className='d-flex row justify-content-between mb-2'>
          <h5 className='text-secondary'>{randomBeer.tagline}</h5>
          <h5>{randomBeer.first_brewed}</h5>
        </div>
        <p className='text-left'>{randomBeer.description}</p>
        <b>{randomBeer.contributed_by.split('<')[0]}</b>
      </div>
    )
  }
}

export default RandomBeer