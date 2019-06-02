import React, { Component } from 'react'
import IronBeers from '../services/IronBeersService'

class SingleBeer extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    const {id} = this.props.match.params
    IronBeers.Beer(id)
      .then(
        beer => {
          this.setState({ beer })
          console.log(this.state.beer)
        }
      )
  }

  render() {
    const { beer } = this.state
    return this.state.beer.hasOwnProperty('image_url') === false ? null : (
      <div className='p-5'>
        <img src={beer.image_url} style={{'maxHeight': '40vh'}} alt='' className='mb-3'/>
        <div className='d-flex row justify-content-between mb-2'>
          <h4 className=''>{beer.name}</h4>
          <h4 className= 'text-secondary'>{beer.attenuation_level}</h4>
        </div>
        <div className='d-flex row justify-content-between mb-2'>
          <h5 className='text-secondary'>{beer.tagline}</h5>
          <h5>{beer.first_brewed}</h5>
        </div>
        <p className='text-left'>{beer.description}</p>
        <b>{beer.contributed_by.split('<')[0]}</b>
      </div>
    )
  }
}

export default SingleBeer