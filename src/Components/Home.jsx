import React from 'react';
import { Link } from 'react-router-dom';
import allBeer from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randBeer from '../assets/random-beer.png'


const Home = () => {
    return (
        <div>
            
      <div className="home__box">
        <Link exact to="/beer" className="home__link">
        <img className="home__image" src={allBeer} alt="beer" />
        <h1>All Beers</h1>
        <p className="home__para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quidem
        sed voluptates animi natus autem deleniti fugiat repellendus illum
        consequuntur aliquam, magnam eaque itaque aut amet, libero aspernatur
        aperiam officiis.
        </p>
        </Link>
        
      </div>
      <div className="home__box">
        <Link exact to="/random-beer" className="home__link">
        <img className="home__image" src={randBeer} alt="beer" />
        <h1>Random Beer</h1>
        <p className="home__para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quidem
        sed voluptates animi natus autem deleniti fugiat repellendus illum
        consequuntur aliquam, magnam eaque itaque aut amet, libero aspernatur
        aperiam officiis.
        </p>
        </Link>
      </div>
      <div className="home__box">
        <Link exact to="/new-beer" className="home__link">
        <img  className="home__image" src={newBeer} alt="beer" />
        <h1>New Beer</h1>
        <p className="home__para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quidem
          sed voluptates animi natus autem deleniti fugiat repellendus illum
          consequuntur aliquam, magnam eaque itaque aut amet, libero aspernatur
          aperiam officiis.
        </p>
        </Link>
      </div>
        </div>
    )
}

export default Home
