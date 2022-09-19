import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import BeerList from '../../components/beer-list/BeerList'
import axios from 'axios'


function BeersScreen() {
const [beers, setBeers] = useState(null)
useEffect(() => {
  axios
  .get("https://ih-beers-api2.herokuapp.com/beers")
  .then((beers) => {
    setBeers(beers.data)
    console.log(beers.data)
  })
  .catch((error) => console.log(error))
}, []);


  return (
    <div className="container">
      <Header />

      {beers ? (
        beers.map((beer) => (
          <BeerList key={beer._id} {...beer} />
        )) 
      ) : (
          <div>Loading...</div>
      )}
    </div>
  )
}

export default BeersScreen