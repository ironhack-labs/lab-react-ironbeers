import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Beers from './Beers'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import BeerId from './BeerId'
import Header from '../components/Header'

const RestPages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/beers' element={ <Beers /> } />
        <Route path='/random-beer' element={ <RandomBeer /> } />
        <Route path='/new-beer' element={ <NewBeer /> } />
        <Route path='/beers/:id' element={ <BeerId /> } />
      </Routes>
    </>
  )
}

export default RestPages