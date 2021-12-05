import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../../assets/beers.png';
import newBeer from '../../assets/new-beer.png';
import randomBeer from '../../assets/random-beer.png';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1 className="mt-5 ">Ironbeers</h1>
      <div className="home d-flex align-items-center ">
        <div className="list-group container">
          <img src={beers} alt="beers" className="img-fluid p-5 " />
          <Link className="text-decoration-none " to="/beers">
            <button className="btn btn-block btn-lg btn-success  m-2">
              All Beers
            </button>
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            recusandae obcaecati, reiciendis doloremque repellat cumque
            voluptates minima eaque, sequi quos error vitae qui eius dolorum
            totam fugiat accusantium nulla vero!
          </p>
          <img src={randomBeer} alt="random beer" className="img-fluid p-5" />
          <Link className="text-decoration-none m-2" to="/random-beer">
            <button className="btn btn-block btn-lg btn-success m-2">
              Random Beer
            </button>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            incidunt ratione obcaecati nesciunt neque, illum ex perferendis
            cumque, non atque aspernatur tenetur nostrum veniam ipsa, architecto
            esse magnam? Officiis, aliquid!
          </p>
          <img src={newBeer} alt="new beer" className="img-fluid p-5" />
          <Link className="text-decoration-none m-2" to="/new-beer">
            <button className="btn btn-block btn-lg btn-success m-2">
              New Beer
            </button>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            incidunt ratione obcaecati nesciunt neque, illum ex perferendis
            cumque, non atque aspernatur tenetur nostrum veniam ipsa, architecto
            esse magnam? Officiis, aliquid!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
