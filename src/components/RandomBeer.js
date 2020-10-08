import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import ItemList from './ItemList';

function RandomBeer(props) {
  const [getBeers, setGetBeers] = useState([]);

  const beerUrl = 'https://ih-beers-api2.herokuapp.com/beers/random';

  const http = axios.get(beerUrl);

  useEffect(() => {
    http
      .then((response) => {
        setGetBeers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <ItemList element={getBeers} />
    </div>
  );
}

export default RandomBeer;

//tres btn all beers, random beer, new beer