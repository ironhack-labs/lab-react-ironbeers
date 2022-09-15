import React from 'react'
import beers from "../../assets/beers.png"
import randomBeer from "../../assets/random-beer.png"
import newBeer from "../../assets/new-beer.png"
import MainCard from '../../components/main-card/MainCard'

function HomeScreen() {
  return (
    <div className='container my-1 d-flex flex-column gap-2'>
      <MainCard image={beers} title={"All beers"} text={"Get a list of all beers that we have in our database"} to={"/all-beers"} />
      <MainCard image={randomBeer} title={"Radnom beer"} text={"Get a random beer from our database"} to={"/random-beer"} />
      <MainCard image={newBeer} title={"New beer"} text={"Create a new beer by yourself"} to={"/new-beer"} />
    </div>
  )
}

export default HomeScreen