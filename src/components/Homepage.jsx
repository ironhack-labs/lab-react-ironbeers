import React from 'react';
import { Link } from 'react-router-dom';
import allBeers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import '../index.css';


function Homepage() {
  return (
    <>
      <div>
        <img src={allBeers} alt="all beers" />
        <Link className='container-home-link' to='/beers'><h3>All Beers</h3></Link>
        <p className='container-home-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quibusdam incidunt a repudiandae nobis ducimus sunt repellendus totam iusto. Nobis necessitatibus sequi vero perspiciatis perferendis dicta doloremque eligendi quidem officiis.</p>
      </div>
      <div className='container-home'>
        <img src={randomBeer} alt="random beer" />
        <Link className='container-home-link' to='/randombeer'><h3>Random Beer</h3></Link>
        <p className='container-home-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis pariatur quaerat facilis doloribus iure numquam ex rerum, illum eos minus omnis! Blanditiis quia molestias vitae omnis quis facere deleniti.</p>
      </div>
      <div className='container-home'>
        <img src={newBeer} alt="new beer" />
        <Link className='container-home-link' to='/newbeer'><h3>New Beer</h3></Link>
        <p className='container-home-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima odio ullam aliquid id quidem odit eos doloremque sunt. Autem qui dolorum ullam consequatur deleniti quasi dolor tempora voluptatem placeat?</p>
      </div>
    </>
  );
}

export default Homepage;
