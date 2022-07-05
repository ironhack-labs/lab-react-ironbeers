import React from 'react'
import './CardContainer.css';
import { Link } from 'react-router-dom';
import LoremIpsum from 'react-lorem-ipsum';
import { Route, Routes } from 'react-router-dom';
import AllBeers from '../../../pages/AllBeers/AllBeers';
import NewBeer from '../../../pages/NewBeer/NewBeer';
import RandomBeer from '../../../pages/RandomBeer/RandomBeer';
const CardContainer = ({link, beers, name}) => {
  return (
    <div>

    <Link to={'/' + link} className='link-container '> 
    <div className='beer-img'><img src={beers} alt='beers' /></div>
    <h2 >{name}</h2>
    <LoremIpsum className='lorem'/>
    </Link>

    <Routes>
      <Route path='/beers' element={<AllBeers/>}/>
      <Route path='/random-beer' element={<RandomBeer/>}/>
      <Route path='/new-beer' element={<NewBeer />}/>
    </Routes>
    </div>
  )
}

export default CardContainer