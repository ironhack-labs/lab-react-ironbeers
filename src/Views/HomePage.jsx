import React from 'react';
import { Link } from 'react-router-dom';
import beers from './../assets/beers.png';
import randomBeer from './../assets/random-beer.png';
import newBeer from './../assets/new-beer.png';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="HomePage__container">
      <h1>IronBeers</h1>
      <section>
        <img src={beers} alt="Beers list page" />
        <Link exact to="/beers" className="link"><h2>All Beers</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis dolorum enim, neque eius vero dolor officia sint fuga incidunt ratione dolorem, iusto ea ducimus libero placeat voluptate distinctio quasi.</p>
      </section>
      <section>
        <img src={randomBeer} alt="Random beer page" />
        <Link exact to="/random-beer" className="link"><h2>Random Beer</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis dolorum enim, neque eius vero dolor officia sint fuga incidunt ratione dolorem, iusto ea ducimus libero placeat voluptate distinctio quasi.</p>
      </section>
      <section>
        <img src={newBeer} alt="Random beer page" />
        <Link exact to="/add-beer" className="link"><h2>New Beer</h2></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis dolorum enim, neque eius vero dolor officia sint fuga incidunt ratione dolorem, iusto ea ducimus libero placeat voluptate distinctio quasi.</p>
      </section>
    </div>
  )
}

export default HomePage;
