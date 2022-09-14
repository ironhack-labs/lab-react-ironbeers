import React from 'react'
import randomImage from '../assets/random-beer.png'

export const RandomBeers = () => {
  return (
    <div>
      <div>
        <img src={randomImage} alt="beerimage" />
      </div>
      <div>
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
    </div>
  )
}
