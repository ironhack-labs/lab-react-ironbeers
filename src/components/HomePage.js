import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="">
      <Link to="/beers">
        <div>
          <img src={require('../assets/beers.png')} alt="bar" />
          <h1>All Beers</h1>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie
            leo, vitae iaculis nisl. Casamentiss faiz malandris se pirulitá.
            Leite de capivaris, leite de mula manquis sem cabeça. Suco de
            cevadiss deixa as pessoas mais interessantis.
          </p>
        </div>
      </Link>

      <Link to="/randombeer">
        <div>
          <img src={require('../assets/random-beer.png')} alt="bar" />
          <h1>Random Beer</h1>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie
            leo, vitae iaculis nisl. Casamentiss faiz malandris se pirulitá.
            Leite de capivaris, leite de mula manquis sem cabeça. Suco de
            cevadiss deixa as pessoas mais interessantis.
          </p>
        </div>
      </Link>

      <Link to="/newbeer">
        <div>
          <img src={require('../assets/new-beer.png')} alt="bar" />
          <h1>New Beer</h1>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie
            leo, vitae iaculis nisl. Casamentiss faiz malandris se pirulitá.
            Leite de capivaris, leite de mula manquis sem cabeça. Suco de
            cevadiss deixa as pessoas mais interessantis.
          </p>
        </div>
      </Link>
    </div>
  );
}
