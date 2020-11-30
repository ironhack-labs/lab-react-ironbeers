import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function BeerList() {
  const [beerList, setBeerList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function getAllBeerData(query) {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((beerData) => {
        setBeerList(beerData.data);
      })
      .catch((error) => console.error(`Something went wrong: ${error}`));
  }

  if (loaded) {
    return (
      <div>
        <Header />
        <SearchBar searchBeer={getAllBeerData} />
        <div className="beerList">
          {beerList.map((item) => (
            <Link to={`/beer/${item._id}`}>
              <div className="oneBeerInList" key={item._id}>
                <img src={item.image_url} alt={item.name} />
                <div className="infoWrapper">
                  <h4>{item.name}</h4>
                  <q>{item.tagline}</q>
                  <p>-<i>{item.contributed_by}</i>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    getAllBeerData(``);
    setLoaded(true);
    return <div>Loading</div>;
  }
}

export default BeerList;
