import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div >
        <img src="./img/beers.png" alt="beers" />
        <div>
          <Link to="/beers" >
            All Beers
          </Link>
          <p>
           Link a todas las cervezas!
          </p>
        </div>
      </div>
      <div>
        <img src="./img/random-beer.png" alt="beers" />
        <div>
          <Link to="/random-beer">
            Random Beer
          </Link>
          <p>
            Dale clic al link y verás una cerveza aleatoria.
          </p>
        </div>
      </div>
      <div>
        <img src="./img/new-beer.png" alt="beers" />
        <div>
          <Link to="/new-beer" >
            New Beer
          </Link>
          <p>
           Crea una cerveza.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;