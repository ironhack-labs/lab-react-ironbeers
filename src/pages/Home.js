import React from 'react'
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function Home() {
  return (
    <div className='container'>
    <div className='home'>
        <img src={beers} alt='beers'
        />
        <Link className='homeBeers' to='/beers' style={{ textDecoration: 'none', color: 'black'}}><h2>All Beers</h2></Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error optio consequatur odit officia atque deserunt rem dolores asperiores. Omnis quo fuga explicabo pariatur reprehenderit eos officia necessitatibus ea fugit? Incidunt, eius. Maxime quos quasi facilis nisi sed corporis vitae voluptatem! Fugit expedita dolores accusantium. Quo nulla ducimus beatae ipsa, eos placeat sapiente numquam, nihil eaque laborum totam, recusandae temporibus!</p>
        <img src={randomBeer} alt='beers'
        />
        <Link className='homeBeers' to='/random-beer' style={{ textDecoration: 'none', color: 'black' }}><h2>Random Beer</h2></Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error optio consequatur odit officia atque deserunt rem dolores asperiores. Omnis quo fuga explicabo pariatur reprehenderit eos officia necessitatibus ea fugit? Incidunt, eius. Maxime quos quasi facilis nisi sed corporis vitae voluptatem! Fugit expedita dolores accusantium. Quo nulla ducimus beatae ipsa, eos placeat sapiente numquam, nihil eaque laborum totam, recusandae temporibus!</p>
        <img src={newBeer} alt='beers'
        />
        <Link className='homeBeers' to='/new-beer' style={{ textDecoration: 'none', color: 'black' }}><h2>New Beers</h2></Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error optio consequatur odit officia atque deserunt rem dolores asperiores. Omnis quo fuga explicabo pariatur reprehenderit eos officia necessitatibus ea fugit? Incidunt, eius. Maxime quos quasi facilis nisi sed corporis vitae voluptatem! Fugit expedita dolores accusantium. Quo nulla ducimus beatae ipsa, eos placeat sapiente numquam, nihil eaque laborum totam, recusandae temporibus!</p>
    </div>
    </div>
  );
}

export default Home