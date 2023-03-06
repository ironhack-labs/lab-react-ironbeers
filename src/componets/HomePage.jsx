import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import imageBeers from'../assets/beers.png'
import randomBeer from'../assets/random-beer.png'
import newBeer from'../assets/new-beer.png'
import RandomBeer from './RandomBeer';



function HomePage() {
  return (
    <div>
<img src={imageBeers} alt="pictures of beers" />
<Link to='/AllBeers'> All Beers</Link>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque,
     atque rem pariatur eligendi quam autem ea rerum, beatae illum unde quas? Magni provident dolor, aut fugit tempora fugiat dolore!</p>
<img src={randomBeer} alt="Get a random beer" />
<Link to='/RandomBeer'> Random Beer </Link>~
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam tenetur minima nihil 
    praesentium itaque sequi numquam voluptate consequuntur suscipit fugiat unde a blanditiis debitis, fugit animi aliquam sint recusandae.</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repudiandae perferendis aut possimus in velit ab, 
    consectetur optio quas excepturi id quisquam eum nobis porro, maxime fuga nulla tempore ipsum!</p>
<img src={newBeer} alt="Get a random beer" />
<Link to='/NewBeer'> New beer </Link>
    </div>
  )
}

export default HomePage