import React from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../Context'

const Navbar = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
  </ul>
)

const beerDetail = () => {
  return (
    <div>
      <Navbar />
      <MyContext.Consumer>
        {({ beers }) =>
          beers.map((beer, i) => (
            <div key={i}>
              <img src={beer.image_url} alt={beer.name} />
              <br />
              <span>{beer.name}</span>
              <br />
              <span>{beer.tagline}</span>
              <br />
              <span>Created by: {beer.contributed_by}</span>
            </div>
          ))
        }
      </MyContext.Consumer>
    </div>
  )
}

export default beerDetail
