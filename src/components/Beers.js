import React from 'react';
import beers from '../assets/beers.png';
import Header from './Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BeersPage() {
  const [beersList, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log('Info recibida', response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <h2>Beers component</h2>
      <img src={beers} alt="beers" />
      <p>
        Aenean elit urna, auctor eu dignissim in, varius eget velit. Etiam et
        malesuada ex. Nulla ipsum orci, ullamcorper et aliquet nec, commodo ac
        eros. Morbi posuere nec est id rutrum. Suspendisse imperdiet turpis
        posuere massa rhoncus, eget aliquam diam cursus. Ut non nulla in felis
        accumsan feugiat et id ante. In a nisl placerat quam dictum iaculis.
      </p>
    </div>
  );
}

export default BeersPage;
