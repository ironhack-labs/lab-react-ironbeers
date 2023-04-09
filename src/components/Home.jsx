import React from 'react'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex flex-col items-center m-2'>
      <div className="card border-0 max-w-screen-lg">
        <img src={beers} className="card-img-top" alt="Beers" />
        <div className="card-body">
          <Link to={"/beers"} className="card-title font-bold text-2xl">All Beers</Link>
          <p className="card-text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, earum aliquam. Fuga ullam optio odio veniam recusandae deserunt officia aperiam corporis, beatae, dolor magni facere ipsa incidunt, reiciendis laboriosam fugiat.</p>
        </div>
      </div>
      <div className="card border-0 max-w-screen-lg">
        <img src={randomBeer} className="card-img-top" alt="Beers" />
        <div className="card-body">
          <Link to={"/random-beer"} className="card-title font-bold text-2xl">Random Beer</Link>
          <p className="card-text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, earum aliquam. Fuga ullam optio odio veniam recusandae deserunt officia aperiam corporis, beatae, dolor magni facere ipsa incidunt, reiciendis laboriosam fugiat.</p>
        </div>
      </div>
      <div className="card border-0 max-w-screen-lg">
        <img src={newBeer} className="card-img-top" alt="Beers" />
        <div className="card-body">
          <Link to={"/new-beer"} className="card-title font-bold text-2xl">New Beer</Link>
          <p className="card-text text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, earum aliquam. Fuga ullam optio odio veniam recusandae deserunt officia aperiam corporis, beatae, dolor magni facere ipsa incidunt, reiciendis laboriosam fugiat.</p>
        </div>
      </div>
    </div>
  )
}
