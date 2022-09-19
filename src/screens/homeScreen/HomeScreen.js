import React from 'react'
import MenuItem from '../../components/menu-item/MenuItem'
import beers from '../../../src/assets/beers.png'
import newBeer from '../../../src/assets/random-beer.png'
import randomBeer from '../../../src/assets/new-beer.png'

function HomeScreen() {
  return (
    <div className="container">
      <MenuItem image={beers} name="All Beers" to={"/beers"} />
      <MenuItem image={newBeer} name="Random Beer" to={"/random-beer"} />
      <MenuItem image={randomBeer} name="New Beer" to={"/new-beer"} />
            
    </div>
  )
}

export default HomeScreen