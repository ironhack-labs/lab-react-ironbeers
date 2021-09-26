import React from 'react';
import beersImage from '../assets/beers.png';
import newBeerImage from '../assets/new-beer.png';
import RandomBeerImage from '../assets/random-beer.png';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="cardHome">
        <img src={beersImage} alt="" />
        <Link to="/beers">
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque maxime
          animi, suscipit, quis deleniti tenetur illum voluptas temporibus
          praesentium expedita officiis alias? Eos maiores officiis nihil hic
          dicta! Dignissimos, ad!
        </p>
      </div>
      <div>
        <img src={newBeerImage} alt="" />
        <Link to="/new-beer">
          <h1>New Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque maxime
          animi, suscipit, quis deleniti tenetur illum voluptas temporibus
          praesentium expedita officiis alias? Eos maiores officiis nihil hic
          dicta! Dignissimos, ad!
        </p>
      </div>
      <div>
        <img src={RandomBeerImage} alt="" />
        <Link to="/random-beer">
          <h1>Random Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque maxime
          animi, suscipit, quis deleniti tenetur illum voluptas temporibus
          praesentium expedita officiis alias? Eos maiores officiis nihil hic
          dicta! Dignissimos, ad!
        </p>
      </div>
    </div>
  );
}
