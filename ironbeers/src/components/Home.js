import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <NavLink to="/beers" className="button is-large">
            <span className="icon is-large">
            <i className="fas fa-beer"></i>
            </span>
            <span>Beers</span>
        </NavLink>
        <NavLink to="/random-beers" className="button is-large">
            <span className="icon is-large">
            <i className="fas fa-random"></i>
            </span>
            <span>Random Beers</span>
        </NavLink>
        <NavLink to="/new-beers" className="button is-large">
            <span className="icon is-large">
            <i className="fas fa-plus-circle"></i>
            </span>
            <span>Add Beers</span>
        </NavLink>
    </div>
  )
}

export default Home;