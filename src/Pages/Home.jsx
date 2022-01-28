import React from 'react';
import { Link } from 'react-router-dom';
import Allbeers from "../assets/beers.png";
import RandBeer from "../assets/random-beer.png";
import  NewBeer from "../assets/new-beer.png";

const Home = () => {
  return(
      <div className='Homee'>
      <h1>HOME</h1>
      <img src={Allbeers} alt='beer'/>
    <Link to="beer">All Beers </Link>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
    <img src={RandBeer} alt='RandBeer'/>
    <Link to="randomBeer">Random Beer</Link>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
    <img src={NewBeer} alt='NewBeer'/>
    <Link to="newBeer">New Beer</Link>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
  )
};

export default Home;
