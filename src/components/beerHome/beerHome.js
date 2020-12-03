import React from 'react'
import BeerCard from './beerCard/beerCard'
const imageBeer = './beerCard/beerPhoto.png'
const BeerHome = () => {
    return(
           <section>
              <BeerCard title="All Beers" image={imageBeer} link="/beers" />
              <BeerCard title="Random Beer" image={imageBeer} link="/random-beer" />
              <BeerCard title="New Beer" image={imageBeer} link="/new-beer" />
           </section>
    )
}

export default BeerHome