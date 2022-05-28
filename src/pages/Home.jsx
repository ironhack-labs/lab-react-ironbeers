import React from 'react'
import BeerImg from '../assets/beers.png'
import NewBeerImg from '../assets/new-beer.png'
import RandomBeerImg from '../assets/random-beer.png'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <NavLink to="/beers" className="bg-slate-500">
        <img src={BeerImg} alt="All beers" className='w-full'/>
        <h3 className='text-2xl mt-2'>All beers</h3>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eum rerum nisi non ipsum dolorum veniam in? Repudiandae, praesentium. Odit harum quis quidem blanditiis sint, alias excepturi tempora accusamus eos?</p>
      </NavLink>
      <NavLink to="/random-beer">
        <img src={RandomBeerImg} alt="Random beer" className='w-full'/>
        <h3 className='text-2xl mt-2'>Random beer</h3>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eum rerum nisi non ipsum dolorum veniam in? Repudiandae, praesentium. Odit harum quis quidem blanditiis sint, alias excepturi tempora accusamus eos?</p>
      </NavLink>
      <NavLink to="/new-beer">
        <img src={NewBeerImg} alt="New beer" className='w-full'/>
        <h3 className='text-2xl mt-2'>New beer</h3>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eum rerum nisi non ipsum dolorum veniam in? Repudiandae, praesentium. Odit harum quis quidem blanditiis sint, alias excepturi tempora accusamus eos?</p>
      </NavLink>
    </div>
  )
}