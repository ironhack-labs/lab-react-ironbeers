import React, { Component } from 'react'
import BEERS_SERVICE from '../services/beerAPIService'

import BeerCard from '../components/BeerCard'

class Beers extends Component {
 state= {
  beers: [],
 }

 async componentDidMount() {
  const { data } = await BEERS_SERVICE.allBeers()
  const beers = data.map((ele) => ({ ...ele, key: ele._id }))
  this.setState({ beers })
}
 render (){
  return(
   <div className='homeContainer'>
   <BeerCard beers={ this.state.beers }/>
   </div>
  )
 }
}

export default Beers