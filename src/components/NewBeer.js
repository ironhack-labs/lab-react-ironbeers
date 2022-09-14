import React from 'react'
import newBeerImage from '../assets/new-beer.png'
export const NewBeer = () => {
  return (
    <div>
    <div>
      <img src={newBeerImage} alt="beerimage" />
    </div>
    <div>
      <h1>NewBeer</h1>
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
