import React from 'react'
import { Link } from 'react-router-dom'
import AllBeers from '../components/AllBeers'
import NewBeer from '../components/NewBeer'
import RandomBeer from '../components/RandomBeer'

function Home() {
  return (
    <div style={{paddingTop: '20px', maxWidth: '200px'}}>
    <AllBeers/>
    <RandomBeer/>
    <NewBeer/>
    </div>
  )
}

export default Home