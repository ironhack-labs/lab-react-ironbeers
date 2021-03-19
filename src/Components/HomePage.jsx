import React from 'react'
import {NavLink} from 'react-router-dom'
import beersImage from '../assets/beers.png'
import newBeersImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/new-beer.png';

const HomePage = () => {
    return (
      <div>
        <h1> Welcome to the Beers Home Page</h1>
        <div>
          <NavLink to="/beers">
            <img src={beersImage} alt="beers" />
           <br/> All Beers
          </NavLink>
        </div>

        <div>
          <NavLink to="/random-beer">
            <img src={newBeersImg} alt="new Beers" />
           <br/> Random Beer
          </NavLink>
        </div>

        <div>
          <NavLink to="/new-beer">
              <img src={randomBeerImg} alt=""/>
             <br/> Create New Beer</NavLink>
        </div>
      </div>
    );
}

export default HomePage
