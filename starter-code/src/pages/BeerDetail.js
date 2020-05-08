import React, { Component } from 'react'
import BEERS_SERVICE from '../services/beerAPIService'

import OneBeerDetail from '../components/OneBeer'

class BeerDetail extends Component {
 state= {
  beer: {}
 }

 async componentDidMount() {
  const { id } = this.props.match.params
  const { data: beer } = await BEERS_SERVICE.singleBeer(id)
  console.log( beer )
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

export default BeerDetail