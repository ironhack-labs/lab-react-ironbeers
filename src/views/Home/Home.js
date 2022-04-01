import React from "react";
import { Link } from "react-router-dom";
import beers from '../../assets/beers.png';
import newBeer from '../../assets/new-beer.png';
import randomBeer from '../../assets/random-beer.png';
import './Home.css';

const loremDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"


const Home = () => {
  return ( 
    <>
      <section>
      <Link to="/">
      <div>
        <img className="img-beers-home" src={beers} alt="click to list the beers"/>
      </div>
      </Link>
        <Link style={{textDecoration: "none"}} to={"/beers"}>
        <h3> All Beers </h3>
        </Link>
        <p>{loremDescription}</p>
      </section>

      <section>
      <div>
        <img className="img-beers-home" src={randomBeer} alt="click to random beer"/>
      </div>
      <Link style={{textDecoration: "none"}} to="/randomBeer">
        <h3>Random Beer</h3>
        <p>{loremDescription}</p>
      </Link>
      </section>
      
      <section>
      <div>
        <img className="img-beers-home" src={newBeer} alt=""/>
      </div>
        <Link style={{textDecoration: "none"}} to="/new">
        <h3>New beer</h3>
        <p>{loremDescription}</p>
        </Link>
      </section>
    </>
   );
}
 
export default Home;