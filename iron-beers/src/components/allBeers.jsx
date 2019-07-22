import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MyContext } from '../Context'

const Navbar = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
  </ul>
)

const allBeers = () => {
  return (
    <div>
      <Navbar />
      <h1>Todas las cervezas</h1>
      <MyContext.Consumer>
        {({ beers }) =>
          beers.map((beer, i) => (
            <Link to={`/beers/${beer.id}`}>
              <div key={i}>
                <img src={beer.image_url} alt={beer.name} />
                <br />
                <span>{beer.name}</span>
                <br />
                <span>{beer.tagline}</span>
                <br />
                <span>Created by: {beer.contributed_by}</span>
              </div>
            </Link>
          ))
        }
      </MyContext.Consumer>
    </div>
  )
}

export default allBeers
