import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/SearchBar';

function Beers() {
  const [fetching, setFetching] = useState(true);
  const [beersListMemory, setBeersListMemory] = useState([]);
  const [beersListPrint, setBeersListPrint] = useState(beersListMemory);

  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((result) => {
      console.log('result', result.data);
      setBeersListMemory(result.data);
      setBeersListPrint(result.data);
      setFetching(false);
    });
  }, []);

  const SearchBeer = (str) => {
    let filteredBeer;

    if (str === '') {
      filteredBeer = beersListMemory;
    } else {
      filteredBeer = beersListMemory.filter((beer) => {
        return beer.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setBeersListPrint(filteredBeer);
  };

  const toggleShowSearch = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="beersList">
      <button className="button-search" onClick={toggleShowSearch}>
        {isShow ? 'Search' : 'Hide Search'}
      </button>
      {!isShow && <Search searchBeer={SearchBeer} />}
      {fetching && (
        <div className="loading">
          <h1>Loading ...</h1>
        </div>
      )}
      {beersListPrint.map((beer) => {
        return (
          <div>
            <img src={beer.image_url} />
            <a href={`/beers/${beer._id}`}>{beer.name}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
