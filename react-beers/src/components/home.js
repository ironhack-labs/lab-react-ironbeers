import React from 'react'

import Section from './section'
import Header from './header'


const Home = () => {
  return (

    <div className="col">
      <Section imageUrl={'images/beers.png'} title={'All Beers'} route={'beers'} />
      <Section imageUrl={'images/random-beer.png'} title={'Random Beers'} route={'random-beer'} />
      <Section imageUrl={'images/new-beer.png'} title={'New Beer'} route={'new-beer'} />
    </div>

  )
}

export default Home