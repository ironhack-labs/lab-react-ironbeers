import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <Link to="/beers"><h1 className='text-xl font-extrabold text-blue-400'>All beers page</h1></Link>
        <Link to="/random-beer"><h1 className='text-xl font-extrabold text-blue-400'>Random Beer</h1></Link>
        <Link to="/new-beer"><h1 className='text-xl font-extrabold text-blue-400'>New Beer</h1></Link>
         
    </div>
  )
}

