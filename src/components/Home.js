import React from 'react';

import AllBeers from '../assets/beers.png';
import RandomBeer from '../assets/random-beer.png'
import NewBeer from '../assets/new-beer.png'
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        
        <div className="AllBeers">
          <img src={AllBeers} alt="beers-img" />
          <Link to="/beers">
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>
        </div>

        <div className="AllBeers">
          <img src={RandomBeer} alt="Random-beer-img" />
          <Link to="/random-beer">
            <h2>Random beer</h2>
          </Link>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>
        </div>

        <div className="AllBeers">
          <img src={NewBeer} alt="New-beer-img" />
          <Link to="/new-beer">
            <h2>New beer</h2>
          </Link>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
