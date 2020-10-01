import React from 'react';
import { NavLink } from 'react-router-dom';
import random from '../images/random.jpg'
import newbeer from '../images/new.jpg'
import beers from '../images/allbeers.jpg'


const Home = () => {
  return (
    <>
      <NavLink to="/beers" className="col-12 col-sm-4">
        <img className="home-pic" src={beers} alt="" />
        <h1>All beers</h1>
        <p>Todas las cerves</p>
      </NavLink>
      <NavLink to="/random-beer" className="col-12 col-sm-4">
        <img className="home-pic" src={random} alt="" />
        <h1>Random Beer</h1>
        <p>Una cerve random</p>
      </NavLink>
      <NavLink to="new-beer" className="col-12 col-sm-4">
        <img className="home-pic" src={newbeer} alt="" />
        <h1>New</h1>
        <p>Una nueva cerve</p>
      </NavLink>
    </>
  );
};

export default Home;
