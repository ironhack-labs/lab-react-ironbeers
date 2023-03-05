import React from 'react'
import Beers from '../pages/Beers'
import NewBeer from '../pages/NewBeer'
import RandomBeer from '../pages/RandomBeer'
import { NavLink } from 'react-router-dom'


function HomePage() {
  return (
    <div>

   {/*    <Link to="/beers"> Beers
            </Link>
    <Link to="/random-beer"> Random Beers
            </Link>
     <Link to="/new-beer"> New Beers
            </Link>
 */}

    <NavLink to="/beers">
        <Beers/>
    </NavLink>

    <NavLink to="/new-beer">
        <NewBeer/>
    </NavLink>

    <NavLink to="/random-beer">
        <RandomBeer/>
    </NavLink>


    </div>
  )
}

export default HomePage