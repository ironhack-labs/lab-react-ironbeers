import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard'
import beers from '../../assets/beers.png'
import randombeer from '../../assets/random-beer.png'
import newbeer from '../../assets/new-beer.png'


export default function HomeScreen() {
  return (
    <div>
        <BeerCard url='/beers' img={beers} title='All Beers'/>
        <BeerCard url='/random-beer' img={randombeer} title='Random Beers'/>
        <BeerCard url='/new-beer' img={newbeer} title='New Beers'/>
    </div>
  )
}

