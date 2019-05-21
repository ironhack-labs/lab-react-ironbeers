import React, { Component } from 'react';
import BeerDetailLayout from './BeerDetailLayout'

const RandomBeer = ({ beers = [] }) => {
  const getRandom = Math.floor(Math.random() * beers.length)
  return (
    <BeerDetailLayout 
      url={beers[getRandom].image_url} 
      name={beers[getRandom].name} 
      brewed={beers[getRandom].first_brewed} 
      attLvl={beers[getRandom].attenuation_level} 
      tag={beers[getRandom].tagline} 
      desc={beers[getRandom].description} 
      contribution={beers[getRandom].contributed_by} />
  )

}

export default RandomBeer