import React, { Component } from 'react'
import BEERS_SERVICE from '../services/beerAPIService'

import OneBeerDetail from '../components/OneBeer'

class BeerRandom extends Component {
 state= {
  beer: {}
 }

 async componentDidMount() {
  const { data: beer } = await BEERS_SERVICE.randomBeer()
  this.setState({ beer })
}

render(){
 const { beer } = this.state
 return(
 <div className='beerDetail'>
 <OneBeerDetail image={beer.image_url} title={beer.name} description={`${beer.tagline} ${beer.description} ${beer.contributed_by}` }/>
 </div>
 )
}
}

export default BeerRandom