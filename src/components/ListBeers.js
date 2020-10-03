import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItemList from './ItemList';
import Header from './Header';

function ListBeers() {
  const [getBeers, setGetBeers] = useState([]);

  const beerUrl = 'https://ih-beers-api2.herokuapp.com/beers';

  const http = axios.get(beerUrl);

  // useEffect(() => {
  //   (async () => {
  //     const response = await http;
  //     setGetBeers(response.data);
  //   })();
  // }, []);

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
      {getBeers.map((el) => (
        <ItemList key={el._id} element={el} />
      ))}
    </div>
  );
}

export default ListBeers;

//tres btn all beers, random beer, new beer
