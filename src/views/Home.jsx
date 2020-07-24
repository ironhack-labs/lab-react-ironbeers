import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Link to={'/beers/'}>
        <div className="container-beers">
          <img className="header-img" src="/1.png" alt="all beers" />

          <p>
            <h1>All Beers</h1>
            Là ben c'est un lien qui vous mènera vers la liste complète de
            toutes les bières !
          </p>
        </div>
      </Link>

      <Link to={'/random-beer/'}>
        <div className="container-beers">
          <img className="header-img" src="/2.png" alt="random beer" />

          <p>
            <h1>Random Beer</h1>
            Et là c'est plutôt un lien qui vous sélectionne aléatoirement une
            bière !
          </p>
        </div>
      </Link>

      <Link to={'/new-beer/'}>
        <div className="container-beers">
          <img className="header-img" src="/3.png" alt="new beer" />

          <p>
            <Link to={'/new-beer/'}>
              <h1>New Beer</h1>
            </Link>
            Ici, vous pouvez ajouter une bière à la liste, si vous le souhaitez
            !
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
